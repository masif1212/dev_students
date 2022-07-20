import TeacherAttendance from "../models/teacherAttendanceModel.js";



class TeacherAttendanceController {

  static teacherAttendance = async (req, res) => {
    const { body } = req;
    await body.forEach(function (obj) {
      var teacherAttendance = new TeacherAttendance(obj);
      teacherAttendance.save();
    });
    
  };

  static getTeacherAttendance = async (req, res) => {
    const getTeacherattendance = await TeacherAttendance.find({ "teacher_id_att": req.params.teacher_id_att}).select({ "first_name": 1, "createdAt":1, "_id" : 0, "attendance":1," teacher_id_att":1});
    res.send(getTeacherattendance);
  }

}

export default TeacherAttendanceController;