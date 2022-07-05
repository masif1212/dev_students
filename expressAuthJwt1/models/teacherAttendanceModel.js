import mongoose from "mongoose";

// Defining Schema
const teacherAttendanceSchema = new mongoose.Schema({
  first_name: { type: String, required: true, trim: true },
  last_name: { type: String, required: true, trim: true },
  attendance: { type: String, required: true, trim: true },
  schoolAdminID: { type: String, required: true, trim: true },
  schoolId: { type: String, required: true, trim: true },
  createdAt:  {type: Date, default: Date.now}  
})

// Model
const TeacherAttendance = mongoose.model("teacher_attendance", teacherAttendanceSchema)

export default TeacherAttendance