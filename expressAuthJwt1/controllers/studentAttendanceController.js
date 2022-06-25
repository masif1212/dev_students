import StudentAttendance from "../models/studentAttendanceModel.js"



class StudentAttendanceController {
    static MarkStudentAttendance = async (req, res) => {
      const { first_name, roll_no, attendance_status} = req.body
        if ( first_name && roll_no && attendance_status) {
            try {
              const doc = new StudentAttendance({
                first_name: first_name,
                roll_no: roll_no,
                attendance_status: attendance_status
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
      
    }
}  

export default StudentAttendanceController;