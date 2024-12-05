import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.js";
import nodemailer from "nodemailer";
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
    res.status(500).json({ message: "something went wrong here in signup" });
  }
};

//bcrypt is a cyrptographic hashing algorithm to hash the cedentials like passwords
//bcryptjs is a js library that uses bcrypt standard to encrypt password and it is stored as hashed only in db
//jwt.sign is used to generate a jwt token => jwt.sign(payload , secret , options)
//bcrypt.hash(password, salt round) => salt rounds =12 is increase a  stronger complexity in computational hasihng
//salt is a random generated string is combined with plain text then passed with no.of salt rounds to hashth creetials

//logic to reset password request

export const resetPasswordRequest = async (req, res) => {
  const JWT_SECRET = process.env.JWT_SECRET_KEY;

  try {
    const { email } = req.body;
    const existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      return res
        .status(404)
        .json({ message: "User not found with this email address" });
    }
    const token = jwt.sign({ email: existingUser.email }, JWT_SECRET, {
      expiresIn: "1h",
    });

    const resetUrl = `${process.env.CLIENT_URL}/reset-password/${token}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: existingUser.email,
      subject: "Request to reset password",
      html: `<p>Click <a href=${resetUrl}>here</a> to reset your password</p>`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Password reset email sent successfully" });
  } catch (error) {
    res.status(500).json({
      message: `error in sending request to reset password : , ${error}`,
    });
  }
};

//logic to reset password

export const resetPassword = async (req, res) => {
  const { password, token } = req.body;
  try {
    const decodedData = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findOne({ email: decodedData.email });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    user.password = hashedPassword;
    await user.save();
  } catch (error) {
    res.status(500).json({ message: `error to reset password : , ${error}` });
  }
};
