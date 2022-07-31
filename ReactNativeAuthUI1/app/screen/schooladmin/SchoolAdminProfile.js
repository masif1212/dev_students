import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView, } from "react-native";
import React from "react";

const SchoolAdminProfile = ({route}) => {

  return (
    
    <ScrollView style={{
        flex:1,
        backgroundColor:'white',
    }}>
      <View style={{
        marginBottom: 40
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
        }} >School Name</Text>
        <Text>{route.params.schoolName}</Text>

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
        <Text>{route.params.cnic}</Text>
  
     
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
        }} >Qualification</Text>
        <Text>{route.params.teacherQualification}</Text>

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
        }} >Professional Qualification</Text>
        <Text>{route.params.teacherprofessionalqualification}</Text>

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
        }} >Religion</Text>
        <Text>{route.params.religion}</Text>

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
        }} >Gender</Text>
        <Text>{route.params.gender}</Text>


        
      
      </View>
  
        </View>
    </ScrollView>
  );
};

export default SchoolAdminProfile;

const styles = StyleSheet.create({});
