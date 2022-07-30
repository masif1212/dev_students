import { View } from "react-native";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { getToken } from "../../../services/AsyncStorageService";
import { useLoggedTeachersQuery } from "../../../services/userAuthApi";
import { useDispatch } from "react-redux";
import { setTeacherInfo } from "../../../features/teacherSlice.js";
import { setUserToken } from "../../../features/authSlice";
import TeacherLandingPage from "../Teachers/TeacherLandingPage";
import { useIsFocused } from "@react-navigation/native"; 


const TeacherDashboardScreen = () => {
  const [userLToken, setUserLToken] = useState();
  const [ teacherData, setTeacherData ] = useState("");
  const focus = useIsFocused();
  useEffect(() => {
    (async () => {
      const token = await getToken(); // Getting Token from Storage
      setUserLToken(token); // Store Token in Local State
      dispatch(setUserToken({ token: token })); // Store Token in Redux Store
    })();
  });

  const isSuccess = true;
  const fetchData = async () => {
    fetch("https://ams.firefly-techsolutions.com/services/loggedTeachers", {
      method: "POST", //GET and ...
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: userLToken }),
    })
      .then((response) => response.json()) //   <------ this line
      .then((response) => {
        setTeacherData(response.data);
      });
  };

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    fetchData();
  }, [focus]);

  // Store User Data in Redux Store
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        setTeacherInfo({
          selectDivision : teacherData.selectDivision,
          teacherid : teacherData._id,
          selectedDistricts : teacherData.selectedDistricts,
          seletctedTehsil:   teacherData.seletctedTehsil,
          schoolName : teacherData.schoolName,
          staffName : teacherData.staffName,
          gender : teacherData.gender,
          religion : teacherData.religion,
          maritalStatus : teacherData.maritalStatus,
          formerProgramm : teacherData.formerProgramm,
          teacherQualification : teacherData.teacherQualification,
          teacherProfessionalQualification : teacherData.teacherProfessionalQualification,
          teacherTraining : teacherData.teacherTraining,
          lsuTrainingDate : teacherData.lsuTrainingDate,
          trainInWhichSubject : teacherData.trainInWhichSubject,
          mentiontraining : teacherData.mentiontraining,
          trainingNumber : teacherData.trainingNumber,
          cnic : teacherData.cnic,
          address_1 : teacherData.address_1,
          address_2 : teacherData.address_2,
          father_Name : teacherData.father_Name,
          email : teacherData.email,
          password : teacherData.hashPassword,
          confirm_password : teacherData.hashPassword,
          contact : teacherData.contact,
          alt_contact : teacherData.alt_contact,
          schoolId : teacherData.schoolId,
          image  : teacherData.image,
          staffPosition : teacherData.staffPosition,
          teachingClass : teacherData.teachingClass,
          subjectSpeciality : teacherData.subjectSpeciality,
          SubjectSpec : teacherData.SubjectSpec,
          teachingmedium : teacherData.teachingmedium,
          teachingExperience : teacherData.teachingExperience,
          experienceDuration : teacherData.experienceDuration,
          dateofbirth : teacherData.dateofbirth,
          dateofJoining : teacherData.dateofJoining,
          contractstart : teacherData.contractstart,
          contractend : teacherData.contractend,
          vaccinated : teacherData.vaccinated,
          vaccineshots : teacherData.vaccineshots,
          vacinatedstatus : teacherData.vacinatedstatus,
          startingSalary : teacherData.startingSalary,
          currentSalary : teacherData.currentSalary,
          salaryPaymentMethod : teacherData.salaryPaymentMethod,
          bankname : teacherData.bankname,
          accounttitle : teacherData.accounttitle,
          bankdistrict : teacherData.bankdistrict,
          bankcity : teacherData.bankcity,
          ibanAccount : teacherData.ibanAccount,
          bankaccountnumber : teacherData.bankaccountnumber,
          schoolstaff : teacherData.schoolstaff,
          teachingSubject : teacherData.teachingSubject
        })
        
      );
    }
  });

  return (
    <View>
     
      {/* <CustomCard
        backgroundColor="#5062BD"
        title="Teacher Attendance"
        color="white"
      />

      <CustomCard backgroundColor="#ffffff" title="Student Attendance" /> */}
      <TeacherLandingPage />

   
    </View>
  );
};

export default TeacherDashboardScreen; 
