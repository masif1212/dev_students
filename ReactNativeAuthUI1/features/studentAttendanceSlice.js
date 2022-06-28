import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  first_name: "",
  roll_no: "",
  attendance_status: "",
}
export const studentAttendanceSlice = createSlice({
  name: 'student_attendance_info',
  initialState,
  reducers: {
    setStudentAttendanceInfo: (state, action) => {
      state.first_name = action.payload.first_name
      state.roll_no = action.payload.roll_no
      state.attendance_status = action.payload.attendance_status
    },
    unSetStudentAttendanceInfo: (state, action) => {
        state.first_name = action.payload.first_name
        state.roll_no = action.payload.roll_no
        state.attendance_status = action.payload.attendance_status
    },
  }
})

export const { setStudentAttendanceInfo, unSetStudentAttendanceInfo } = studentAttendanceSlice.actions
export default studentAttendanceSlice.reducer