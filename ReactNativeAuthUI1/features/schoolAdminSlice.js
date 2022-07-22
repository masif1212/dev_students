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
  cnic: "",
  S_NO:"",
  gender:"",
  religion:"",
  father_husband:"",
  dateofbirth:"",
  maritalStatus:"",
  salaryPaymentMethod: "",
  bankName:"",
  teacherQualification:"",
  teacherprofessionalqualification:""
  

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
      state.cnic = action.payload.cnic
      state.S_NO=action.payload.S_NO
      state.father_husband=action.payload.father_husband
      state.gender=action.payload.gender
      state.religion=action.payload.religion
      state.dateofbirth=action.payload.dateofbirth
      state.maritalStatus=action.payload.maritalStatus
      state.bankName=action.payload.bankName
      state.teacherQualification=action.payload.teacherQualification
      state.teacherprofessionalqualification=action.payload.teacherprofessionalqualification

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
      state.cnic = action.payload.cnic
      state.S_NO=action.payload.S_NO
      state.father_husband=action.payload.father_husband
      state.gender=action.payload.gender
      state.religion=action.payload.religion
      state.dateofbirth=action.payload.dateofbirth
      state.maritalStatus=action.payload.maritalStatus
      state.bankName=action.payload.bankName
      state.teacherQualification=action.payload.teacherQualification
      state.teacherprofessionalqualification=action.payload.teacherprofessionalqualification

  
    },
  }
})

export const { setSchoolAdminInfo, unSetSchoolAdminInfo } = schoolAdminSlice.actions
export default schoolAdminSlice.reducer