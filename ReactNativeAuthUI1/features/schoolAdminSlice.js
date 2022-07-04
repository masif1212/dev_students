import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  id:"",
  schoolId: "",
  schoolName: "",
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
export const schoolAdminSlice = createSlice({
  name: 'user_info',
  initialState,
  reducers: {
    setSchoolAdminInfo: (state, action) => {
      state.id = action.payload.id;
      state.schoolName = action.payload.schoolName;
      state.schoolId = action.payload.schoolId
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
    unSetSchoolAdminInfo: (state, action) => {
      state.id = action.payload.id;
      state.schoolName = action.payload.schoolName;
      state.schoolId = action.payload.schoolId
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

export const { setSchoolAdminInfo, unSetSchoolAdminInfo } = schoolAdminSlice.actions
export default schoolAdminSlice.reducer