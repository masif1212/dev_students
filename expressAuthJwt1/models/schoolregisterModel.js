import mongoose from "mongoose";

// Defining Schema
const userSchema = new mongoose.Schema({
  school_name: { type: String, required: true, trim: true },
  contact_no: { type: String, required: true, trim: true },
  district: { type: String, required: true, trim: true },
  province : { type: String, required: true, trim: true },
  address_1: { type: String, required: true, trim: true },
  address_2: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
})

// Model
const SchoolRegistrationModel = mongoose.model("school", userSchema)

export default SchoolRegistrationModel