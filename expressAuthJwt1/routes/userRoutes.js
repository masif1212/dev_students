import express from 'express';
const router = express.Router();
import UserController from '../controllers/userController.js';
import checkUserAuth from '../middlewares/auth-middleware.js';
import chechSchAdminAuth from '../middlewares/schoolAdminMiddleware.js';
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
router.post('/createstudent', StudentController.studentRegistration);
router.get('/getstudent',StudentController.studentsGet)


//school
router.post('/createschool', SchoolController.schoolRegistration)

//student attendance
router.post('/studentattendance', StudentAttendanceController.MarkStudentAttendance)
// router.get('/getstudentsattendancedata', StudentAttendanceController.getStudentsAttendanceData)


//SCHOOL aDMIN MODEL
router.post('/schooladmin', SchoolAdminController.schooladminRegistration)
router.post('/schoolAdminlogin', SchoolAdminController.schoolAdminLogin)
router.use('/loggedSchoolAdmin', chechSchAdminAuth)
router.get('/loggedSchoolAdmin', SchoolAdminController.loggedSchoolAdmin)





export default router