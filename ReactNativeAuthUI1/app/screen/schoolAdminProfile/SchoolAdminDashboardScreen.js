import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { getToken } from "../../../services/AsyncStorageService";
import { useLoggedSchoolAdminQuery } from "../../../services/userAuthApi";
import { useDispatch } from "react-redux";
import { setSchoolAdminInfo } from "../../../features/schoolAdminSlice";
import { setUserToken } from "../../../features/authSlice";
import TeacherCustomCardForSchoolAdmin from "../../Components/customCard/SchoolAdminCustomCard/TeacherCustomCard.ForSchoolAdmin";
import StudentCustomCardForSchoolAdmin from "../../Components/customCard/SchoolAdminCustomCard/StudentCustomCardForSchoolAdmin";

const SchoolDashboardScreen = () => {
  const [userLToken, setUserLToken] = useState();
  const [compData, setCompData] = useState("");

  useEffect(() => {
    (async () => {
      const token = await getToken(); // Getting Token from Storage
      setUserLToken(token); // Store Token in Local State

      dispatch(setUserToken({ token: token })); // Store Token in Redux Store
    })();
  });

  const { data, isSuccess } = useLoggedSchoolAdminQuery(userLToken);

  // Store User Data in Redux Store
  const dispatch = useDispatch();
  const fetchData = async () => {
    fetch("https://ams.firefly-techsolutions.com/services/loggedSchoolAdmin", {
      method: "POST", //GET and ...
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: userLToken }),
    })
      .then((response) => response.json()) //   <------ this line
      .then((response) => {
        setCompData(response.data);
      });
  };

  useEffect(() => {
    fetchData();
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        setSchoolAdminInfo({
          S_NO: compData.S_NO,
          schoolAdminiId: compData._id,
          accounttitle: compData.accounttitle,
          address_1: compData.address_1,
          alt_contact: compData.alt_contact,
          bankName: compData.bankName,
          bankaccountnumber: compData.bankaccountnumber,
          bankcity: compData.bankcity,
          bankdistrict: compData.bankdistrict,
          cnic: compData.cnic,
          confirm_password: compData.confirm_password,
          contact: compData.contact,
          dateofbirth: compData.dateofbirth,
          email: compData.email,
          father_husband: compData.father_husband,
          first_name: compData.first_name,
          gender: compData.gender,
          ibanAccount: compData.ibanAccount,
          image: compData.image,
          last_name: compData.last_name,
          maritalStatus: compData.maritalStatus,
          password: compData.password,
          religion: compData.religion,
          salaryPaymentMethod: compData.salaryPaymentMethod,
          schoolId: compData.schoolId,
          schoolName: compData.schoolName,
          selectedDistricts: compData.selectedDistricts,
          teacherQualification: compData.teacherQualification,
          teacherprofessionalqualification: compData.teacherQualification,
        })
      );
    }
  });

  return (
    <View>
      {/* <Text>{userLToken}</Text> */}
      <TeacherCustomCardForSchoolAdmin
        backgroundColor="#5062BD"
        title="Teacher Attendance"
        color="white"
      />

      <StudentCustomCardForSchoolAdmin
        backgroundColor="#ffffff"
        title="Student Attendance"
      />
    </View>
  );
};

export default SchoolDashboardScreen;
