import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, {useState, useEffect} from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";





const SchoolAdminHomePage = (route) => {
  const navigation = useNavigation(); 
  const newData = useSelector(state => state.schoolAdmin);
  const [ schoolId, setSchoolId] = useState('');
const [ schoolName, setSchoolName] = useState('');


  useEffect(() => {
    setSchoolId(newData.schoolId);
    setSchoolName(newData.schoolName);
  })


  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      

        <TouchableOpacity
        onPress={() => navigation.navigate('TeachersListForSchoolAdmin')}
        
          style={{
            padding: 20,
            borderRadius: 20,
            margin: 10,
            backgroundColor: "white",
            width: "40%",
            elevation:2
          }}
        >
          <View
            style={{
              flexDirection: "row",
              padding: 5,
            }}
          >
            <Icon
              style={{
                marginRight: 5,
                color: "#5062BD",
              }}
              name="user"
              size={30}
              color="#900"
            />
            <Text
              style={{
                padding: 3,
                fontSize: 20,
                fontWeight: "300",
              }}
            >
              Teachers
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>navigation.navigate('CreateStudent',{
          schoolId: schoolId,
          schoolName: schoolName
        })}
          style={{
            padding: 20,
            borderRadius: 20,
            margin: 10,
            backgroundColor: "white",
            width: "40%",
            elevation:2
          }}
        >
          <View
            style={{
              flexDirection: "row",
              padding: 5,
            }}
          >
            <Icon
              style={{
                marginRight: 5,
                color: "#5062BD",
              }}
              name="child"
              size={30}
              color="#900"
            />
            <Text
              style={{
                padding: 3,
                fontSize: 20,
                fontWeight: "300",
              }}
            >
              Students
            </Text>
          </View>
        </TouchableOpacity>

      
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          alignItems: "center",
          left:20
        }}
      >
       
       <TouchableOpacity
        onPress={() => navigation.navigate('MarkAttendanceScreen', {
          schoolId: schoolId,
          schoolName: schoolName
        })}
          style={{
            padding: 20,
            borderRadius: 20,
            margin: 10,
            backgroundColor: "white",
            width: "40%",
            elevation:2
          }}
        >
          <View
            style={{
              flexDirection: "row",
              padding: 5,
              alignItems: "center",
            }}
          >
            <Icon
              style={{
                marginRight: 5,
                color: "#5062BD",
              }}
              name="user"
              size={30}
              color="#900"
            />
            <Text
              style={{
                padding: 3,
                fontSize:14,
                fontWeight: "300",
              }}
            >
             Mark Teacher Attendance
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 20,
            borderRadius: 20,
            margin: 10,
            backgroundColor: "white",
            width: "40%",
            elevation:2
          }}
        >
          <View
            style={{
              flexDirection: "row",
              padding: 5,
            }}
          >
            <Icon
              style={{
                marginRight: 5,
                color: "#5062BD",
              }}
              name="box"
              size={30}
              color="#900"
            />
            <Text
              style={{
                padding: 3,
                fontSize: 20,
                fontWeight: "300",
              }}
            >
              Assets
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SchoolAdminHomePage;

const styles = StyleSheet.create({});
