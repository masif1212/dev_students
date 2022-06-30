import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import schoolAdminSlice from "../../features/schoolAdminSlice";


const SelectedSchoolScreen = ({navigation, route}) => {
  const { id, title } = route.params;

 
  
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('SchoolAdmin',{
          schoolid : route.params.schoolid,
          schoolName: route.params.title
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
            
              Admin
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate('TeachersList')}
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
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
        onPress={()=>navigation.navigate('ClassStudents')}
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

export default SelectedSchoolScreen;

const styles = StyleSheet.create({});
