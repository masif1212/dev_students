import StudentModel from '../models/StudentModel.js'



class StudentController {
    static studentRegistration = async (req, res) => {
      const {religion,lastschool,reasonleft,currentshift,dateofbirth,disability, disabledetail,gender,schoolId, schoolName, image, first_name, last_name, father_name, father_cnic, contact,roll_no,  emergency_contact, address_1, address_2, student_class, section ,city} = req.body
        if ( image && first_name && last_name && father_name && father_cnic && contact &&  emergency_contact && address_1 && address_2 && student_class && section && city) {
            try {
              const doc = new StudentModel({
                religion:religion,
                lastschool:lastschool,
                reasonleft: reasonleft,
                currentshift: currentshift,
                dateofbirth: dateofbirth,
                disability: disability,
                disabledetail:disabledetail,
                schoolName: schoolName,
                schoolId: schoolId,
                image: image,
                first_name: first_name,
                last_name: last_name,
                father_name: father_name,
                father_cnic: father_cnic,
                contact: contact,
                emergency_contact: emergency_contact,
                address_1: address_1,
                address_2: address_2,
                roll_no: roll_no,
                student_class: student_class,
                section: section,
                city: city,
                gender:gender

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

    static studentsGet = async (req, res) => {
      try {
        const students = await StudentModel.find({
          attributes: [
            "image",
            "first_name",
            "last_name",
            "father_name",
            "father_cnic",
            "contact",
            "emergency_contact",
            "address_1",
            "address_2",
            "roll_no",
            "student_class",
            "section",
            "city"
  
  
          ],
        });
        res.json(students);
      } catch (error) {
        console.log(error);
      }
    };
    

    static getStudents = async (req, res) => {
      const students = await StudentModel.find({'schoolId': req.params.schoolId});
      res.send(students);
    }

    static getSomStudents = async (req, res) => {
      const studentSome = await StudentModel.find({'schoolId': req.params.schoolId}).select({ "first_name": 1, "student_id_att": 1, "schoolId": 1, "last_name": 1,"roll_no":1, "student_class":1, "section" : 1, "_id" : 0});;
      res.send(studentSome);
    }
}  
    

export default StudentController;