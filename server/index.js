import express from "express";

import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", //  specific client URL
    credentials: true,
  })
);

app.use("/posts", postRoutes); //localhost:5000/posts
app.use("/user", userRoutes);
//mongoose connection => MongoDB Atlas

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = 5000;

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on Port: http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("error connecting to MongoDB : ", error);
  });

//mongoose.set('useFindAndModify', false);
