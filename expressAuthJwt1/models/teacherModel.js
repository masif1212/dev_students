import mongoose from "mongoose";

// Defining Schema
const teacherSchema = new mongoose.Schema({
  schoolName: { type: String, required: true, trim: true },
  image: { type: String, required: true, trim: true },
  first_name: { type: String, required: true, trim: true },
  last_name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  confirm_password: { type: String, required: true, trim: true },
  cnic : { type: String, required: true, trim: true },
  contact: { type: String, required: true, trim: true },
  alt_contact: { type: String, required: true, trim: true },
  address_1: { type: String, required: true, trim: true },
  address_2: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
})

// Model
const TeachersModel = mongoose.model("teachers", teacherSchema)

export default TeachersModel