import { View, Text } from "react-native";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { getToken } from "../../services/AsyncStorageService";
import { useGetLoggedUserQuery } from "../../services/userAuthApi";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../features/userSlice";
import { setUserToken } from "../../features/authSlice";
import CustomCard from "../Components/customCard/CustomCard";
import TeacherCustomCard from "../Components/customCard/TeachCustomCard";

const DashboardScreen = (route) => {
  const [userLToken, setUserLToken] = useState();
  const [compData, setCompData] = useState("");

  useEffect(() => {
    (async () => {
      const token = await getToken(); // Getting Token from Storage

      setUserLToken(token); // Store Token in Local State
      dispatch(setUserToken({ token: token })); // Store Token in Redux Store
    })();
  });

  // const { data, isSuccess } = useGetLoggedUserQuery(userLToken);
const isSuccess = true;
  const fetchData = async () => {
    fetch("https://ams.firefly-techsolutions.com/services/loggeduser", {
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
  // Store User Data in Redux Store
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
    dispatch(
      setUserInfo({
        email: compData.email,
        firstName: compData.firstName,
        lastName: compData.lastName,
        image: compData.image,
        CNIC: compData.CNIC,
        address_1: compData.address_1,
        address_2: compData.address_2,
        alt_contact: compData.alt_contact,
        city: compData.city,
        contact: compData.contact,
        dateofbirth: compData.dateofbirth,
        disability: compData.disability,
        disabledetail: compData.disabledetail,
        gender: compData.gender
      })
    );
    }
  });

  return (
    <View>
      {/* <Text>{userLToken}</Text> */}
      <TeacherCustomCard
        backgroundColor="#5062BD"
        title=" Teacher Attendance"
        color="white"
      />
      <CustomCard backgroundColor="#ffffff" title="Student Attendance" />
    </View>
  );
};

export default DashboardScreen;
