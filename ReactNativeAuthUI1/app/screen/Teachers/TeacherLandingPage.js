import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import _ from "lodash"
import { useNavigation } from '@react-navigation/native'; 
import {Divider} from 'react-native-paper';
import { useGetStudentQuery } from '../../../services/userAuthApi';
import { useSelector } from 'react-redux';





const TeacherLandingPage = () => {
    const navigation = useNavigation(); 
  const [columns, setColumns] = useState([
    "RollNo",
    "Name",
  ])

  const [direction, setDirection] = useState('')
  const [selectedColumn, setSelectedColumn] = useState('')

  const [students, setStudents] = useState('')


  const myData = useSelector(state => state.student)
  const {data} = useGetStudentQuery();
  useEffect(() => {
    setStudents(data);
  });



  const sortTable = (column) => {
    const newDirection = direction === "desc" ? "asc" : "desc"
    const sortedData = _.orderBy(students, [column], [newDirection])
    setSelectedColumn(column)
    setDirection(newDirection)
    setStudents(sortedData)
  }
  const tableHeader = () => (

    <View style={styles.tableHeader} >


      {
        columns.map((column, index) => {
          {
            return (


              <TouchableOpacity
                key={index}
                style={styles.columnHeader}
                onPress={() => sortTable(column)}>
                <Text style={styles.columnHeaderTxt}>{column + ""}
                  {selectedColumn === column && <MaterialCommunityIcons
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


    <View style={{ height: '100%', width: '100%' }}>

      <View >
       <View style={styles.container}>

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
      </View>

      <FlatList
        data={students}
        keyExtractor={(item, index) => index + ""}
        style={{ maxWidth: '100%' }}
        ListHeaderComponent={tableHeader}
        stickyHeaderIndices={[0]}

        renderItem={({ item, index }) => {
          return (

            <View style={{ ...styles.tableRow, backgroundColor: index % 2 == 1 ? "#F0FBFC" : "white", width: '100%', }}>

              <Text style={{ ...styles.columnRowTxt, fontWeight: "bold" }}>{item.roll_no}</Text>

              <Text style={{ ...styles.coloumnRowName, }}>{item.first_name+' '+ item.last_name}</Text>

              <View style={{ width: '100%', flexDirection: 'row',right:10 }}>
                <TouchableOpacity 
                onPress={()=>navigation.navigate('StudentDetail',{
                  first_name:item.first_name,
                  last_name:item.last_name,
                  student_class: item.student_class,
                  section: item.section,

                })}
                style={{ backgroundColor: '#5062BD', margin: 2, borderRadius: 6, width: '28%', alignItems: 'center',justifyContent: 'center', }}>
                  <Text style={{
                    color: 'white'
                  }}>View Attendance</Text>
                </TouchableOpacity>
                <TouchableOpacity
                 onPress={()=>navigation.navigate('SingleStudentDetail',{
                  first_name:item.first_name,
                  last_name: item.last_name,
                  father_name:item.father_name,
                  father_cnic:item.father_cnic,
                  contact:item.contact,
                  student_class: item.student_class,
                  section: item.section,
                  address_1:item.address_1,
                  city: item.city,
                })}
                 style={{backgroundColor: '#5062BD', margin: 2, borderRadius: 6, width: '28%', alignItems: 'center', justifyContent: 'center', }}>
                  <Text style={{
                    color: 'white',
            
                  }}>View Detail</Text>
                </TouchableOpacity>
              </View>


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
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#5062BD",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    height: 50,

  },
  tableRow: {
    flexDirection: "row",
    height: 40,
    margin: 2,
    left: 8
  },
  columnHeader: {
    width: "16%",
    justifyContent: "center",
    alignItems: "flex-start",
    margin: 5
  },
  columnHeaderTxt: {
    color: "white",
    fontWeight: "bold",


  },
  columnRowTxt: {
    width: "20%",
  },
  coloumnRowName:{
    width:'20%',
    right:20
  },
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

export default TeacherLandingPage