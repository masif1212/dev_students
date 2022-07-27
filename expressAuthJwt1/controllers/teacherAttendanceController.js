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
    const getTeacherattendance = await TeacherAttendance.find({ "teacher_id_att": req.params.teacher_id_att}).select({ "staffName": 1, "createdAt":1, "_id" : 0, "attendance":1," teacher_id_att":1});
    res.send(getTeacherattendance);
  }

  static getTeacherAttendanceDashboard = async (req, res) => {
    const getteacherattendancedashboard = await TeacherAttendance.find().select({ "staffName": 1, "_id" : 0, "attendance":1,"student_id_att":1});
    res.send(getteacherattendancedashboard);
  }
  static getTeacherAttendanceDashboardBySchoolID = async (req, res) => {
    const getteacherattendancedashboardbyschoolid = await TeacherAttendance.find({ "schoolId": req.params.schoolId}).select({ "staffName": 1, "_id" : 0, "attendance":1,"student_id_att":1});
    res.send(getteacherattendancedashboardbyschoolid);
  }
  static getTeacherAttendanceDashboardByTeacherID = async (req, res) => {
    const getteacherattendancedashboardbyteacherid = await TeacherAttendance.find({ "teacher_id_att": req.params.teacher_id_att});
    res.send(getteacherattendancedashboardbyteacherid);
  }

}

export default TeacherAttendanceController;