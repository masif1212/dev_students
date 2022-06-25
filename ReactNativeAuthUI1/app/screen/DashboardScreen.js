import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { getToken } from "../../services/AsyncStorageService";
import { useGetLoggedUserQuery } from "../../services/userAuthApi";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../features/userSlice";
import { setUserToken } from "../../features/authSlice";
import CustomCard from "../Components/customCard/CustomCard";
import pic from '../../assets/images/chat.png'


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

export default DashboardScreen;
