import React, { Component ,useState,useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Pie from "../../Components/DrawerComponents/Pie";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useSelector } from 'react-redux';
import { useIsFocused } from "@react-navigation/native";


const SchoolAdmin = ({ navigation, route }) => { 
  const [admin,setAdmin] = useState('');
  const newData = useSelector(state => state.schoolAdmin);


  const fetchData = async () => {
    fetch('https://ams.firefly-techsolutions.com/services/getschooladmin',{
      method: 'POST',//GET and ...
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ schoolId: route.params.schoolid })
     })
     .then((response)=>response.json()) //   <------ this line 
     .then((response)=>{
       setAdmin(response.data)
       console.log(admin)
     });
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
          onPress={()=>navigation.navigate('SignupSchoolAdmin',{
            schoolid: route.params.schoolid,
            schoolName:route.params.schoolName,
          })}
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
              }}>Create Admin</Text>
          </TouchableOpacity>
          </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          enableEmptySections={true}
          data={admin}
          keyExtractor={(item) => item.email}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("SchoolAdminProfile", {
                    image:item.image,
                    first_name: item.first_name,
                    last_name: item.last_name,
                    email: item.email,
                    contact:item.contact,
                    alt_contact:item.alt_contact,
                    cnic:item.cnic,
                    address_1:item.address_1,
                    address_2:item.address_2,
                    schoolName:item.schoolName,
                    gender: item.gender,
                    religion:item.religion,
                    maritalStatus:item.maritalStatus,
                    teacherQualification:item.teacherQualification,
                    teacherprofessionalqualification:item.teacherprofessionalqualification

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
                    <Image style={styles.image} source={{ uri: item.image }} />
                  </View>
                  <View
                    style={{
                      marginLeft: 60,
                      bottom: 50,
                   
                    }}
                  >
                    <Text style={styles.username}>{item.first_name}</Text>
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
                      marginLeft: 60,
                      bottom: 50,
                    }}
                  >
                    <Text style={styles.email}>{item.schoolName}</Text>
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

export default SchoolAdmin
