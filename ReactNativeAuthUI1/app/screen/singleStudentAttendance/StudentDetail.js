import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import _ from "lodash"


import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Divider } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome";
import { useIsFocused } from "@react-navigation/native";
import { useSelector } from 'react-redux';
import moment from 'moment';




const StudentDetail = ({ navigation, route }) => {


  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isToDatePickerVisible, setToDatePickerVisibility] = useState(false);
  const [students, setStudents] = useState('');
  const [studentdate, setStudentDate] = useState(false);
  const [studentdateTo, setStudentDateTo] = useState(false);




  const focus = useIsFocused();

  const fetchData = () => {
    fetch('https://ams.firefly-techsolutions.com/services/getstudentattendancedashboardbystudentid', {
      method: 'POST',//GET and ...
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: route.params.studentId })
    })
      .then((response) => response.json()) //   <------ this line 
      .then((response) => {
        setStudents(response.data)
      });
  };

  useLayoutEffect(() => {
    fetchData();
    console.log(route.params.studentId)
  }, [route.params.studentId]);

  //===================================FROM====================================//
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);

  };

  const handleConfirm = (date) => {
    setStudentDate(moment(date).utc().format('YYYY-MM-DD'))
    hideDatePicker();
  };

  const getDate = () => {
    let tempDate = moment(studentdate).toString().split(" ");
    return studentdate !== ""
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : false;
  };

  //===================================FROM====================================//

  //===================================TO====================================//
  function getDates() {
    var dateArray = [];
    var currentDate = moment(studentdate);
    var stopDate = moment(studentdateTo);
    while (currentDate <= stopDate) {
      dateArray.push(moment(currentDate).format('YYYY-MM-DD'))
      currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray

  }
  const showDatePickerTo = () => {
    setToDatePickerVisibility(true);
  };

  const hideDatePickerTo = () => {
    setToDatePickerVisibility(false);

  };

  const handleConfirmTo = (date) => {
    setStudentDateTo(moment(date).utc().format('YYYY-MM-DD'))
    getDates()
    hideDatePickerTo();
  };

   const getDated= () => {
    let tempDate = moment(studentdateTo).toString().split(" ");
    return studentdateTo !== ""
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : false;
  };



  //=============================================================================//



  const [columns, setColumns] = useState([
    "Date",
    "Status"

  ])
  const [direction, setDirection] = useState(null)
  const [selectedColumn, setSelectedColumn] = useState(null)




  const sortTable = (column) => {
    const newDirection = direction === "desc" ? "asc" : "desc"
    const sortedData = _.orderBy(students, [column], [newDirection])
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
                onPress={() => sortTable(column)}>
                <Text style={styles.columnHeaderTxt}>{column + " "}
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
    <View style={{ height: '100%' }}>
      <View style={{ width: "100%" }}>
        <View style={styles.container}>




          {/* =================FROM============================================== */}
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',

          }}>

            <TouchableOpacity style={{
              flexDirection: 'row',
              borderRadius: 10,
              backgroundColor: '#5062BD',
              padding: 10,
              width: '44%',
              justifyContent: 'center',
              alignItems: 'center'
            }}
              onPress={showDatePicker}>
              <Text style={{
                right: 4,
                color: 'white'
              }}> {getDate() === "Invalid date undefined undefined" ? (<><Text >Select date from</Text>{"   "}<Icon name="calendar"
                size={20}
                color='white'
              />  </>) : <Text>{getDate()}</Text>}</Text>

            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode={studentdate.date}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}

            />

            {/* =================FROM============================================== */}

            {/* =================TO============================================== */}

            <TouchableOpacity style={{
              flexDirection: 'row',
              borderRadius: 10,
              backgroundColor: '#5062BD',
              padding: 10,
              width: '38%',
              justifyContent: 'center',
              alignItems: 'center'
            }}
              onPress={showDatePickerTo}>
            <Text style={{
                right: 4,
                color: 'white'
              }}> {getDated() === "Invalid date undefined undefined" ? (<><Text >Select date to</Text>{"  "}<Icon name="calendar"
                size={20}
                color='white'
              />  </>) : <Text>{getDated()}</Text>}</Text>

            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isToDatePickerVisible}
              mode={studentdateTo.date}
              onConfirm={handleConfirmTo}
              onCancel={hideDatePickerTo}

            />
          </View>
          {/* =================TO============================================== */}


          <Divider borderWidth={0.2} width={'100%'} margin={5} />

          <View>
            <Text style={{
              fontSize: 35,
              fontWeight: 'bold',
              left: 5

            }}>{route.params.first_name + ' ' + route.params.last_name}</Text>
            <Text style={{
              left: 5,
              fontWeight: 'bold'
            }} >{route.params.schoolName}</Text>
          </View>
          {/* add pie here */}

          <View style={{ flexDirection: 'row', top: 10 }}>
            <Text style={{
              left: 5
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
        style={{ width: "100%" }}
        keyExtractor={(item, index) => index + ""}
        ListHeaderComponent={tableHeader}
        stickyHeaderIndices={[0]}
        renderItem={({ item, index }) => {
          return (
            <>
              {getDates() ? (
                <View>
                  {getDates().map(date => date === moment(item.createdAt).utc().format('YYYY-MM-DD') ? (
                    <View style={{ ...styles.tableRow, backgroundColor: index % 2 == 1 ? "#F0FBFC" : "white", width: '100%' }}>
                      <Text style={{ ...styles.columnRowTxt, fontWeight: "bold" }}>{moment(item.createdAt).utc().format('YYYY-MM-DD')}</Text>
                      <Text style={styles.columnRowTxt}>{item.attendance}</Text>
                    </View>) :
                    null)

                  }
                </View>
              )
                :
                <View style={{ ...styles.tableRow, backgroundColor: index % 2 == 1 ? "#F0FBFC" : "white", width: '100%' }}>
                  <Text style={{ ...styles.columnRowTxt, fontWeight: "bold" }}>{moment(item.createdAt).utc().format('YYYY-MM-DD')}</Text>
                  <Text style={styles.columnRowTxt}>{item.attendance}</Text>
                </View>
              }



            </>
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
    alignItems: "center",
  },
  columnHeader: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",

  },
  columnHeaderTxt: {
    color: "white",
    fontWeight: "bold",
  },
  columnRowTxt: {
    width: "50%",
    textAlign: "center",
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