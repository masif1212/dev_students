import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity,ScrollView } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Divider} from 'react-native-paper';
 import DropDownClassStudents from '../../Components/dropdown/DropDownClassStudents'
import ChangeSectionClass from '../singleStudentAttendance/ChangeSectionClass'

// import StudentList from './StudentList';
// import Hello from './Hello';


const ClassSectionFilter  = () => {

  
  
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

       <ChangeSectionClass />
       



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
export default ClassSectionFilter