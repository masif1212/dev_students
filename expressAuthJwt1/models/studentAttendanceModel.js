import mongoose from "mongoose";

// Defining Schema
const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true, trim: true },
  roll_no: { type: String, required: true, trim: true },
  attendance_status: { type: String, required: true, trim: true },
})

// Model
const StudentAttendance = mongoose.model("student-attendance", userSchema)

export default StudentAttendance