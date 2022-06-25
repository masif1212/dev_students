import express from 'express';
const router = express.Router();
import UserController from '../controllers/userController.js';
import checkUserAuth from '../middlewares/auth-middleware.js';
import StudentController from '../controllers/studentController.js';
import SchoolController from '../controllers/schoolController.js';
import StudentAttendanceController from '../controllers/studentAttendanceController.js';
import SchoolAdminController from '../controllers/schoolAdminController.js';


// ROute Level Middleware - To Protect Route
router.use('/changepassword', checkUserAuth)
router.use('/loggeduser', checkUserAuth)

// Public Routes
router.post('/register', UserController.userRegistration)
router.post('/login', UserController.userLogin)
router.post('/send-reset-password-email', UserController.sendUserPasswordResetEmail)
router.post('/reset-password/:id/:token', UserController.userPasswordReset)

// Protected Routes
router.post('/changepassword', UserController.changeUserPassword)
router.get('/loggeduser', UserController.loggedUser)

//students
router.post('/createstudent', StudentController.studentRegistration)

//school
router.post('/createschool', SchoolController.schoolRegistration)

//student attendance
router.post('/studentattendance', StudentAttendanceController.MarkStudentAttendance)

//SCHOOL aDMIN MODEL
router.post('/schooladmin', SchoolAdminController.schooladminRegistration)


export default router