import mongoose from "mongoose";

// Defining Schema
const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true, trim: true },
  last_name: { type: String, required: true, trim: true },
  roll_no: { type: String, required: true, trim: true },
  attendance: { type: String, required: true, trim: true },
  teacherId: { type: String, required: true, trim: true },
  _id: { type: String, required: true, unique: false, trim: true },
  schoolId: { type: String, required: true, trim: true },
  createdAt:  {type: Date, default: Date.now},
  section: { type: String, required: true, trim: true },
  student_class: { type: String, required: true, trim: true },
  
})

// Model
const StudentAttendance = mongoose.model("student-attendances", userSchema)

export default StudentAttendance