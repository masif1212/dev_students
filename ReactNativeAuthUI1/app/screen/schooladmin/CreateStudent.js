import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef, useLayoutEffect  } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import _ from "lodash"
import ClassSectionFilter from '../singleStudentAttendance/ClassSectionFilter';
import { useSelector } from 'react-redux';
import { useIsFocused } from "@react-navigation/native"; 

const CreateStudent = ({ navigation, route }) => {
  const [columns, setColumns] = useState([
    "RollNo",
    "Name",
  ])

  const [direction, setDirection] = useState('')
  const [selectedColumn, setSelectedColumn] = useState('')


const[students, setStudents ] = useState('')
const [ schoolId, setSchoolId] = useState('');
const [ schoolName, setSchoolName] = useState('');
const [time, setTime] = useState(Date.now())

const isInitialMount = useRef(true);

const myData = useSelector(state => state.schoolAdmin)

const focus = useIsFocused();

  const fetchData = async () => {
    const resp = await fetch(`http://192.168.10.6:8000/api/user/getStudents/${newData.schoolId}`);
    const data = await resp.json();
    setStudents(data);
  };
  
 
  useLayoutEffect(() => {
   fetchData();
  }, [focus]);


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
        <ClassSectionFilter />
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

              <Text style={{ ...styles.columnRowTxt, }}>{item.first_name+' '+item.last_name}</Text>


              <View style={{ width: '100%', flexDirection: 'row' }}>
                <TouchableOpacity 
                onPress={()=>navigation.navigate('StudentDetail',{
                  first_name:item.first_name,
                  last_name:item.last_name,
                  contact:item.contact,
                  father_name:item.father_name,
                  father_cnic:item.father_cnic,
                  student_class:item.student_class,
                  section:item.section,
                  address_1:item.address_1,
                  city:item.city,

                })}
                style={{ backgroundColor: '#5062BD', margin: 3, borderRadius: 6, width: '30%', alignItems: 'center', padding: 4, justifyContent: 'center', }}>
                  <Text style={{
                    color: 'white'
                  }}>View Attendance</Text>
                </TouchableOpacity>
                <TouchableOpacity
                 onPress={()=>navigation.navigate('SingleStudentDetail',{
                  image:item.image,
                  first_name:item.first_name,
                  last_name:item.last_name,
                  contact:item.contact,
                  father_name:item.father_name,
                  father_cnic:item.father_cnic,
                  student_class:item.student_class,
                  section:item.section,
                  address_1:item.address_1,
                  city:item.city,
                 
                 
                 })}
                 style={{ backgroundColor: '#5062BD', margin: 3, borderRadius: 6, width: '24%', alignItems: 'center', padding: 4, justifyContent: 'center', }}>
                  <Text style={{
                    color: 'white'
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
    margin: 10
  },
  columnHeaderTxt: {
    color: "white",
    fontWeight: "bold",


  },
  columnRowTxt: {
    width: "20%",
  }

});

export default CreateStudent