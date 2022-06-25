import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native'
import React, { useState, useEffect } from "react";
import CustomCard from '../../Components/DrawerComponents/CustomCard'
 


const SupAdminFrontPg = () => {

      // If you want to render MultiSelect from JSON then below code will help you.
      // const [serverData, setServerData] = useState([]);
      // useEffect(() => {
      //   fetch('YOUR API URL')
      //     .then((response) => response.json())
      //     .then((responseJson) => {
      //       //Successful response from the API Call
      //       setServerData(responseJson.results);
      //     })
      //     .catch((error) => {
      //       console.error(error);
      //     });
      // }, []);
     
    
  return (

  
    <ScrollView>                                                          
    <View style={styleSheet.MainContainer}>

 

  
       <CustomCard 
          backgroundColor='#5062BD'
          title="Teacher Attendance"
          color= "white"

      />
      <CustomCard 
          backgroundColor='#ffffff'
          title="Student Attendance"
          
      />

    </View>
    </ScrollView>

);
}

const styleSheet = StyleSheet.create({

MainContainer: {

  padding: 12,
  backgroundColor: 'white'
},

text: {
  padding: 12,
  fontSize: 22,
  textAlign: 'center',
  fontWeight: 'bold',
  color: 'black'
}


});
 
          
     

    

export default SupAdminFrontPg

