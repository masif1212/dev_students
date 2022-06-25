import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity,ScrollView } from 'react-native';
// import DateTimePickerModal from 'react-native-modal-datetime-picker'
import {Divider} from 'react-native-paper'
import DropDownClassStudents from '../../Components/dropdown/DropDownClassStudents'
 import { useNavigation } from '@react-navigation/native';


const MarkAttendanceFilter  = () => {
    const navigation = useNavigation(); 
  
  
  return (
    <View style={styles.container}>
     
     <View style={{
       flexDirection:'row',
       justifyContent:'space-around'
     }} >
     
     <Text 
     style={{
         fontSize: 18,
         top: 5,
         left:7,
         fontWeight: 'bold'
          }}
     >Filter</Text>
     <View style={{
       width:'90%',
       left:10
     }}>
       <DropDownClassStudents />
     </View>

    
     </View>
     
       <Divider borderWidth={0.2} width={'100%'} margin={5}/>
       <View>

      {/* add pie here */}

      <View style={{ flexDirection: 'row', top: 10,justifyContent:'center',alignItems:'center' }}>

        <Text style={{
          
        }}>Class : 5th</Text>

        <Text style={{
          left: 25
        }}>Section : A</Text>
        <View style={{
          backgroundColor:'#5062BD',
          borderRadius:7,
          left:40,
      
          
     
        }}>

        <TouchableOpacity onPress={ () => navigation.navigate('MarkAttendanceScreen')} >
       
          <Text style={{
           
            
            padding: 5,
            color: 'white'
          }}>Mark Attendance</Text>

        </TouchableOpacity>
        </View>

      </View>

    </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20

  },
  textInput: {
    borderWidth: 1,
    borderColor: '#8099F7',
    marginBottom: 5,
    padding: 3,
    marginLeft: 4,
    borderRadius: 10,
    
  },
});
export default MarkAttendanceFilter