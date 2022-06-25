import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import _ from "lodash"
import DatePick from  './DatePick'



const  StudentDetail = ({navigation})=> {
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
      <DatePick  />
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
  }
});

export default StudentDetail