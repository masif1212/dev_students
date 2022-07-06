import mongoose from "mongoose";

// Defining Schema
const studentSchema = new mongoose.Schema({
  student_id_att: {
    type    : mongoose.Schema.Types.ObjectId,
    default : mongoose.Types.ObjectId,
    index   : { unique: true }
  },
  schoolId :  { type: String, required: true, trim: true},
  schoolName: { type: String, required: true, trim: true },
  image: { type: String, required: true, trim: true },
  first_name: { type: String, required: true, trim: true },
  last_name: { type: String, required: true, trim: true },
  father_name: { type: String, required: true, trim: true },
  father_cnic : { type: String, required: true, trim: true },
  contact: { type: String, required: true, trim: true },
  emergency_contact: { type: String, required: true, trim: true },
  address_1: { type: String, required: true, trim: true },
  address_2: { type: String, required: true, trim: true },
  roll_no: { type: String, required: true, trim: true },
  student_class: { type: String, required: true, trim: true },
  section: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
})

// Model
const StudentModel = mongoose.model("students", studentSchema)

export default StudentModel