import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity,ScrollView } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Divider} from 'react-native-paper';





const DpFullAttendance    = () => {
  const [date, setDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);



  const showDatePicker = () => {
    setDatePickerVisibility(true);
    

  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
    
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
    searchFilter(date)
  };


  const getDate = () => {
    let tempDate = date.toString().split(' ');
    return date !== ''
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : '';
  };

  return (
    <View style={styles.container}>
 
    
     <View style={{flexDirection:'row'}}>
     <Text 
     style={{
         fontSize: 18,
         top: 40,
         left:7,
         fontWeight: 'bold'
          }}
     >Filter</Text>
     </View>
    <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-end' 
    }}>
    
    <TouchableOpacity  onPress={showDatePicker}>
        <Text style={{borderWidth: 1,borderColor:'#8099F7',borderRadius: 10,  padding: 7, backgroundColor: '#5062BD', color: 'white', fontSize:14}}>Set Date</Text>
    </TouchableOpacity>
   
    <TextInput
        style={styles.textInput}
        value={getDate()}
        placeholder="Day| MM | DD | YY"
      />
      
    </View>

    
      
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        onChangeText={(date) => searchFilter(date)}
       
      />

      
       <Divider borderWidth={0.2} width={'100%'} margin={5}/>


       <View>
      <Text style={{
          fontSize:35,
          fontWeight: 'bold',
          left: 5

      }}>Class : 5th</Text>
      <Text style={{
        left: 5
      }} >School Name</Text>
    </View>
    {/* add pie here */}

    <View style={{flexDirection: 'row', top:10}}>
      <Text  style={{
        left:5
      }}>Section : A</Text>
      
    </View>

       <Divider margin={13} />

    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15

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
export default DpFullAttendance  