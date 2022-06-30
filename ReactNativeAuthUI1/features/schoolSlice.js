import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  school_name: "",
  contact_no: "",
  address_1: "",
  address_2: "",
  province: "",
  district: "",
  city: ""

}
export const schoolSlice = createSlice({
  name: 'user_info',
  initialState,
  reducers: {
    setSchoolInfo: (state, action) => {
      state.school_name = action.payload.school_name
      state.contact_no = action.payload.contact_no
      state.address_1 = action.payload.address_1
      state.address_2 = action.payload.address_2
      state.province = action.payload.province
      state.district = action.payload.district
      state.city = action.payload.city

      
    },
    unSetSchoolInfo: (state, action) => {
      state.school_name = action.payload.school_name
      state.contact_no = action.payload.contact_no
      state.address_1 = action.payload.address_1
      state.address_2 = action.payload.address_2
      state.province = action.payload.province
      state.district = action.payload.district
      state.city = action.payload.city
    },
  }
})

export const { setSchoolInfo, unSetSchoolInfo } = schoolSlice.actions
export default schoolSlice.reducer