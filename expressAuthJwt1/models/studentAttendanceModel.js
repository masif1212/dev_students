import mongoose from "mongoose";

// Defining Schema
const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true, trim: true },
  last_name: { type: String, required: true, trim: true },
  roll_no: { type: String, required: true, trim: true },
  attendance_status: { type: String, required: true, trim: true },
  teacher_id: { type: String, required: true, trim: true },
  student_id: { type: String, required: true, trim: true },
  school_id: { type: String, required: true, trim: true },
  createdAt:  {type: Date, default: Date.now},
  section: { type: String, required: true, trim: true },
  student_class: { type: String, required: true, trim: true },
  
})

// Model
const StudentAttendance = mongoose.model("student_attendance", userSchema)

export default StudentAttendance