import React, { useState,useEffect } from "react";
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
import { useGetTeachersQuery } from '../../../services/userAuthApi'
import { useIsFocused } from "@react-navigation/native"; 
import { useDispatch } from "react-redux";
import { setTeacherInfo } from "../../../features/teacherSlice";


const TeachersListForSchoolAdmin = ({navigation}) => {
  
  const {data} = useGetTeachersQuery();
  const [teachers,setTeachers] = useState();


  const dispatch = useDispatch();
  useEffect(()=>{
    if (data) {
      dispatch(
        setTeacherInfo({
          email: data.user.email,
          firstName: data.user.first_name,
          lastName: data.user.last_name,
        })
      );
    }
   
  }, [focus])
  const focus = useIsFocused();
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
                      marginLeft: 220,
                      bottom: 150,
                   
                    }}
                  >
                    <Pie outerRadius={'50%'} />
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
