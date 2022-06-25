import SchoolRegistrationModel from "../models/schoolregisterModel.js"



class SchoolController {
    static schoolRegistration = async (req, res) => {
      const { image, school_name, contact_no, district, province, location,city} = req.body
        if (image&& school_name && contact_no && district && province && location && city) {
            try {
              const doc = new SchoolRegistrationModel({
                image: image,
                school_name: school_name,
                contact_no: contact_no,
                district: district,
                province: province,
                location: location,
                city: city,
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

export default SchoolController;