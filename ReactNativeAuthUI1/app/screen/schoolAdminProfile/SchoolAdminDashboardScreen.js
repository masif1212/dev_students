import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { getToken } from "../../../services/AsyncStorageService";
import { useLoggedSchoolAdminQuery } from "../../../services/userAuthApi";
import { useDispatch } from "react-redux";
import { setSchoolAdminInfo } from "../../../features/schoolAdminSlice";
import { setUserToken } from "../../../features/authSlice";
import CustomCard from "../../Components/customCard/CustomCard";
import TeacherCustomCardForSchoolAdmin from "../../Components/customCard/SchoolAdminCustomCard/TeacherCustomCard.ForSchoolAdmin";
import StudentCustomCardForSchoolAdmin from "../../Components/customCard/SchoolAdminCustomCard/StudentCustomCardForSchoolAdmin";


const SchoolDashboardScreen = () => {
  const [userLToken, setUserLToken] = useState();

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
  useEffect(() => {
    if (isSuccess) {
      dispatch(
        setSchoolAdminInfo({
          id: data.user._id,
          address_1 : data.user.address_1,
          address_2 : data.user.address_2,
          contact: data.user.contact,
          alt_contact: data.user.alt_contact,
          cnic: data.user.cnic,
          city: data.user.city,
          schoolName: data.user.schoolName,
          email: data.user.email,
          first_name: data.user.first_name,
          last_name: data.user.last_name,
          image: data.user.image,
          schoolId: data.user.schoolId,
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

      <StudentCustomCardForSchoolAdmin backgroundColor="#ffffff" title="Student Attendance" />

   
    </View>
  );
};

export default SchoolDashboardScreen;
