import SchoolRegistrationModel from "../models/schoolregisterModel.js"



class SchoolController {
    static schoolRegistration = async (req, res) => {
      const {  school_name, contact_no, district, province, address_1, address_2, city} = req.body
        if (school_name && contact_no && district && province && address_2 && address_1 && city) {
            try {
              const doc = new SchoolRegistrationModel({
                school_name: school_name,
                contact_no: contact_no,
                district: district,
                province: province,
                address_1: address_1,
                address_2: address_2,
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

    static getSchool = async(req,res)=>{
      try{
        const school = await SchoolRegistrationModel.find({
          attributes: [ "school_name","contact_no","address_1","address_2","province","distrct",'city']
        })
        res.json(school)
      }catch(err) {
        console.log(err)
      }
    }
}  

export default SchoolController;