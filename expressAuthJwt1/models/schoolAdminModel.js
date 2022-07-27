import mongoose from "mongoose";

// Defining Schema
const schoolAdminSchema = new mongoose.Schema({
  id: { type: String, trim: true, unique: false},
  schoolId : { type: String, required: true, trim: true},
  schoolName : { type: String, required: true, trim: true},
  S_NO : { type: String, required: true, trim: true},
  image: { type: String, required: true, trim: true },
  father_husband : { type: String, required: true, trim: true},
  first_name: { type: String, required: true, trim: true },
  last_name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  confirm_password: { type: String, required: true, trim: true },
  cnic : { type: String, required: true, trim: true },
  contact: { type: String, required: true, trim: true },
  alt_contact: { type: String, required: true, trim: true }, 
  address_1: { type: String, required: true, trim: true },
  gender: { type: String, required: true, trim: true },
  religion: { type: String, required: true, trim: true },
  dateofbirth: { type: String, required: true, trim: true },
  maritalStatus: { type: String, required: true, trim: true },
  bankname: { type: String, trim: true },
  teacherQualification: [{ type: String, required: true, trim: true }],
  teacherprofessionalqualification: [{ type: String, required: true, trim: true }],
  accounttitle: { type: String, trim: true },
  ibanAccount: { type: String, trim: true },
  bankaccountnumber: { type: String, trim: true },
  bankcity: [{ type: String, trim: true }],
  bankdistrict: [{ type: String, trim: true }],
  salaryPaymentMethod: { type: String},
  selectedDistricts: { type: String, required: true, trim: true }

  



})

// Model
const SchoolAdminModel = mongoose.model("schooladmin", schoolAdminSchema)

export default SchoolAdminModel