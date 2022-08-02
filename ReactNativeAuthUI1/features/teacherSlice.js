import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  teacherid : "",
  selectDivision:"",
  selectedDistricts:"",
  seletctedTehsil:"",
  schoolName:"",
  staffName:"",
  gender:"",
  religion:"",
  maritalStatus:"",
  formerProgramm:"",
  teacherQualification:"",
  teacherProfessionalQualification:"",
  teacherTraining:"",
  lsuTrainingDate:"",
  trainInWhichSubject:"",
  mentiontraining:"",
  trainingNumber:"",
  cnic:"",
  address_1:"",
  address_2:"",
  father_Name:"",
  email:"",
  password:"",
  confirm_password:"",
  contact:"",
  alt_contact:"",
  schoolId:"",
  image:"",
  staffPosition:"",
  teachingClass:"",
  subjectSpeciality:"",
  SubjectSpec:"",
  teachingmedium:"",
  teachingExperience:"",
  experienceDuration:"",
  dateofbirth:"",
  dateofJoining:"",
  contractstart:"",
  contractend:"",
  vaccinated:"",
  vaccineshots:"",
  vacinatedstatus:"",
  startingSalary:"",
  currentSalary:"",
  salaryPaymentMethod:"",
  bankname:"",
  accounttitle:"",
  bankdistrict:"",
  bankcity:"",
  ibanAccount:"",
  bankaccountnumber:"",
  schoolstaff:"",
  teachingSubject:""

}
export const teacherSlice = createSlice({
  name: 'user_info',
  initialState,
  reducers: {
    setTeacherInfo: (state, action) => {
      state.selectDivision = action.payload.selectDivision;
      state.selectedDistricts = action.payload.selectedDistricts;
      state.seletctedTehsil = action.payload.seletctedTehsil;
      state.teacherid = action.payload.teacherid;
      state.schoolName = action.payload.schoolName;
      state.schoolId = action.payload.schoolId;
      state.staffName = action.payload.staffName;
      state.staffPosition = action.payload.staffPosition;
      state.formerProgramm = action.payload.formerProgramm;
      state.schoolstaff = action.payload.schoolstaff;
      state.gender = action.payload.gender;
      state.religion = action.payload.religion;
      state.maritalStatus = action.payload.maritalStatus;
      state.dateofbirth = action.payload.dateofbirth;
      state.dateofJoining = action.payload.dateofJoining;
      state.contractstart = action.payload.contractstart;
      state.contractend = action.payload.contractend;
      state.teacherQualification = action.payload.teacherQualification;
      state.teacherProfessionalQualification = action.payload.teacherProfessionalQualification;
      state.teachingClass = action.payload.teachingClass;
      state.teachingSubject = action.payload.teachingSubject;
      state.subjectSpeciality = action.payload.subjectSpecial;
      state.SubjectSpec = action.payload.SubjectSpec;
      state.teachingmedium = action.payload.teachingmedium;
      state.teacherTraining = action.payload.teacherTraining;
      state.trainingNumber = action.payload.trainingNumber;
      state.trainInWhichSubject = action.payload.trainInWhichSubject;
      state.mentiontraining = action.payload.mentiontraining;
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
      state.father_Name = action.payload.father_Name;
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
      state.teacherid = action.payload.teacherid;
      state.selectDivision = action.payload.selectDivision;
      state.selectedDistricts = action.payload.selectedDistricts;
      state.seletctedTehsil = action.payload.seletctedTehsil;
      state.bankdistrict = action.payload.bankdistrict;
      state.schoolName = action.payload.schoolName;
      state.schoolId = action.payload.schoolId;
      state.staffName = action.payload.staffName;
      state.staffPosition = action.payload.staffPosition;
      state.formerProgramm = action.payload.formerProgramm;
      state.schoolstaff = action.payload.schoolstaff;
      state.gender = action.payload.gender;
      state.religion = action.payload.religion;
      state.maritalStatus = action.payload.maritalStatus;
      state.dateofbirth = action.payload.dateofbirth;
      state.dateofJoining = action.payload.dateofJoining;
      state.contractstart = action.payload.contractstart;
      state.contractend = action.payload.contractend;
      state.teacherQualification = action.payload.teacherQualification;
      state.teacherProfessionalQualification = action.payload.teacherProfessionalQualification;
      state.teachingClass = action.payload.teachingClass;
      state.teachingSubject = action.payload.teachingSubject;
      state.subjectSpeciality = action.payload.subjectSpecial;
      state.SubjectSpec = action.payload.SubjectSpec;
      state.teachingmedium = action.payload.teachingmedium;
      state.teacherTraining = action.payload.teacherTraining;
      state.trainingNumber = action.payload.trainingNumber;
      state.trainInWhichSubject = action.payload.trainInWhichSubject;
      state.mentiontraining = action.payload.mentiontraining;
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
      state.father_Name = action.payload.father_Name;
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