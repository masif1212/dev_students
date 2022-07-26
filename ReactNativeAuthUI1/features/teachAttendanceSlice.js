import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  first_name:"",
  last_name: "",
  attendance: "",
  id: "",
  schoolAdminId: "",
  schoolId: "",
  teacher_id_att: "",
}
export const teacherAttendanceSlice = createSlice({
  name: 'user_info',
  initialState,
  reducers: {
    setTeacherAttendInfo: (state, action) => {
      state.id = action.payload.id;
      state.schoolAdminId = action.payload.schoolAdminId;
      state.attendance = action.payload.attendance
      state.id = action.payload.id
      state.schoolAdminId = action.payload.schoolAdminId
      state.schoolId = action.payload.schoolId
      state.schoolId = action.payload.schoolId
    },
  }
})

export const { setTeacherAttendInfo, unsetTeacherAttendInfo } = teacherAttendanceSlice.actions
export default teacherAttendanceSlice.reducer