import TeacherAttendance from "../models/teacherAttendanceModel.js";



class TeacherAttendanceController {
    static teacherAttendance = async (req, res) => {
      const { first_name, last_name, attendance, id, schoolAdminId, schoolId} = req.body
        if ( first_name && last_name && attendance && id && schoolAdminId&& schoolId) {
            try {
              const doc = new TeacherAttendance({
                first_name: first_name,
                last_name: last_name,
                attendance: attendance,
                id: id,
                schoolAdminId: schoolAdminId,
                schoolId: schoolId,  
              })
              await doc.save()
              res.status(201).send({ "status": "success", "message": "Registration Success"})
            } catch (error) {
              console.log(error)
              res.send({ "status": "failed", "message": "Unable to Register" })
            }
        } else {
          res.send({ "status": "failed", "message": "All fields are required" })
        }
      
    };

}

export default TeacherAttendanceController;