import TeachersModel from '../models/teacherModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import transporter from '../config/emailConfig.js'

class TeachersController {
  static teachersRegistration = async (req, res) => {
    const {schoolId, schoolName, first_name,last_name,image, email, password, confirm_password, contact, alt_contact,  address_1, address_2, cnic, city } = req.body
    const user = await TeachersModel.findOne({ email: email })
    if (user) {
      res.send({ "status": "failed", "message": "Email already exists" })
    } else {
      if (first_name && email && password && confirm_password ) {
        if (password === confirm_password) {
          try {
            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(password, salt)
            const doc = new TeachersModel({
              schoolId: schoolId,
              schoolName: schoolName,
              image: image,
              first_name: first_name,
              last_name: last_name,
              email: email,
              password: hashPassword,
              confirm_password : hashPassword,
              contact: contact,
              alt_contact: alt_contact,
              address_1: address_1,
              address_2: address_2,
              cnic: cnic,
              city: city,
             
            })
            await doc.save()
            const saved_user = await TeachersModel.findOne({ email: email })
            // Generate JWT Token
            const token = jwt.sign({ userID: saved_user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
            res.status(201).send({ "status": "success", "message": "Registration Success", "token": token })
          } catch (error) {
            console.log(error)
            res.send({ "status": "failed", "message": "Unable to Register" })
          }
        } else {
          res.send({ "status": "failed", "message": "Password and Confirm Password doesn't match" })
        }
      } else {
        res.send({ "status": "failed", "message": "All fields are required" })
      }
    }
  }

  static teachersLogin = async (req, res) => {
    try {
      const { email, password } = req.body
      if (email && password) {
        const user = await TeachersModel.findOne({ email: email })
        if (user != null) {
          const isMatch = await bcrypt.compare(password, user.password)
          if ((user.email === email) && isMatch) {
            // Generate JWT Token
            const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
            res.send({ "status": "success", "message": "Login Success", "token": token })
          } else {
            res.send({ "status": "failed", "message": "Email or Password is not Valid" })
          }
        } else {
          res.send({ "status": "failed", "message": "You are not a Registered User" })
        }
      } else {
        res.send({ "status": "failed", "message": "All Fields are Required" })
      }
    } catch (error) {
      console.log(error)
      res.send({ "status": "failed", "message": "Unable to Login" })
    }
  }

  static changeUserPassword = async (req, res) => {
    const { password, confirm_password } = req.body
    if (password && confirm_password) {
      if (password !== confirm_password) {
        res.send({ "status": "failed", "message": "New Password and Confirm New Password doesn't match" })
      } else {
        const salt = await bcrypt.genSalt(10)
        const newHashPassword = await bcrypt.hash(password, salt)
        await TeachersModel.findByIdAndUpdate(req.user._id, { $set: { password: newHashPassword } })
        res.send({ "status": "success", "message": "Password changed succesfully" })
      }
    } else {
      res.send({ "status": "failed", "message": "All Fields are Required" })
    }
  }

  static loggedTeachers = async (req, res) => {
    res.send({ "user": req.user })
  }

  static sendUserPasswordResetEmail = async (req, res) => {
    const { email } = req.body
    if (email) {
      const user = await TeachersModel.findOne({ email: email })
      if (user) {
        const secret = user._id + process.env.JWT_SECRET_KEY
        const token = jwt.sign({ userID: user._id }, secret, { expiresIn: '15m' })
        const link = `http://127.0.0.1:3000/api/user/reset/${user._id}/${token}`
        console.log(link)
        // Send Email
        let info = await transporter.sendMail({
          from: process.env.EMAIL_FROM,
          to: user.email,
          subject: "GeekShop - Password Reset Link",
          html: `<a href=${link}>Click Here</a> to Reset Your Password`
        })
        res.send({ "status": "success", "message": "Password Reset Email Sent... Please Check Your Email" })
      } else {
        res.send({ "status": "failed", "message": "Email doesn't exists" })
      }
    } else {
      res.send({ "status": "failed", "message": "Email Field is Required" })
    }
  }

  static userPasswordReset = async (req, res) => {
    const { password, confirm_password } = req.body
    const { id, token } = req.params
    const user = await TeachersModel.findById(id)
    const new_secret = user._id + process.env.JWT_SECRET_KEY
    try {
      jwt.verify(token, new_secret)
      if (password && confirm_password) {
        if (password !== confirm_password) {
          res.send({ "status": "failed", "message": "New Password and Confirm New Password doesn't match" })
        } else {
          const salt = await bcrypt.genSalt(10)
          const newHashPassword = await bcrypt.hash(password, salt)
          await TeachersModel.findByIdAndUpdate(user._id, { $set: { password: newHashPassword } })
          res.send({ "status": "success", "message": "Password Reset Successfully" })
        }
      } else {
        res.send({ "status": "failed", "message": "All Fields are Required" })
      }
    } catch (error) {
      console.log(error)
      res.send({ "status": "failed", "message": "Invalid Token" })
    }
  }

  static getTeachers = async (req, res) => {
    try{
      const teachers = await TeachersModel.find({
        attributes: [ "id", "first_name","last_name","image", "email", "password", "confirm_password", "contact", "alt_contact",  "address_1", "address_2", "cnic", "city"]
      });
      res.json(teachers)
    } catch (error) {
      console.log(error);
    }

  }
  static getTeacher = async (req, res) => {
    const teacher = await TeachersModel.find({'schoolId': req.params.schoolId});
    res.send(teacher);
  }

  static getSomeTeacher = async (req, res) => {
    const teacherSome = await TeachersModel.find({'schoolId': req.params.schoolId}).select({"teacher_id_att": 1, "first_name": 1,  "schoolId": 1, "last_name": 1, "_id" : 0});;
    res.send(teacherSome);
  }

 



 
}

export default TeachersController