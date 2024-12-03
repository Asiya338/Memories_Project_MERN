import jwt from "jsonwebtoken"; // for session management , user authentication
import dotenv from "dotenv";

dotenv.config();

const auth = async (req, res, next) => {
  const JWT_SECRET = process.env.JWT_SECRET_KEY;

  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res
        .status(401)
        .json({ message: "Authorization header is missing" });
    }

    const token = authHeader.split(" ")[1];
    const isCustomToken = token.length < 500;

    let decodedData;
    if (token && isCustomToken) {
      try {
        decodedData = jwt.verify(token, JWT_SECRET); // Throws an error if expired
        req.userId = decodedData?.id;
      } catch (err) {
        if (err.name === "TokenExpiredError") {
          return res.status(401).json({ message: "Token has expired" });
        } else {
          return res.status(401).json({ message: "Invalid token" });
        }
      }
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }

    next(); // Move to the next middleware or route handler
  } catch (error) {
    console.error("Authentication error in auth middleware:\n", error);
    return res.status(401).json({ message: "Authentication failed" });
  }
};

export default auth;

// jwt secret key is usd in custom token is to be sent on server to sign the token
//ensures integrity , and authencity of user
//same secret key is used to signin , signup the user
//jwt.verify = > verify token and decode the token
//jwt.decode = > only decode the token as google oauth as it is trusted token
