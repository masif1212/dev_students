import TeacherAttendance from "../models/teacherAttendanceModel.js";



class TeacherAttendanceController {
    static teacherAttendance = async (req, res) => {
      req.body.forEach(function(obj) {
        var teacherAttendance = new TeacherAttendance(obj);
        teacherAttendance.save();
      });
      
    };

}

export default TeacherAttendanceController;