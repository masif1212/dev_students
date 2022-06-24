import mongoose from "mongoose";

// Defining Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  contact: { type: String, required: true, trim: true },
  alt_contact: { type: String, required: true, trim: true },
  address_1: { type: String, required: true, trim: true },
  address_2: { type: String, required: true, trim: true },
  CNIC: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  tc: { type: Boolean, required: true }
})

// Model
const UserModel = mongoose.model("user", userSchema)

export default UserModel