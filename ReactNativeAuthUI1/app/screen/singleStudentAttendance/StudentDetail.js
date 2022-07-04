import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity,TextInput,Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import _ from "lodash"

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Divider} from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome";

 

const  StudentDetail = ({navigation,route})=> {


  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [studentdate,setStudentDate] = useState('');
 
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);

  };

  const handleConfirm = (date) => {
    setStudentDate(date)
    console.log(date)
    hideDatePicker();

  };
// useEffect (() => {
//   console.log(studentdate)
// }) 


  const [ columns, setColumns ] = useState([
    "Date",
    "Status"

  ])
  const [ direction, setDirection ] = useState(null)
  const [ selectedColumn, setSelectedColumn ] = useState(null)
  const [ students, setStudents ] = useState([
    {
    
      date: "2022-07-01T12:42:08.441Z",
      Status: "Present"
    },
    {
 
      date: "2022-07-02T13:03:35.822Z",
      Status: "Absent"
    },
    {
      
      date: "3.6.2022",
      Status: "Absent"
    },
    {
      
      date: "4.6.2022",
      Status: "Present"
    },
    {
      
      date: "5.6.2022",
      Status: "Absent"
    },
    {

      date: "6.6.2022",
      Status: "Absent"
    },
    {
     
      date: "7.6.2022",
      Status: "Present"
    },
    {

      date: "8.6.2022",
      Status: "Absent"
    },
    {
    
      date: "9.6.2022",
      Status: "Present"
    },
    {

      date: "10.6.2022",
      Status: "Present"
    },
    {
    
      date: "11.6.2022",
      Status: "Present"
    },
    {
  
      date: "12.6.2022",
      Status: "Absent"
    },  
     {
     
        date: "10.6.2022",
        Status: "Present"
      },
      {

        date: "11.6.2022",
        Status: "Present"
      },
      {
     
        date: "12.6.2022",
        Status: "Absent"
      },
      {
        
        date: "10.6.2022",
        Status: "Present"
      },
      {
      
        date: "11.6.2022",
        Status: "Present"
      },
      {
       
        date: "12.6.2022",
        Status: "Absent"
      }
  ])

  


  
  

  const sortTable = (column) => {
    const newDirection = direction === "desc" ? "asc" : "desc" 
    const sortedData = _.orderBy(students, [column],[newDirection])
    setSelectedColumn(column)
    setDirection(newDirection)
    setStudents(sortedData)
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
    <View style={styles.container}>
 
<View style={{
    flexDirection: 'row',
    justifyContent: 'flex-end' 
}}>


  
</View>


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
        mode={studentdate.date }
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

  }}>{route.params.first_name + ' ' + route.params.last_name}</Text>
  <Text style={{
    left: 5
  }} >School Name</Text>
</View>
{/* add pie here */}

<View style={{flexDirection: 'row', top:10}}>
  <Text  style={{
    left:5
  }}>Class: {route.params.student_class}th</Text>
  <Text style={{
      left: 80
    }}>Section: {route.params.section}</Text>
</View>

   <Divider margin={13} />

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
           
            
            <View>
              
              { studentdate=== item.date  ?
               "":
              <View style={{...styles.tableRow, backgroundColor: index % 2 == 1 ? "#F0FBFC" : "white",width:'100%'}}>
                <Text style={{...styles.columnRowTxt, fontWeight:"bold"}}>{item.date}</Text>
                <Text style={styles.columnRowTxt}>{item.Status}</Text>
              </View>   }
              </View>
          )
        }}
      />

      
      <StatusBar style="auto" />
      </View>
      
  
   
  );
}

const styles = StyleSheet.create({

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
    width:"50%",
    textAlign:"center",
  },
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

export default StudentDetail