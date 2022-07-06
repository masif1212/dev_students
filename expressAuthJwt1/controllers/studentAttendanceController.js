import StudentAttendance from "../models/studentAttendanceModel.js"

class StudentAttendanceController {
    static MarkStudentAttendance = async (req, res) => {
      const { body } = req;
      await body.forEach(function (obj) {
        var studentAttendance = new StudentAttendance(obj);
        studentAttendance.save();
      });
      
    };


} 

export default StudentAttendanceController;