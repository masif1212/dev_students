import express from 'express';
const router = express.Router();
import UserController from '../controllers/userController.js';
import checkUserAuth from '../middlewares/auth-middleware.js';
import chechSchAdminAuth from '../middlewares/schoolAdminMiddleware.js';
import StudentController from '../controllers/studentController.js';
import SchoolController from '../controllers/schoolController.js';
import StudentAttendanceController from '../controllers/studentAttendanceController.js';
import SchoolAdminController from '../controllers/schoolAdminController.js';
import TeachersController from '../controllers/teachersController.js'
import checkTeacherAuth from '../middlewares/teacherMiddleware.js'
import TeacherAttendanceController from '../controllers/teacherAttendanceController.js'


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
router.get('/getStudents/:schoolId', StudentController.getStudents)
router.get('/getSomestudents/:schoolId', StudentController.getSomStudents)
router.get('/getstudentsattendance/:student_id_att', StudentAttendanceController.getStudentsAttendance)




//school
router.post('/createschool', SchoolController.schoolRegistration)
router.get('/getschools', SchoolController.getSchool)

//student attendance
router.post('/studentattendance', StudentAttendanceController.MarkStudentAttendance)

// router.get('/getstudentsattendancedata', StudentAttendanceController.getStudentsAttendanceData)


//SCHOOL aDMIN MODEL
router.post('/schooladmin', SchoolAdminController.schooladminRegistration)
router.get('/getschooladmin', SchoolAdminController.getSchoolAdmins)

router.get('/getSchoolAdmin/:schoolId', SchoolAdminController.getschoolAdmin)

router.post('/schoolAdminlogin', SchoolAdminController.schoolAdminLogin)
router.use('/loggedSchoolAdmin', chechSchAdminAuth)
router.get('/loggedSchoolAdmin', SchoolAdminController.loggedSchoolAdmin)

router.get('/getstudentsattendance/:schoolId', StudentAttendanceController.getStudentsAttendance)



//TEACHER ROUTES
router.post('/registerTeacher', TeachersController.teachersRegistration)
router.post('/teachersLogin', TeachersController.teachersLogin)
router.use('/loggedTeachers', checkTeacherAuth)
router.get('/loggedTeachers', TeachersController.loggedTeachers)
router.get('/getTeachers', TeachersController.getTeachers)
router.get('/getteacher/:schoolId', TeachersController.getTeacher)
router.get('/getSometeacher/:schoolId', TeachersController.getSomeTeacher)
router.post('/teacherattendance', TeacherAttendanceController.teacherAttendance)
router.get('/getteacherattendance/:teacher_id_att', TeacherAttendanceController.getTeacherAttendance)







// router.get('/getStudents/:schoolId', function(req, res) {
//     try{
//         res.send("tagId is set to " + req.params.schoolId);
//         const students =  StudentModel.findAll({ where : {schoolId: req.params.schoolId}});
//         res.json(students)
//       } catch (error) {
//         console.log(error);
//       }
//   });



export default router