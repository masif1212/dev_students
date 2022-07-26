import SchoolRegistrationModel from "../models/schoolregisterModel.js"



class SchoolController {
    static schoolRegistration = async (req, res) => {
      const {  school_name, selectedDistricts, address_1, address_2,schoolcode,level,categories,selectedTehsil,uc,village,partnername} = req.body
        if (school_name && selectedDistricts && address_1 && address_2 && schoolcode && level && partnername && categories && selectedTehsil && uc && village ) {
            try {
              const doc = new SchoolRegistrationModel({
                school_name: school_name,
                selectedDistricts: selectedDistricts,
                address_1: address_1,
                address_2: address_2,
                schoolcode:schoolcode,
                level:level,
                categories:categories,
                partnername:partnername,
                selectedTehsil:selectedTehsil,
                uc:uc,
                village:village

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
          attributes: [ "school_name","address_1","address_2","selectedDistricts","schoolcode","level","categories","partnername","selectedTehsil","uc","village"]
        })
        res.json(school)
      }catch(err) {
        console.log(err)
      }
    }

  
}  

export default SchoolController;