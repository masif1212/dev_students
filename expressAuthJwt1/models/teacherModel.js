import mongoose from "mongoose";


var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

// Defining Schema
const teacherSchema = new mongoose.Schema({
  teacher_id_att: {
    type    : mongoose.Schema.Types.ObjectId,
    default : mongoose.Types.ObjectId,
    index   : { unique: true }
  },
  schoolId:  { type: String, required: true, trim: true},
  schoolName: { type: String, required: true, trim: true },
  image: { type: String, required: true, trim: true },
  first_name: { type: String, required: true, trim: true,description: "must be a string and is required" },
  last_name: { type: String, required: true, trim: true },
  email: { type: String, required: 'Email address is required', trim: true,  
  validate: [validateEmail, 'Please fill a valid email address'], 
  match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] },
  password: { type: String, required: [true, 'password is required'], trim: true },
  confirm_password: { type: String, required: true, trim: true },
  cnic : { type: String, required: true, trim: true },
  contact: { type: String, required: true, trim: true },
  alt_contact: { type: String, required: true, trim: true },
  address_1: { type: String, required: true, trim: true },
  address_2: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
})

// Model
const TeachersModel = mongoose.model("teachers", teacherSchema)

export default TeachersModel