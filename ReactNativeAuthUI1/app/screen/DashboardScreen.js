import { View} from "react-native";
import React, { useEffect, useState,useLayoutEffect } from "react";
import { getToken } from "../../services/AsyncStorageService";
import { useGetLoggedUserQuery } from "../../services/userAuthApi";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../features/userSlice";
import { setUserToken } from "../../features/authSlice";
import CustomCard from "../Components/customCard/CustomCard";
import TeacherCustomCard from "../Components/customCard/TeachCustomCard";


const DashboardScreen = () => {
  const [userLToken, setUserLToken] = useState();

  useEffect(() => {
    (async () => {
      const token = await getToken(); // Getting Token from Storage
      setUserLToken(token); // Store Token in Local State
      
      dispatch(setUserToken({ token: token })); // Store Token in Redux Store
    })();
  });

  const { data, isSuccess } = useGetLoggedUserQuery(userLToken);

  // Store User Data in Redux Store
  const dispatch = useDispatch();
  useEffect(() => {
    if (isSuccess) {
      dispatch(
        setUserInfo({
          email: data.user.email,
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          image: data.user.image
        })
      );
    }
  });




  return (
    <View>
      {/* <Text>{userLToken}</Text> */}
      <TeacherCustomCard
        backgroundColor="#5062BD"
        title="  Attendance"
        color="white"
      />

      <CustomCard backgroundColor="#ffffff" title="Student Attendance" />

   
    </View>
  );
};

export default DashboardScreen;
