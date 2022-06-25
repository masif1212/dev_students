import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from '@react-navigation/native';



const SchoolAdminHomePage = () => {
  const navigation = useNavigation(); 
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
        onPress={()=>navigation.navigate('CreateStudent')}
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
