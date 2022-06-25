import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView, } from "react-native";
import React from "react";

const SchoolAdminProfile = ({route}) => {

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
            source={{uri:route.params.photo}}
              
          
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
        }} >Contact</Text>
        <Text>{route.params.contact}</Text>
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
        }} >Alternate Contact</Text>
        <Text>{route.params.alt_contact}</Text>
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
        }} >CNIC NO</Text>
        <Text>{route.params.CNIC_no}</Text>
  
     
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
        }} >City</Text>
        <Text>{route.params.city}</Text>
      
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

            }}><Text style={{
                color:'white'
            }}>View Attendance</Text></TouchableOpacity>
        </View>
    </ScrollView>
  );
};

export default SchoolAdminProfile;

const styles = StyleSheet.create({});
