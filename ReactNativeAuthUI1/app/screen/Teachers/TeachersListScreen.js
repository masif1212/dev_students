import React, { useState, useEffect,useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Pie from "../../Components/DrawerComponents/Pie";
import { useSelector } from 'react-redux';
import { useIsFocused } from "@react-navigation/native"; 


const TeachersListScreen = ({navigation, route})=> {

  const [teachers,setTeachers] = useState();

  const fetchData = async () => {
    fetch('https://ams.firefly-techsolutions.com/services/getTeacher',{
      method: 'POST',//GET and ...
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ schoolId: route.params.schoolid })
     })
     .then((response)=>response.json()) //   <------ this line 
     .then((response)=>{
       setTeachers(response.data)
     });
  };
  
 
  const focus = useIsFocused();

  useEffect(() => {
   fetchData();

  }, [focus]);


    return (
      <View style={styles.body}>


        <FlatList
          showsVerticalScrollIndicator={false}
          enableEmptySections={true}
          data={teachers}
          keyExtractor={(item) => item.email}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("TeachersProfile", {
                    first_name: item.first_name,
                    last_name:item.last_name,
                    email: item.email,
                    image: item.image,
                    address_1: item.address_1,
                    address_2: item.address_2,
                    contact: item.contact,
                    alt_contact: item.alt_contact,
                    city: item.city,
                    teacherId:item._id,
                    schoolName:item.schoolName,
                    gender: item.gender,
                    religion:item.religion,
                    maritalStatus:item.maritalStatus,
                    staffName:item.staffName,
                    staffPosition:item.staffPosition,
                    dateofJoining:item.dateofJoining,
                    contractstart:item.contractstart,
                    contractend:item.contractend,
                    teacherQualification:item.teacherQualification,
                    teacherprofessionalqualification:item.teacherprofessionalqualification,
                    teachingClass:item.teachingClass,
                    teachingSubject:item.teachingSubject,
                    SubjectSpec:item.SubjectSpec,
                    father_name:item.father_name,
                    selectedDistricts:item.selectedDistricts,
                    seletctedTehsil:item.seletctedTehsil,
                  })
                }
              >
                <View style={styles.box}>
                  <View
                    style={{
                      justifyContent: "center",
                      marginTop: 25,
                    }}
                  >
                    <Image style={styles.image} source={{uri:item.image}} />
                  </View>
                  <View
                    style={{
                      marginLeft: 60,
                      bottom: 50,
                   
                    }}
                  >
                    <Text style={styles.username}>{item.staffName}</Text>
                  </View>
                  <View
                    style={{
                      marginLeft: 60,
                      bottom: 50,
                    }}
                  >
                    <Text style={styles.email}>{item.email}</Text>
                  </View>
                  <View
                    style={{
                      marginLeft: 220,
                      bottom: 150,
                   
                    }}
                  >
                    {/* <Pie outerRadius={'50%'} /> */}
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
  


const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 70,
    borderRadius: 40,
    marginLeft: 3,
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
    marginLeft: 10,
    bottom:5
  },
  email: {
    color: "black",
    fontSize: 12,
    marginLeft: 10,
    bottom:5
  },
});
export default TeachersListScreen;