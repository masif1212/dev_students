import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Modal
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleModal from "../../Components/SimpleModal";

const SchoolAdmin = ({ navigation, route }) => {
  const [admin, setAdmin] = useState("");
  const newData = useSelector((state) => state.schoolAdmin);
  const [id, setId] = useState();
  const table = "schooladmin";

//=================================Delete==============================================//

const [isModalVisible, setIsModalVisible] = useState(false)
const [chooseData, setChooseData] = useState()

const changeModalVisible = (bool) => {
  setIsModalVisible(bool)
}
const setData = (data) => {
  setChooseData(data)
}
const closeModal =(bool,data) =>{
 changeModalVisible(bool)
  setData(data)
  }

  const handleFormSubmit = () => {
   const formData = {
        id,
        table
      };
      fetch("https://ams.firefly-techsolutions.com/services/deleterecord", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => res.json())
        .then((res) => res.type === 'success' ? closeModal(false) :null)

  };

//==================================Delete===============================================//



  const fetchData = async () => {
    fetch("https://ams.firefly-techsolutions.com/services/getschooladmin", {
      method: "POST", //GET and ...
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ schoolId: route.params.schoolid }),
    })
      .then((response) => response.json()) //   <------ this line
      .then((response) => {
        setAdmin(response.data);
      });
  };

  const focus = useIsFocused();

  useEffect(() => {
    fetchData();
  }, [focus]);

  return (
    <View style={styles.body}>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("SignupSchoolAdmin", {
              schoolid: route.params.schoolid,
              schoolName: route.params.schoolName,
            })
          }
          style={{
            borderRadius: 10,
            backgroundColor: "#5062BD",
            padding: 8,
            flexDirection: "row",
          }}
        >
          <Icon
            style={{
              color: "white",
              margin: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
            name="user-plus"
          />
          <Text
            style={{
              color: "white",
              marginTop: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Create Admin
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        enableEmptySections={true}
        data={admin}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("SchoolAdminProfile", {
                  image: item.image,
                  first_name: item.first_name,
                  last_name: item.last_name,
                  email: item.email,
                  contact: item.contact,
                  alt_contact: item.alt_contact,
                  cnic: item.cnic,
                  address_1: item.address_1,
                  address_2: item.address_2,
                  schoolName: item.schoolName,
                  gender: item.gender,
                  religion: item.religion,
                  maritalStatus: item.maritalStatus,
                  teacherQualification: item.teacherQualification,
                  teacherprofessionalqualification:
                    item.teacherprofessionalqualification,
                })
              }
            >
              <View style={styles.box}>
                <View
                  style={{
                    justifyContent: "center",
                  }}
                >
                  <Image style={styles.image} source={{ uri: item.image }} />
                </View>
                <View
                  style={{
                    margin: 0,
                    paddingLeft: 10,
                  }}
                >
                  <Text style={styles.username}>{item.first_name}</Text>

                  <Text style={styles.email}>{item.email}</Text>

                  <Text style={styles.email}>{item.schoolName}</Text>
                  <Text style={styles.email}>{item.address_1}</Text>
                </View>

                <View style={{ marginTop: 85, marginLeft: 68}}>
                  <TouchableOpacity onPress={() => {changeModalVisible(true), setId(item._id)}}>
                    <MaterialCommunityIcons
                      name="trash-can-outline"
                      size={25}
                      color="red"
                    />
                  </TouchableOpacity>
                </View>
                <Modal
                  transparent={true}
                  animationType='fade'
                  visible={isModalVisible}
                  nRequestClose={() => changeModalVisible(false)}
                >
                  <SimpleModal
                    changeModalVisible={changeModalVisible}
                      setData={setData}
                      onPressYes ={()=>{handleFormSubmit()}}
                      onPressNo={() =>closeModal(false,'No')}
                      text= "Are you sure you want to delete?"
                    />
                </Modal>

              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 110,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    marginLeft: 4,
  },
  body: {
    padding: 20,
    backgroundColor: "#E6E6FA",
  },
  box: {
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    shadowColor: "black",
    shadowOpacity: 0.2,
    flexDirection: "row",
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
    height: 120,
  },
  username: {
    color: "black",
    fontSize: 22,
    marginTop: 10,
  },
  email: {
    color: "black",
    fontSize: 12,
    marginVertical: 2,
  },
});

export default SchoolAdmin;
