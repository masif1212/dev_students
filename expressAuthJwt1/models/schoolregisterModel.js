import mongoose from "mongoose";

// Defining Schema
const userSchema = new mongoose.Schema({
  schoolcode: { type: String, required: true, trim: true },
  level: { type: String, required: true },
  categories: { type: String, required: true },
  school_name: { type: String, required: true, trim: true },
  partnername: { type: String, required: true, trim: true },
  selectedDistricts: { type: String, required: true, trim: true },
  selectedTehsil: { type: String, required: true, trim: true },
  address_1: { type: String, required: true, trim: true },
  address_2: { type: String, required: true, trim: true },
  uc: { type: String, required: true, trim: true },
  village: { type: String, required: true, trim: true }


})

// Model
const SchoolRegistrationModel = mongoose.model("school", userSchema)

export default SchoolRegistrationModel