import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  superAdminId: "",
  email: "",
  firstName: "",
  lastName: "",
  image: "",
  contact: "",
  alt_contact: "",
  address_1: "",
  address_2: "",
  CNIC: "",
  city: "",
  gender: "",
  disability: "",
  disabledetail:"",
  dateofbirth: "",

}
export const userSlice = createSlice({
  name: 'user_info',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.superAdminId= action.payload.superAdminId
      state.dateofbirth= action.payload.dateofbirth
      state.disabledetail = action.payload.disabledetail
      state.disability = action.payload.disability
      state.gender = action.payload.gender
      state.email = action.payload.email
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.image = action.payload.image
      state.contact = action.payload.contact
      state.alt_contact = action.payload.alt_contact
      state.address_1 = action.payload.address_1
      state.address_2 = action.payload.address_2
      state.CNIC = action.payload.CNIC
      state.city = action.payload.city
    },
    unSetUserInfo: (state, action) => {
      state.superAdminId= action.payload.superAdminId
      state.dateofbirth= action.payload.dateofbirth
      state.disabledetail = action.payload.disabledetail
      state.disability = action.payload.disability
      state.gender = action.payload.gender
      state.email = action.payload.email
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.image = action.payload.image
      state.contact = action.payload.contact
      state.alt_contact = action.payload.alt_contact
      state.address_1 = action.payload.address_1
      state.address_2 = action.payload.address_2
      state.CNIC = action.payload.CNIC
      state.city = action.payload.city
    },
  }
})

export const { setUserInfo, unSetUserInfo } = userSlice.actions
export default userSlice.reducer