import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  email: "",
  first_name: "",
  last_name: "",
  image: "",
  contact: "",
  password: "",
  confirm_password: "",
  alt_contact: "",
  address_1: "",
  address_2: "",
  cnic: "",
  city: ""

}
export const teacherSlice = createSlice({
  name: 'user_info',
  initialState,
  reducers: {
    setTeacherInfo: (state, action) => {
      state.email = action.payload.email
      state.first_name = action.payload.first_name
      state.last_name = action.payload.last_name
      state.image = action.payload.image
      state.password = action.payload.password
      state.confirm_password = action.payload.confirm_password
      state.contact = action.payload.contact
      state.alt_contact = action.payload.alt_contact
      state.address_1 = action.payload.address_1
      state.address_2 = action.payload.address_2
      state.cnic = action.payload.cnic
      state.city = action.payload.city
    },
    unsetTeacherInfo: (state, action) => {
      state.email = action.payload.email
      state.first_name = action.payload.first_name
      state.last_name = action.payload.last_name
      state.password = action.payload.password
      state.confirm_password = action.payload.confirm_password
      state.image = action.payload.image
      state.contact = action.payload.contact
      state.alt_contact = action.payload.alt_contact
      state.address_1 = action.payload.address_1
      state.address_2 = action.payload.address_2
      state.cnic = action.payload.cnic
      state.city = action.payload.city
    },
  }
})

export const { setTeacherInfo, unsetTeacherInfo } = teacherSlice.actions
export default teacherSlice.reducer