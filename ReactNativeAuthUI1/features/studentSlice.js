import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  first_name: "",
  last_name: "",
}
export const studentSlice = createSlice({
  name: 'student_info',
  initialState,
  reducers: {
    setStudentInfo: (state, action) => {
      state.image = action.payload.image
      state.first_name = action.payload.first_name
      state.last_name = action.payload.last_name
      state.father_name = action.payload.father_name
      state.father_cnic = action.payload.father_cnic
      state.contact = action.payload.contact
      state.emergency_contact = action.payload.emergency_contact
      state.address_1 = action.payload.address_1
      state.address_2 = action.payload.address_2
      state.roll_no = action.payload.roll_no
      state.student_class = action.payload.student_class
      state.section = action.payload.section
      state.city = action.payload.city
    },
    unSetStudentInfo: (state, action) => {
      state.image = action.payload.image
      state.first_name = action.payload.first_name
      state.last_name = action.payload.last_name
      state.father_name = action.payload.father_name
      state.father_cnic = action.payload.father_cnic
      state.contact = action.payload.contact
      state.emergency_contact = action.payload.emergency_contact
      state.address_1 = action.payload.address_1
      state.address_2 = action.payload.address_2
      state.roll_no = action.payload.roll_no
      state.student_class = action.payload.student_class
      state.section = action.payload.section
      state.city = action.payload.city
    },
  }
})

export const { setStudentInfo, unSetStudentInfo } = studentSlice.actions
export default studentSlice.reducer