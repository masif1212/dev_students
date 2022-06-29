import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { getToken } from "../../../services/AsyncStorageService";
import { useGetLoggedTeachersQuery } from "../../../services/userAuthApi";
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

  const { data, isSuccess } = useGetLoggedTeachersQuery(userLToken);

  // Store User Data in Redux Store
  const dispatch = useDispatch();
  useEffect(() => {
    if (isSuccess) {
      dispatch(
        setTeacherInfo({
          email: data.user.email,
          first_name: data.user.first_name,
          last_name: data.user.last_name,
        })
        
      );
    }
  });

  return (
    <View>
      {/* <Text>{userLToken}</Text> */}
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
