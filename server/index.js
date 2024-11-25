import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import path from "path";

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes); //localhost:5000/posts
app.use("/user", userRoutes);

const __dirname = path.resolve(); // This gets the correct directory path
app.use(express.static(path.join(__dirname, "client/build")));

// Fallback route for React (client-side routing)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

//mongoose connection => MongoDB Atlas

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 5000;

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
