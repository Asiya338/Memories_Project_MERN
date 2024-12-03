import mongoose from "mongoose";
//define schema for user data

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});
export default mongoose.model("User", userSchema);

//mongoose is Object-oriented Data modelling tool to connect the backend applcations like node.js with MongoDB (atlas i used)
//no need to direct query the database
//ensures integrity and user privacy , security with data
//schema is used to define the structure of data to be stored in the database collection
