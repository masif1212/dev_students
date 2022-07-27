import mongoose from "mongoose";


var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

// Defining Schema
const teacherSchema = new mongoose.Schema({
  teacher_id_att: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,
    index: { unique: true }
  },
  selectDivision : { type: String, required: true, trim: true},
  selectedDistricts:{ type: String, required: true, trim: true},
  seletctedTehsil:{ type: String, required: true, trim: true},
  schoolId:{ type: String, required: true, trim: true},
  image:{ type: String, required: true, trim: true},
  schoolName:{ type: String, required: true, trim: true},
  staffName:{ type: String, required: true, trim: true},
  gender:{ type: String, required: true, trim: true},
  religion:{ type: String, required: true, trim: true},
  maritalStatus:{ type: String, required: true, trim: true},
  formerProgramm:{ type: String, required: true, trim: true},
  teacherQualification:{ type: String, required: true, trim: true},
  teacherProfessionalQualification:{ type: String, required: true, trim: true},
  teacherTraining:{ type: String},
  lsuTrainingDate:{ type: String},
  trainInWhichSubject:{ type: String},
  mentiontraining:{ type: String},
  trainingNumber:{ type: String},
  father_Name:{ type: String, required: true},
  email:{ type: String, required: true, trim: true},
  password:{ type: String, required: true, trim: true},
  confirm_password:{ type: String, required: true, trim: true},
  contact:{ type: String, required: true, trim: true},
  alt_contact:{ type: String, required: true, trim: true},
  cnic:{ type: String, required: true, trim: true},
  address_1:{ type: String, required: true, trim: true},
  address_2:{ type: String, required:true, trim: true},
  staffPosition:{ type: String, required: true, trim: true},
  teachingClass: [{ type: String, required: true, trim: true }],
  schoolstaff:{ type: String, required: true, trim: true},
  teachingSubject:[ { type: String, required: true, trim: true }],
  dateofbirth:{type:String, required: true, trim: true},
  dateofJoining:{ type: String, required: true, trim: true},
  contractstart:{ type: String, required: true, trim: true},
  contractend:{ type: String, required: true, trim: true},
  subjectSpeciality:{ type: String},
  SubjectSpec: [{ type: String}],
  teachingmedium:{ type: String, required: true, trim: true},
  teachingExperience:{ type: String},
  experienceDuration:{type:String},
  startingSalary:{ type: String, required: true, trim: true},
  currentSalary:{ type: String, required: true, trim: true},
  salaryPaymentMethod:{ type: String, required: true, trim: true},
  bankname:{ type: String},
  accounttitle:{ type: String},
  bankdistrict:{ type: String},
  bankcity:{ type: String},
  ibanAccount:{ type: String},
  bankaccountnumber:{ type: String},
  vaccinated:{ type: String},
  vaccineshots:{ type: String},
  vacinatedstatus:{ type: String},
})

// Model
const TeachersModel = mongoose.model("teachers", teacherSchema)

export default TeachersModel