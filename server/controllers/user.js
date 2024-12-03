import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.js";

dotenv.config();

//backend logic to signin user => to verify already existing users credentials

export const signin = async (req, res) => {
  const JWT_SECRET = process.env.JWT_SECRET_KEY;
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email: email });

    if (!existingUser) {
      return res.status(404).json({ message: "User doesn`t exist." });
    }
    const isCorrectPassword = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isCorrectPassword) {
      return res
        .status(400)
        .json({ message: "invalid credentials (password)" });
    }
    //generate JWT token
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      JWT_SECRET,
      { expiresIn: "2h" } // token expries after 2 hours
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};

export const signup = async (req, res) => {
  const JWT_SECRET = process.env.JWT_SECRET_KEY;

  const { email, password, confirmPassword, firstName, lastName } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "passwords do not match" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      //save user account
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });
    const token = await jwt.sign(
      { email: result.email, id: result._id },
      JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.status(200).json({ result, token });
  } catch (error) {
    console.log("error occured here in signup", error);
    res.status(500).json({ message: "something went wrong here in signup" });
  }
};

//bcrypt is a cyrptographic hashing algorithm to hash the cedentials like passwords
//bcryptjs is a js library that uses bcrypt standard to encrypt password and it is stored as hashed only in db
//jwt.sign is used to generate a jwt token => jwt.sign(payload , secret , options)
//bcrypt.hash(password, salt round) => salt rounds =12 is increase a  stronger complexity in computational hasihng
//salt is a random generated string is combined with plain text then passed with no.of salt rounds to hashth creetials
