import React, { useState,useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,

} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useSelector } from 'react-redux';
import { useIsFocused } from "@react-navigation/native"; 



const TeachersListForSchoolAdmin = ({navigation}) => {
  
  const [teachers,setTeachers] = useState();

  const newData = useSelector(state => state.schoolAdmin);

  const fetchData = async () => {
    const resp = await fetch(`http://192.168.18.14:8000/api/user/getteacher/${newData.schoolId}`);
    const data = await resp.json();
    setTeachers(data);
  };
  
  const focus = useIsFocused();

  useEffect(() => {
   fetchData();
  }, [focus]);


    return (
      <View style={styles.body}>
           <View style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                 
               
          }}>
          <TouchableOpacity 
          onPress={()=>navigation.navigate('AddTeacherForm')}
          style={{
              borderRadius:10,
              backgroundColor:'#5062BD',
              padding:8,
              flexDirection:'row',
          }}>
              <Icon style={{
                  color:'white',
                  margin:5,
                  justifyContent:'center',
                  alignItems:'center'
                }}
               name="user-plus" />
              <Text style={{
                  color:'white',
                  marginTop:2,
                  justifyContent:'center',
                  alignItems:'center'
              }}>Add Teacher</Text>
          </TouchableOpacity>
          </View>
        
        <FlatList
          showsVerticalScrollIndicator={false}
          enableEmptySections={true}
              data={teachers}
          keyExtractor={item => item.image}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("TeachersProfile", {
                    teacher_id_att:item.teacher_id_att,
                    staffName:item.staffName,
                    email: item.email,
                    image: item.image,
                    address_1: item.address_1,
                    address_2: item.address_2,
                    contact: item.contact,
                    alt_contact: item.alt_contact,
                    city: item.city,
                    teacher_id_att:item.teacher_id_att,
                    schoolName:item.schoolName,
                    gender: item.gender,
                    religion:item.religion,
                    maritalStatus:item.maritalStatus,
                    staff_name:item.staff_name,
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
                    <Image style={styles.image} preview={{ preview: item.image }} />
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
                      left: 120,
                      bottom: 154,
                      // position:"absolute"
                   
                    }}
                  >
                    {/* <TeacherListPieChart  outerRadius={'60%'} teacherId = {item.teacher_id_att}/> */}
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
    marginTop: 10,
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



export default TeachersListForSchoolAdmin
