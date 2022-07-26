import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  districts: "",
  selectedTehsil: "",
  teacherid: "",
  schoolName: "",
  schoolId: "",
  staff_name: "",
  staffPosition:"",
  formerProgram: "",
  schoolstaff: "",
  gender: "",
  religion: "",
  maritalStatus: "",
  dateofbirth: "",
  dateofJoining: "",
  contractstart: "",
  contractend: "",
  teacherQualification: "",
  teacherprofessionalqualification: "",
  teachingClass: "",
  teachingSubject: "",
  subjectSpeciality: "",
  SubjectSpec: "",
  teachingmedium: "",
  teacherTraining: "",
  trainingnumber: "",
  trainInWhichSubject: "",
  mentionTraining: "",
  teachingExperience: "",
  experienceDuration: "",
  startingSalary: "",
  currentSalary: "",
  salaryPaymentMethod: "",
  bankname: "",
  bankdistrict: "",
  bankcity: "",
  accounttitle: "",
  ibanAccount: "",
  bankaccountnumber: "",
  father_name: "",
  image: "",
  email: "",
  contact: "",
  password: "",
  confirm_password: "",
  alt_contact: "",
  address_1: "",
  address_2: "",
  cnic: "",
  city: "",
  

}
export const teacherSlice = createSlice({
  name: 'user_info',
  initialState,
  reducers: {
    setTeacherInfo: (state, action) => {
      state.districts = action.payload.districts;
      state.selectedTehsil = action.payload.selectedTehsil;
      state.teacherid = action.payload.teacherid;
      state.schoolName = action.payload.schoolName;
      state.schoolId = action.payload.schoolId;
      state.staff_name = action.payload.first_name;
      state.staffPosition = action.payload.staffPosition;
      state.formerProgram = action.payload.formerProgram;
      state.schoolstaff = action.payload.schoolstaff;
      state.gender = action.payload.gender;
      state.religion = action.payload.religion;
      state.maritalStatus = action.payload.maritalStatus;
      state.dateofbirth = action.payload.dateofbirth;
      state.dateofJoining = action.payload.dateofJoining;
      state.contractstart = action.payload.contractstart;
      state.contractend = action.payload.contractend;
      state.teacherQualification = action.payload.teacherQualification;
      state.teacherprofessionalqualification = action.payload.teacherprofessionalqualification;
      state.teachingClass = action.payload.teachingClass;
      state.teachingSubject = action.payload.teachingSubject;
      state.subjectSpeciality = action.payload.subjectSpecial;
      state.SubjectSpec = action.payload.SubjectSpec;
      state.teachingmedium = action.payload.teachingmedium;
      state.teacherTraining = action.payload.teacherTraining;
      state.trainingnumber = action.payload.trainingnumber;
      state.trainInWhichSubject = action.payload.trainInWhichSubject;
      state.mentionTraining = action.payload.mentionTraining;
      state.teachingExperience = action.payload.teachingExperience;
      state.experienceDuration = action.payload.experienceDuration
      state.startingSalary = action.payload.startingSalary;
      state.currentSalary = action.payload.currentSalary;
      state.salaryPaymentMethod = action.payload.salaryPaymentMethod;
      state.bankname = action.payload.bankname;
      state.bankdistrict = action.payload.bankdistrict;
      state.bankcity = action.payload.bankcity;
      state.accounttitle = action.payload.accounttitle;
      state.ibanAccount = action.payload.ibanAccount;
      state.bankaccountnumber = action.payload.bankaccountnumber
      state.father_name = action.payload.last_name;
      state.image = action.payload.image;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.confirm_password = action.payload.confirm_password;
      state.contact = action.payload.contact;
      state.alt_contact = action.payload.alt_contact;
      state.address_1 = action.payload.address_1;
      state.address_2 = action.payload.address_2;
      state.cnic = action.payload.cnic;
      state.vaccinated = action.payload.vaccinated;
      state.vaccineshots = action.payload.vaccineshots;
      state.vacinatedstatus = action.payload.vacinatedstatus
    },
    unsetTeacherInfo: (state, action) => {
      state.schoolName = action.payload.schoolName;
      state.schoolId = action.payload.schoolId;
      state.staff_name = action.payload.first_name;
      state.staffPosition = action.payload.staffPosition;
      state.formerProgram = action.payload.formerProgram;
      state.schoolstaff = action.payload.schoolstaff;
      state.gender = action.payload.gender;
      state.religion = action.payload.religion;
      state.maritalStatus = action.payload.maritalStatus;
      state.dateofbirth = action.payload.dateofbirth;
      state.dateofJoining = action.payload.dateofJoining;
      state.contractstart = action.payload.contractstart;
      state.contractend = action.payload.contractend;
      state.teacherQualification = action.payload.teacherQualification;
      state.teacherprofessionalqualification = action.payload.teacherprofessionalqualification;
      state.teachingClass = action.payload.teachingClass;
      state.teachingSubject = action.payload.teachingSubject;
      state.subjectSpeciality = action.payload.subjectSpecial;
      state.SubjectSpec = action.payload.SubjectSpec;
      state.teachingmedium = action.payload.teachingmedium;
      state.teacherTraining = action.payload.teacherTraining;
      state.trainingnumber = action.payload.trainingnumber;
      state.trainInWhichSubject = action.payload.trainInWhichSubject;
      state.mentionTraining = action.payload.mentionTraining;
      state.teachingExperience = action.payload.teachingExperience;
      state.experienceDuration = action.payload.experienceDuration
      state.startingSalary = action.payload.startingSalary;
      state.currentSalary = action.payload.currentSalary;
      state.salaryPaymentMethod = action.payload.salaryPaymentMethod;
      state.bankname = action.payload.bankname;
      state.bankdistrict = action.payload.bankdistrict;
      state.bankcity = action.payload.bankcity;
      state.accounttitle = action.payload.accounttitle;
      state.ibanAccount = action.payload.ibanAccount;
      state.bankaccountnumber = action.payload.bankaccountnumber;
      state.father_name = action.payload.last_name;
      state.password = action.payload.password;
      state.confirm_password = action.payload.confirm_password;
      state.image = action.payload.image;
      state.email = action.payload.email;
      state.contact = action.payload.contact;
      state.alt_contact = action.payload.alt_contact;
      state.address_1 = action.payload.address_1;
      state.address_2 = action.payload.address_2;
      state.cnic = action.payload.cnic;
      state.vaccinated = action.payload.vaccinated;
      state.vaccineshots = action.payload.vaccineshots;
      state.vacinatedstatus = action.payload.vacinatedstatus
    },
  }
})

export const { setTeacherInfo, unsetTeacherInfo } = teacherSlice.actions
export default teacherSlice.reducer