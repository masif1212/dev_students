import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import _ from "lodash"
import DpFullAttendance from './DpFullAttendance ';




const  ViewFullAttendance = ({navigation})=> {
  const [ columns, setColumns ] = useState([
    "Roll No",
    "Students",
    "Status"

  ])
  const [ direction, setDirection ] = useState(null)
  const [ selectedColumn, setSelectedColumn ] = useState(null)
  const [ pets, setPets ] = useState([
    {
      Roll_No : '1',
      name: "Saad",
      Status: "Present"
    },
    {
        Roll_No : '2',
      name: "Asif",
      Status: "Absent"
    },
    {
        Roll_No : '3',
      name: "Mehdi",
      Status: "Absent"
    },
    {
        Roll_No : '4',
      name: "Ali",
      Status: "Present"
    },
    {
        Roll_No : '5',
      name: "Hamza",
      Status: "Absent"
    },
    {
        Roll_No : '6',
      name: "Saad",
      Status: "Absent"
    },
    {
        Roll_No : '7',
      name: "Sofia",
      Status: "Present"
    },
    {
        Roll_No : '8',
      name: "Sofia",
      Status: "Absent"
    },
    {
        Roll_No : '9',
      name: "Mehdi",
      Status: "Present"
    },
    {
        Roll_No : '10',
      name: "Salman",
      Status: "Present"
    },
    {
        Roll_No : '11',
      name: "Mehdi",
      Status: "Present"
    },
    {
        Roll_No : '12',
      name: "Mehdi",
      Status: "Absent"
    },  
     {
        Roll_No : '13',
        name: "Alina",
        Status: "Present"
      },
      {
        Roll_No : '14',
        name: "Asif",
        Status: "Present"
      },
      {
        Roll_No : '15',
        name: "Saad",
        Status: "Absent"
      },
      {
        Roll_No : '16',
        name: "Awais",
        Status: "Present"
      },
      {
        Roll_No : '17',
        name: "Maryam",
        Status: "Present"
      },
      {
        Roll_No : '18',
        name: "Aimen",
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
      <DpFullAttendance />
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
             <Text style={{...styles.columnRowTxt, fontWeight:"bold", right: 25}}>{item.roll_no}</Text>
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