import { StatusBar } from "expo-status-bar";
import React, { useState, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import _ from "lodash";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Divider } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { useIsFocused } from "@react-navigation/native";
import moment from "moment";
import TeacherListPieChart from "../../Components/customCard/TeachersListPieChart/TeachersListPieChart";

const TeacherAttendanceDetails = ({
  route,
  backgroundColor,
  color,
}) => {
  let bgColor = backgroundColor;
  let fontColor = color;

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [teachers, setTeachers] = useState("");
  const [teacherDate, setTeacherDate] = useState(false);



  const focus = useIsFocused();

  const fetchData = async () => {
    fetch("https://ams.firefly-techsolutions.com/services/getteacherattendancedashboardbyteacherid", {
      method: "POST", //GET and ...
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id : route.params.teacherId }),
    })
      .then((response) => response.json()) //   <------ this line
      .then((response) => {
        setTeachers(response.data);
      });
  };
  

  useLayoutEffect(() => {
    fetchData();
    console.log(route.params.teacherId)

  }, [focus]);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setTeacherDate(moment(date).utc().format("YYYY-MM-DD"));
    hideDatePicker();
  };

  const [columns, setColumns] = useState(["Date", "Status"]);
  const [direction, setDirection] = useState(null);
  const [selectedColumn, setSelectedColumn] = useState(null);

  const sortTable = (column) => {
    const newDirection = direction === "desc" ? "asc" : "desc";
    const sortedData = _.orderBy(teachers, [column], [newDirection]);
    setSelectedColumn(column);
    setDirection(newDirection);
    setTeachers(sortedData);
  };
  const tableHeader = () => (
    <View style={styles.tableHeader}>
      {columns.map((column, index) => {
        {
          return (
            <TouchableOpacity
              key={index}
              style={styles.columnHeader}
              onPress={() => sortTable(column)}
            >
              <Text style={styles.columnHeaderTxt}>
                {column + " "}
                {selectedColumn === column && (
                  <MaterialCommunityIcons
                    name={
                      direction === "desc"
                        ? "arrow-down-drop-circle"
                        : "arrow-up-drop-circle"
                    }
                  />
                )}
              </Text>
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );

  return (
    <View style={{ height: "100%" }}>
      <View style={{ width: "100%" }}>
        <View style={styles.container}>
 

          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                borderRadius: 10,
                backgroundColor: "#5062BD",
                padding: 10,
                width: "35%",
                justifyContent: "center",
              }}
              onPress={showDatePicker}
            >
              <Icon name="calendar" size={20} color="white" />
              <Text
                style={{
                  left: 4,
                  color: "white",
                }}
              >
                Select Date
              </Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode={teacherDate.date}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>

          <Divider borderWidth={0.2} width={"100%"} margin={5} />

          <View>
            <Text
              style={{
                fontSize: 35,
                fontWeight: "bold",
                left: 5,
              }}
            >
              {route.params.staffName}
            </Text>
            </View>
          
          {/* add pie here */}
          
    
       <View style={{bottom:19}}>
        <View style ={{left:100,bottom:1}}>
           <TeacherListPieChart
              outerRadius={"70%"}
              teacherId={route.params.teacherId}
            />
            </View>

            <View style={{
              bottom: 100,
              left:10
            }}>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{ width: 40, height: 15, backgroundColor: "#A4C3DA" }}
                />
                <Text
                  style={[
                    { left: 5, bottom: 2, fontWeight: "bold" },
                    { color: fontColor },
                    fontColor ? { color: fontColor } : {},
                  ]}
                >
                  Present (%){" "}
                </Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View
                  style={{ width: 40, height: 15, backgroundColor: "#D2F790" }}
                />
                <Text
                  style={[
                    { left: 5, bottom: 2, fontWeight: "bold" },
                    { color: fontColor },
                    fontColor ? { color: fontColor } : {},
                  ]}
                >
                  Absent (%){" "}
                </Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View
                  style={{ width: 40, height: 15, backgroundColor: "gray" }}
                />
                <Text
                  style={[
                    { left: 5, bottom: 2, fontWeight: "bold" },
                    { color: fontColor },
                    fontColor ? { color: fontColor } : {},
                  ]}
                >
                  Leave (%){" "}
                </Text>
            
              </View>
              <Text style={{
                fontSize:18,
                fontWeight:'bold',
                top:8
              }}>Overall Attendance %</Text>
            </View>
          
              </View>
             
          
          </View>
        </View>
    
      <FlatList
        data={teachers}
        style={{ width: "100%" }}
        keyExtractor={(staffName) => staffName}
        ListHeaderComponent={tableHeader}
        stickyHeaderIndices={[0]}
        renderItem={({ item, index }) => {
          return (
            <>
              {teacherDate ? (
                <View>
                  {moment(item.createdAt).utc().format("YYYY-MM-DD") ===
                  teacherDate ? (
                    <View
                      style={{
                        ...styles.tableRow,
                        backgroundColor: index % 2 == 1 ? "#F0FBFC" : "white",
                        width: "100%",
                      }}
                    >
                      <Text
                        style={{ ...styles.columnRowTxt, fontWeight: "bold" }}
                      >
                        {moment(item.createdAt).utc().format("YYYY-MM-DD")}
                      </Text>
                      <Text style={styles.columnRowTxt}>{item.attendance}</Text>
                    </View>
                  ) : null}
                </View>
              ) : (
                <View
                  style={{
                    ...styles.tableRow,
                    backgroundColor: index % 2 == 1 ? "#F0FBFC" : "white",
                    width: "100%",
                  }}
                >
                  <Text style={{ ...styles.columnRowTxt, fontWeight: "bold" }}>
                    {moment(item.createdAt).utc().format("YYYY-MM-DD")}
                  </Text>
                  <Text style={styles.columnRowTxt}>{item.attendance}</Text>
                </View>
              )}
            </>
          );
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
};

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
    padding: 10,
    top:10,
    height:'38%'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#8099F7",
    marginBottom: 5,
    padding: 3,
    marginLeft: 4,
    borderRadius: 10,
  },
});

export default TeacherAttendanceDetails;
