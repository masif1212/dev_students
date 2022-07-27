import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { getToken } from "../../../services/AsyncStorageService";
import { useLoggedTeachersQuery } from "../../../services/userAuthApi";
import { useDispatch } from "react-redux";
import { setTeacherInfo } from "../../../features/teacherSlice.js";
import { setUserToken } from "../../../features/authSlice";
import CustomCard from "../../Components/customCard/CustomCard";


const TeacherDashboardScreen = () => {
  const [userLToken, setUserLToken] = useState();

  useEffect(() => {
    (async () => {
      const token = await getToken(); // Getting Token from Storage
      setUserLToken(token); // Store Token in Local State
      dispatch(setUserToken({ token: token })); // Store Token in Redux Store
    })();
  });

  const { data, isSuccess } = useLoggedTeachersQuery(userLToken);

  // Store User Data in Redux Store
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(data.user.address_1)
    if (isSuccess) {
      dispatch(
        setTeacherInfo({
          selectDivision : data.user.selectDivision,
          selectedDistricts : data.user.selectedDistricts,
          seletctedTehsil:   data.user.seletctedTehsil,
          schoolName : data.user.schoolName,
          staffName : data.user.staffName,
          gender : data.user.gender,
          religion : data.user.religion,
          maritalStatus : data.user.maritalStatus,
          formerProgramm : data.user.formerProgramm,
          teacherQualification : data.user.teacherQualification,
          teacherProfessionalQualification : data.user.teacherProfessionalQualification,
          teacherTraining : data.user.teacherTraining,
          lsuTrainingDate : data.user.lsuTrainingDate,
          trainInWhichSubject : data.user.trainInWhichSubject,
          mentiontraining : data.user.mentiontraining,
          trainingNumber : data.user.trainingNumber,
          cnic : data.user.cnic,
          address_1 : data.user.address_1,
          address_2 : data.user.address_2,
          father_Name : data.user.father_Name,
          email : data.user.email,
          password : data.user.hashPassword,
          confirm_password : data.user.hashPassword,
          contact : data.user.contact,
          alt_contact : data.user.alt_contact,
          schoolId : data.user.schoolId,
          image  : data.user.image,
          staffPosition : data.user.staffPosition,
          teachingClass : data.user.teachingClass,
          subjectSpeciality : data.user.subjectSpeciality,
          SubjectSpec : data.user.SubjectSpec,
          teachingmedium : data.user.teachingmedium,
          teachingExperience : data.user.teachingExperience,
          experienceDuration : data.user.experienceDuration,
          dateofbirth : data.user.dateofbirth,
          dateofJoining : data.user.dateofJoining,
          contractstart : data.user.contractstart,
          contractend : data.user.contractend,
          vaccinated : data.user.vaccinated,
          vaccineshots : data.user.vaccineshots,
          vacinatedstatus : data.user.vacinatedstatus,
          startingSalary : data.user.startingSalary,
          currentSalary : data.user.currentSalary,
          salaryPaymentMethod : data.user.salaryPaymentMethod,
          bankname : data.user.bankname,
          accounttitle : data.user.accounttitle,
          bankdistrict : data.user.bankdistrict,
          bankcity : data.user.bankcity,
          ibanAccount : data.user.ibanAccount,
          bankaccountnumber : data.user.bankaccountnumber,
          schoolstaff : data.user.schoolstaff,
          teachingSubject : data.user.teachingSubject
        })
        
      );
    }
  });

  return (
    <View>
     
      <CustomCard
        backgroundColor="#5062BD"
        title="Teacher Attendance"
        color="white"
      />

      <CustomCard backgroundColor="#ffffff" title="Student Attendance" />

   
    </View>
  );
};

export default TeacherDashboardScreen; 
