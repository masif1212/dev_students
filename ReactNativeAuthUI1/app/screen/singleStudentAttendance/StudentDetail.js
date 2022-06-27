import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity,TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import _ from "lodash"
import DatePick from  './DatePick'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Divider} from 'react-native-paper';




const  StudentDetail = ({navigation,route})=> {

  const [date, setDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  // const [filterData, setFilterData] = useState('')
  // const [masterData, setMasterData] = useState('')
  // const [search, setSearch] = useState('');


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



  const [ columns, setColumns ] = useState([
    "Date",
    "Status"

  ])
  const [ direction, setDirection ] = useState(null)
  const [ selectedColumn, setSelectedColumn ] = useState(null)
  const [ pets, setPets ] = useState([
    {
    
      date: "1.6.2022",
      Status: "Present"
    },
    {
 
      date: "2.6.2022",
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
        data={pets}
        style={{width:"100%"}}
        keyExtractor={(item, index) => index+""}
        ListHeaderComponent={tableHeader}
        stickyHeaderIndices={[0]}
        renderItem={({item, index})=> {
          return (
            <View style={{...styles.tableRow, backgroundColor: index % 2 == 1 ? "#F0FBFC" : "white",width:'100%'}}>
              <Text style={{...styles.columnRowTxt, fontWeight:"bold"}}>{item.date}</Text>
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