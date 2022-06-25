import mongoose from "mongoose";

// Defining Schema
const userSchema = new mongoose.Schema({
  image: { type: String, required: true, trim: true },
  school_name: { type: String, required: true, trim: true },
  contact_no: { type: String, required: true, trim: true },
  district: { type: String, required: true, trim: true },
  province : { type: String, required: true, trim: true },
  location: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
})

// Model
const SchoolRegistrationModel = mongoose.model("school", userSchema)

export default SchoolRegistrationModel