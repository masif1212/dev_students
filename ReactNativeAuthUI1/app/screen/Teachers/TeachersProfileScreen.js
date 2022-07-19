import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView, } from "react-native";
import React from "react";

const TeachersProfileScreen = ({route,navigation}) => {

  return (
    <ScrollView style={{
        flex:1,
        backgroundColor:'white'
    }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#5062BD",
          borderRadius: 40,
          margin: 30,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 50,
              width: "25%",
              marginVertical: 30,

              borderRadius: 50,
              backgroundColor: "#5062BD",
            }}
            source={{uri:route.params.image}}
              
          
          />
         
        <Text style={{
          color:'white',
          fontSize:20,
          top:-12
          
        }}>{route.params.first_name + ' ' + route.params.last_name}
        </Text>
        
        </View>
   
      </View>
      <View
        style={{
          marginLeft: 20,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            marginLeft: 20,
          }}
        >
          General Information
        </Text>
        {/* <View
          style={{
              marginTop:10,
            borderBottomColor: "gray",
            borderBottomWidth: 1,
            width:'95%'
          }}
        />
        <Text style={{
            marginTop:5,
            fontWeight:'bold'
        }} >Father Name</Text>
        <Text>{route.params.father_name}</Text> */}
        <View
          style={{
              marginTop:10,
            borderBottomColor: "gray",
            borderBottomWidth: 1,
            width:'95%'
          }}
        />
        <Text style={{
            marginTop:5,
            fontWeight:'bold'
        }} >Email</Text>
        <Text>{route.params.email}</Text>
        <View
          style={{
              marginTop:10,
            borderBottomColor: "gray",
            borderBottomWidth: 1,
            width:'95%'
          }}
        />
        <Text style={{
            marginTop:5,
            fontWeight:'bold'
        }} >Address</Text>
        <Text>{route.params.address_1}</Text>

        <View
          style={{
              marginTop:10,
            borderBottomColor: "gray",
            borderBottomWidth: 1,
            width:'95%'
          }}
        />
        <Text style={{
            marginTop:5,
            fontWeight:'bold'
        }} >Address 2</Text>
        <Text>{route.params.address_2}</Text>
        {/* <View
          style={{
              marginTop:10,
            borderBottomColor: "gray",
            borderBottomWidth: 1,
            width:'95%'
          }}
        />
        <Text style={{
            marginTop:5,
            fontWeight:'bold'
        }} >Qualification</Text>
        <Text>Ms Computer Science</Text> */}
  
     
        {/* <View
          style={{
              marginTop:10,
            borderBottomColor: "gray",
            borderBottomWidth: 1,
            width:'95%'
          }}
        />
        <Text style={{
            marginTop:5,
            fontWeight:'bold'
        }} >Date of Birth</Text>
        <Text>10/10/1990</Text> */}
        <View
          style={{
              marginTop:10,
            borderBottomColor: "gray",
            borderBottomWidth: 1,
            width:'95%'
          }}
        />
        <Text style={{
            marginTop:5,
            fontWeight:'bold'
        }} >Contact</Text>
        <Text>+92 {route.params.contact}</Text>

        <View
          style={{
              marginTop:10,
            borderBottomColor: "gray",
            borderBottomWidth: 1,
            width:'95%'
          }}
        />
        <Text style={{
            marginTop:5,
            fontWeight:'bold'
        }} >alt_Contact</Text>
        <Text>+92 {route.params.alt_contact}</Text>

        <View
          style={{
              marginTop:10,
            borderBottomColor: "gray",
            borderBottomWidth: 1,
            width:'95%'
          }}
        />
        <Text style={{
            marginTop:5,
            fontWeight:'bold'
        }} >City</Text>
        <Text> {route.params.city}</Text>
      
      </View>
      <View style={{
          flexDirection:'row',
          justifyContent:'flex-end',
          marginRight:20

      }}>
            <TouchableOpacity style={{
                backgroundColor:'#5062BD',
                padding:20,
                borderRadius:20,

            }}
            onPress= {()=> navigation.navigate("TeacherAttendanceDetails",{
              first_name:route.params.first_name,
              last_name:route.params.last_name,
              teacher_id_att:route.params.teacher_id_att,
              
            }) }
            >
              
              <Text style={{
                color:'white'
            }}>view Attendance</Text></TouchableOpacity>
        </View>
    </ScrollView>
  );
};

export default TeachersProfileScreen;

const styles = StyleSheet.create({});
