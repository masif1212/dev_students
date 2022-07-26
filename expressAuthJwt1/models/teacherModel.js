import mongoose from "mongoose";


var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

// Defining Schema
const teacherSchema = new mongoose.Schema({
  districts: { type: String, required: true, trim: true },
  selectedTehsil: { type: String, required: true, trim: true },
  teacher_id_att: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,
    index: { unique: true }
  },
  schoolId: { type: String, required: true, trim: true },
  schoolName: { type: String, required: true, trim: true },
  image: { type: String, required: true, trim: true },
  staff_name: { type: String, required: true, trim: true, description: "must be a string and is required" },
  staffPosition: { type: String, required: true, trim: true },
  formerProgram: { type: String, required: true, trim: true },
  schoolstaff: { type: String, required: true },
  gender: { type: String, required: true },
  religion: { type: String, required: true, trim: true },
  maritalStatus: { type: String, required: true, trim: true },
  dateofbirth: { type: String, required: true, trim: true },
  dateofJoining: { type: String, required: true, trim: true },
  contractstart: { type: String, required: true, trim: true },
  contractend: { type: String, required: true, trim: true },
  teacherQualification: { type: String, required: true, trim: true },
  teacherprofessionalqualification: { type: String, required: true, trim: true },
  teachingClass: { type: String, required: true, trim: true },
  teachingSubject: { type: String, required: true, trim: true },
  subjectSpeciality: { type: Boolean},
  SubjectSpec: { type: String, required: true, trim: true },
  teachingmedium: { type: String, required: true, trim: true },
  teacherTraining: { type: Boolean},
  trainingnumber: { type: String, required: true, trim: true },
  trainInWhichSubject: { type: String, required: true, trim: true },
  mentionTraining: { type: String, required: true, trim: true },
  teachingExperience: { type: Boolean },
  experienceDuration: { type: String, required: true, trim: true },
  startingSalary: { type: String, required: true, trim: true },
  currentSalary: { type: String, required: true, trim: true },
  salaryPaymentMethod: { type: String, required: true },
  bankname: { type: String, required: true, trim: true },
  bankdistrict: { type: String, required: true, trim: true },
  bankcity: { type: String, required: true, trim: true },
  accounttitle: { type: String, required: true, trim: true },
  ibanAccount: { type: String, required: true, trim: true },
  bankaccountnumber: { type: String, required: true, trim: true },
  father_name: { type: String, required: true, trim: true },
  email: {
    type: String, required: 'Email address is required', trim: true,
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: { type: String, required: [true, 'password is required'], trim: true },
  confirm_password: { type: String, required: true, trim: true },
  cnic: { type: String, required: true, trim: true },
  contact: { type: String, required: true, trim: true },
  alt_contact: { type: String, required: true, trim: true },
  address_1: { type: String, required: true, trim: true },
  address_2: { type: String, required: true, trim: true },
  vaccinated:{ type: Boolean},
  vaccineshots:{ type: String, required: true, trim: true},
  vacinatedstatus:{ type: String, required: true, trim: true},

})

// Model
const TeachersModel = mongoose.model("teachers", teacherSchema)

export default TeachersModel