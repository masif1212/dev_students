import React, { useState, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import _ from "lodash"
import { CheckBox } from 'react-native-elements';
import { useIsFocused } from "@react-navigation/native";
import { useRegisterTechAttendanceMutation } from '../../../services/userAuthApi';
import Toast from "react-native-toast-message";
import axios from 'axios'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MarkAttendanceScreen = ({ navigation, route }) => {
  const [columns, setColumns] = useState([
   
    "Name",
    "Attendance"
  ])

  const [direction, setDirection] = useState('')
  const [selectedColumn, setSelectedColumn] = useState('')
  const [teachers, setTeachers] = useState([]);
  const [attendance, setAttendance] = useState()
  const [attendanceState, setAttendanceState] = useState('')


  const fetchData = async () => {
    const resp = await fetch(`http://192.168.18.64:8000/api/user/getSometeacher/${route.params.schoolId}`);
    const data = await resp.json();
    const schAdminId = (data.map(l => l.first_name ? { ...l, schoolAdminID: route.params.schoolAdminID } : l));
    setAttendanceState(schAdminId)

  };

  const focus = useIsFocused();

  useLayoutEffect(() => {
    fetchData();


  }, [focus])

  const MarkAttendance = (item, S) => {
    const attend = (attendanceState.map(l => l.teacher_id_att === item.teacher_id_att ? { ...l, attendance: S } : l));
    setAttendanceState(attend)
    setAttendance(attend)

  }

  const [items, setItems] = useState()
  const sortTable = (column) => {
    const newDirection = direction === "desc" ? "asc" : "desc"
    const sortedData = _.orderBy(teachers, [column], [newDirection])
    setSelectedColumn(column)
    setDirection(newDirection)
    setTeachers(sortedData)
  }

  const [registerTechAttendance] = useRegisterTechAttendanceMutation();

  const handleFormSubmit = async () => {
    fetch('http://192.168.18.64:8000/api/user/teacherattendance', {
      method: "POST",
      body: JSON.stringify(attendance),
      headers: {
        'content-type': 'application/json',
      }
    })
      .then((jsonRes) =>console.log("muzammil", jsonRes))
      .catch(err => {
        console.log(err);

      })
  };


  // const onSubmit = () => {
  //       attendance.forEach((item) => {
  //       return item
  //   });
  //   console.log(attendance)
  //   fetch('http://192.168.18.64:8000/api/user/teacherattendance', {
  //     method: "POST",
  //     body: JSON.stringify(attendance),
  //     headers: {
  //       'content-type': 'application/json',
  //     }
  //   })
  //   .then((response) => console.log(response))
  //   .catch(err => {
  //     console.log(err);

  // })
  // }
  
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

    <View style={{ height: windowHeight, width: '100%' }}>


      <FlatList
        data={attendanceState}
        keyExtractor={(item, index) => index + ""}
        style={{ maxWidth: '100%' }}
        ListHeaderComponent={tableHeader}
        stickyHeaderIndices={[0]}
        extraData={attendanceState}
        renderItem={({ item, index }) => {
          return (
            <View style={{ ...styles.tableRow, backgroundColor: index % 2 == 1 ? "#F0FBFC" : "white", width: '100%', }}>
           
              <Text style={{ ...styles.columnRowTxt }}>{item.first_name + " " + item.last_name}</Text>
              <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={true}
                pagingEnabled={true}
                style={{ width: '150%' }}
              >
                <View style={{ flexDirection: 'row', left: 95 }}>
                  <View
                    style={{
                      left: 23

                    }}
                  >

                    <CheckBox
                      title='P'
                      checkedColor='green'
                      checked={item.attendance === 'P' ? true : false}
                      checkedIcon="dot-circle-o"
                      unCheckedIcon='circle-o'
                      onPress={() => MarkAttendance(item, 'P')}
                      containerStyle={{
                        alignItems: 'center',
                        justifyContent: 'center',

                        height: 50,
                        right: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: -10,
                        backgroundColor: 'transparent'
                      }}
                    />

                    {/* <BouncyCheckbox
            size={20}
            fillColor="green"
            unfillColor="#FFFFFF"
            text="P"
            iconStyle={{  }}
            textStyle={{  }}
            onPress={()=>MarkPresent()}
            isChecked={false}
            /> */}


                  </View>
                  <View style={{
                    left: 5
                  }}>
                    <CheckBox
                      title='A'
                      checkedColor='red'
                      checked={item.attendance === 'A' ? true : false}
                      checkedIcon="dot-circle-o"
                      unCheckedIcon='circle-o'

                      onPress={() => MarkAttendance(item, 'A')}
                      containerStyle={{
                        alignItems: 'center',
                        justifyContent: 'center',

                        height: 50,
                        right: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: -10,
                        backgroundColor: 'transparent'
                      }}
                    />
                    
                    {/* <BouncyCheckbox
            size={20}
            fillColor="red"
            unfillColor="#FFFFFF"
            text="A"
            iconStyle={{  }}
            textStyle={{  }}
            onPress={()=>MarkAbsent()}
    /> */}
                  </View>
                  <View style={{
                    left: 5,
                  }}>
                    <CheckBox
                      title='L'
                      checkedColor='gray'
                      checked={item.attendance === 'L' ? true : false}
                      checkedIcon='dot-circle-o'
                      unCheckedIcon='circle-o'
                      onPress={() => MarkAttendance(item, 'L')}
                      containerStyle={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 50,
                        right: 70,
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: -10,
                        backgroundColor: 'transparent',
                      }}
                    />
                  </View>
                </View>
              </ScrollView>
            </View>
          )
        }}
      />
      <View>
        <TouchableOpacity
          onPress={handleFormSubmit}
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 15,
            width: "100%",
            marginVertical: 5,
            borderRadius: 50,
            marginBottom: 60,
            fontWeight: "bold",
            backgroundColor: "#5062BD",
            elevation: 1,
            marginTop: 30,
            bottom: 20,

          }}
        >
          <Text
            style={{
              color: "white",
              justifyContent: "center",
              alignItems: "center",

            }}
          >
            Submit Attendance
          </Text>
        </TouchableOpacity>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({

  tableHeader: {
   
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#5062BD",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    

  },
  tableRow: {
    flexDirection: "row",
    height: 40,
    margin: 2,
    left: 8
  },
  tableRowtext: {
    left: 8
  },
  columnHeader: {
    width: "20%",
    justifyContent: "center",
    alignItems: "flex-start",
    margin: 10,

  },
  columnHeaderTxt: {
    color: "white",
    fontWeight: "bold",


  },
  columnRowTxt: {
    width: "18%",
    left:30
  }

});

export default MarkAttendanceScreen