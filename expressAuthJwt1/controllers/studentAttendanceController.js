import StudentAttendance from "../models/studentAttendanceModel.js"
import moment from"moment";

class StudentAttendanceController {
    static MarkStudentAttendance = async (req, res) => {
      const { body } = req;
      await body.forEach(function (obj) {
        var studentAttendance = new StudentAttendance(obj);
        studentAttendance.save();
      });
      
      
    };
    static getStudentsAttendance = async (req, res) => {
      const getstudentsattendance = await StudentAttendance.find({'student_id_att': req.params.student_id_att}).select({ "first_name": 1, "createdAt":1, "_id" : 0, "attendance":1,"student_id_att":1});
      res.send(getstudentsattendance);
    }
} 
console.log(moment().utc().format('YYYY-MM-DD'))

export default StudentAttendanceController;