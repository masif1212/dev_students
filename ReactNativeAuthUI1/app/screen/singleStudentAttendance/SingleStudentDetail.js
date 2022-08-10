import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView,Modal } from "react-native";
import React,{useEffect, useState} from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleModal from "../../Components/SimpleModal";



const SingleStudentDetail = ({route,navigation}) => {
  const [id, setId] = useState();
  const table = "students";


//===========================================DELETE============================================================//
const [isModalVisible, setIsModalVisible] = useState(false)
const [chooseData, setChooseData] = useState()



const changeModalVisible = (bool) => {
  setIsModalVisible(bool)
}
const setData = (data) => {
  setChooseData(data)
}
const closeModal =(bool,data) =>{
 changeModalVisible(bool)
  setData(data)
  }

  useEffect(() => {
      setId(route.params.studentId);
  });

  const handleFormSubmit =  () => {
   const formData = {
        id,
        table
      };
      fetch("https://ams.firefly-techsolutions.com/services/deleterecord", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => res.json())
        .then((res) => res.type === 'success' ? closeModal(false, 'Yes') || navigation.goBack() :null)

  };


//===========================================DELETE============================================================//


  return (
    <ScrollView style={{
        flex:1,
        backgroundColor:'white'
    }}>
      <View style={{
        marginBottom: 30
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
            
              source={{uri : route.params.image}}
          
          />
         
        <Text style={{
          color:'white',
          fontSize:20,
          top:-12
          
        }}>
        {route.params.first_name+ ' ' +route.params.last_name}
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
        }} >Father Name</Text>
        <Text>{route.params.father_name }</Text>
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
        }} >Father CNIC</Text>
        <Text>{route.params.father_cnic}</Text>
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
        }} >Student Class</Text>
        <Text>{route.params.student_class}</Text>
  
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
        }} >Section</Text>
        <Text>{route.params.section}</Text>
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
        }} >Roll No</Text>
        <Text>{route.params.roll_no}</Text>

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
        }} >Date of Birth</Text>
        <Text>{route.params.dateofbirth}</Text>

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
        }} >Current Shift</Text>
        <Text>{route.params.currentshift}</Text>

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
        }} >Date of Admission</Text>
        <Text>{route.params.date_of_admission}</Text>
      
      </View>
      </View>
      <View
        style={{
          alignItems: "flex-end",
          justifyContent: "flex-end",

        }}
      >
        <TouchableOpacity
          style={{
            alignItems: "center",
            padding: 15,
            marginRight:25,
            width: "18%",
            bottom:20,
            backgroundColor: "red",
            elevation: 1,
            borderHeight:10,
            position: "relative",
            borderRadius:10
          }}
          onPress={()=>{changeModalVisible(true); setId(route.params.studentId); }}
        >
          <MaterialCommunityIcons
                      name="trash-can-outline"
                      size={27}
                      color="white"
                    />
        </TouchableOpacity>
      </View>
      <Modal
                  transparent={true}
                  animationType='fade'
                  visible={isModalVisible}
                  nRequestClose={() => changeModalVisible(false)}
                >
                  <SimpleModal
                    changeModalVisible={changeModalVisible}
                    setData={setData}
                      onPressYes ={()=>{handleFormSubmit()}}
                      onPressNo={() =>closeModal(false,'No')}
                      text= "Are you sure you want to delete?"
                    />
                </Modal>
 
    </ScrollView>
  );
};

export default SingleStudentDetail;

const styles = StyleSheet.create({});
