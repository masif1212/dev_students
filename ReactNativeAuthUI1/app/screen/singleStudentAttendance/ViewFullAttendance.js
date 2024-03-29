import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect,useLayoutEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity,TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import _ from "lodash"

import {Divider} from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from "react-native-vector-icons/FontAwesome";
import { useIsFocused } from "@react-navigation/native"; 




const  ViewFullAttendance = ({navigation,route})=> {
  const [ columns, setColumns ] = useState([
    "Roll No",
    "Date",
    "Status"

  ])
  const [students,setStudents] = useState('');
  const [studentdate,setStudentDate] = useState(false);
  
  const focus = useIsFocused();

  const fetchData = async () => {
    const resp = await fetch(`http://192.168.18.14:8000/api/user/getstudentsattendance/${route.params.student_id_att}`);
    const data = await resp.json();
    setStudents(data);
     console.log(route.params.someArray) 

  };

  useLayoutEffect(() => {
   fetchData();

  }, [focus]);

  const [ direction, setDirection ] = useState(null)
  const [ selectedColumn, setSelectedColumn ] = useState(null)
 

  const schAdminId = (route.params.someArray.filter(l => console.log(l.roll_no)));



 
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  
  

  const sortTable = (column) => {
    const newDirection = direction === "desc" ? "asc" : "desc" 
    const sortedData = _.orderBy(pets, [column],[newDirection])
    setSelectedColumn(column)
    setDirection(newDirection)
    setPets(sortedData)
  }
  const tableHeader = () => (
    <View style={styles.tableHeader}>
      {
        columns.map((column, index) => {
          {
            return (
              <TouchableOpacity 
                key={index}
                style={styles.columnHeader} 
                onPress={()=> sortTable(column)}>
                <Text style={styles.columnHeaderTxt}>{column + " "} 
                  { selectedColumn === column && <MaterialCommunityIcons 
                      name={direction === "desc" ? "arrow-down-drop-circle" : "arrow-up-drop-circle"} 
                    />
                  }
                </Text>
              </TouchableOpacity>
            )
          }
        })
      }
    </View>
  )

  return (
    <View style={{height:'100%'}}>

    <View style={{width:"100%"}}>
      {/* <DpFullAttendance /> */}
      <View>
      <View style={styles.container}>
 
{/* <View style={{
    flexDirection: 'row',
    justifyContent: 'flex-end' 
}}>
  
</View> */}


  
<View style={{
    flexDirection:'row',
    justifyContent:'flex-end',

  }}>
 
          <TouchableOpacity style={{
             flexDirection:'row',
             borderRadius:10,
             backgroundColor:'#5062BD',
             padding:10,
             width:'35%',
             justifyContent:'center'
             
    
          }} 
          onPress={showDatePicker}>
             <Icon name="calendar"
          size={20}
          color='white'
          />
          <Text style={{
            left:4,
            color:'white'
          }}>Select Date</Text> 
     
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        />
      </View>
   <Divider borderWidth={0.2} width={'100%'} margin={5}/>


   <View>
  <Text style={{
      fontSize:35,
      fontWeight: 'bold',
      left: 5

  }}>Class : {route.params.someArray.map(l => l.student_class)}</Text>
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

      </View>
    </View>

      <FlatList 
        data={students}
        style={{width:"100%"}}
        keyExtractor={(item, index) => index+""}
        ListHeaderComponent={tableHeader}
        stickyHeaderIndices={[0]}
        renderItem={({item, index})=> {
          return (
            <View style={{...styles.tableRow, backgroundColor: index % 2 == 1 ? "#F0FBFC" : "white",width:'100%'}}>
             <Text style={{...styles.columnRowTxt, fontWeight:"bold", right: 25}}>{item.Roll_No}</Text>
              <Text style={{...styles.columnRowTxt, right:20}}>{item.first_name}</Text>
              <Text style={styles.columnRowTxt}>{item.Status}</Text>
            </View>
          )
        }}
      />
      <StatusBar style="auto" />
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

  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#5062BD",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    height: 50,
    width: "100%",

  },
  tableRow: {
    flexDirection: "row",
    height: 40,
    alignItems:"center",
  },
  columnHeader: {
    width: "50%",
    justifyContent: "center",
    alignItems:"center",
 
  },
  columnHeaderTxt: {
    color: "white",
    fontWeight: "bold",
  },
  columnRowTxt: {
    width:"35%",
    textAlign:"center",
  }
});

export default ViewFullAttendance