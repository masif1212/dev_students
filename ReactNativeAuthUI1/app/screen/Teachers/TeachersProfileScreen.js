import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView, } from "react-native";
import React, { useEffect } from "react";

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
          
        }}>{route.params.staffName}
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
        }} >Staff Position</Text>
        <Text> {route.params.staffPosition}</Text>

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
        }} >Contract Start Date</Text>
        <Text> {route.params.contractstart}</Text>

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
        }} >Contract End Date</Text>
        <Text> {route.params.contractend}</Text>

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
        }} >Teacher Qualification</Text>
        <Text> {route.params.teacherQualification}</Text>

        
        
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
        }} >Teaching Class</Text>
        <Text> {route.params.teachingClass}</Text>

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
        }} >Teaching Subject</Text>
        <Text> {route.params.teachingSubject}</Text>

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
        }} >Subject Specification</Text>
        <Text> {route.params.SubjectSpec}</Text>

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
        }} >District</Text>
        <Text> {route.params.selectedDistricts}</Text>

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
        }} >Tehsil</Text>
        <Text> {route.params.seletctedTehsil}</Text>

        

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
        <Text> {route.params.religion}</Text>

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
        <Text> {route.params.gender}</Text>
      
      </View>


      <View style={{
          flexDirection:'row',
          justifyContent:'flex-end',
          marginRight:20,
          marginVertical: 40

      }}>
            <TouchableOpacity style={{
                backgroundColor:'#5062BD',
                padding:20,
                borderRadius:20,

            }}
            onPress= {()=> navigation.navigate("TeacherAttendanceDetails",{
              staffName:route.params.staffName,
              teacherId:route.params.teacherId,
              
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
