import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  school_name: "",
  address_1: "",
  address_2: "",
  selectedDistricts: "",
  schoolcode:"",
  level:"",
  categories:"",
  partnername:"",
  selectedTehsil:"",
  uc:"",
  village:""

}
export const schoolSlice = createSlice({
  name: 'user_info',
  initialState,
  reducers: {
    setSchoolInfo: (state, action) => {
      state.school_name = action.payload.school_name
      state.address_1 = action.payload.address_1
      state.address_2 = action.payload.address_2
      state.selectedDistricts = action.payload.selectedDistricts
      state.schoolcode = action.payload.schoolcode
      state.level = action.payload.level
      state.categories = action.payload.categories
      state.partnername = action.payload.partnername
      state.selectedTehsil = action.payload.selectedTehsil
      state.uc = action.payload.uc
      state.village = action.payload.village



      
    },
    unSetSchoolInfo: (state, action) => {
      state.school_name = action.payload.school_name
      state.address_1 = action.payload.address_1
      state.address_2 = action.payload.address_2
      state.selectedDistricts = action.payload.selectedDistricts
      state.schoolcode = action.payload.schoolcode
      state.level = action.payload.level
      state.categories = action.payload.categories
      state.partnername = action.payload.partnername
      state.selectedTehsil = action.payload.selectedTehsil
      state.uc = action.payload.uc
      state.village = action.payload.village
    },
  }
})

export const { setSchoolInfo, unSetSchoolInfo } = schoolSlice.actions
export default schoolSlice.reducer