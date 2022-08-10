import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import _ from "lodash";
import { CheckBox } from "react-native-elements";
import { useIsFocused } from "@react-navigation/native";
import { useRegisterTechAttendanceMutation } from "../../../services/userAuthApi";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MarkAttendanceScreen = ({ navigation, route }) => {
  const [columns, setColumns] = useState(["Name", "Attendance"]);

  const [direction, setDirection] = useState("");
  const [selectedColumn, setSelectedColumn] = useState("");
  const [teachers, setTeachers] = useState([]);
  const [attendance, setAttendance] = useState("");
  const [attendanceState, setAttendanceState] = useState("");
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    fetch("https://ams.firefly-techsolutions.com/services/getSometeacher", {
      method: "POST", //GET and ...
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ schoolId: route.params.schoolId }),
    })
      .then((response) => response.json()) //   <------ this line
      .then((response) => {
        const schAdminId = response.data.map((l) =>
          l.staffName ? { ...l, schoolAdminID: route.params.schoolAdminID } : l
        );
        setAttendanceState(schAdminId);
      });
  };


  const focus = useIsFocused();

  useLayoutEffect(() => {
    fetchData();
  }, [route.params.schoolAdminID]);

  const MarkAttendance = (item, S) => {
    const attend = attendanceState.map((l) =>
      l._id === item._id
        ? {
            ...l,
            attendance: S,
            schoolId: route.params.schoolId,
            teacherId: l._id,
          }
        : l
    );
    setAttendance(attend);
    setAttendanceState(attend);
  };

  const [items, setItems] = useState();
  const sortTable = (column) => {
    const newDirection = direction === "desc" ? "asc" : "desc";
    const sortedData = _.orderBy(teachers, [column], [newDirection]);
    setSelectedColumn(column);
    setDirection(newDirection);
    setTeachers(sortedData);
  };

  const [registerTechAttendance] = useRegisterTechAttendanceMutation();

  const handleFormSubmit = async () => {
    fetch("https://ams.firefly-techsolutions.com/services/teacherattendance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attendance),
    })
      .then((res) => res.json())
      .then((res) =>
        res.type === "success" ? navigation.goBack() : setMessage(res.message)
      );
  };


  const tableHeader = () => (
    <View style={styles.tableHeader}>
      {message ? (
        <Text
          style={{
            fontSize: 15,
            paddingLeft: 30,
            color: "green",
            fontWeight: "bold",
          }}
        >
          {message}
        </Text>
      ) : null}
      {columns.map((column, index) => {
        {
          return (
            <TouchableOpacity
              key={index}
              style={styles.columnHeader}
              onPress={() => sortTable(column)}
            >
              <Text style={styles.columnHeaderTxt}>
                {column + ""}
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
    <>
      <View style={{ paddingBottom: 70 }}>
        <FlatList
          data={attendanceState}
          keyExtractor={(item, index) => index + ""}
          style={{ maxWidth: "100%", height: "100%" }}
          ListHeaderComponent={tableHeader}
          stickyHeaderIndices={[0]}
          extraData={attendanceState}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  ...styles.tableRow,
                  backgroundColor: index % 2 == 1 ? "#F0FBFC" : "white",
                  width: "100%",
                }}
              >
                <Text style={{ ...styles.columnRowTxt }}>{item.staffName}</Text>
                <View style={{ flexDirection: "row", left: 75 }}>
                  <View
                    style={{
                      left: 23,
                    }}
                  >
                    <CheckBox
                      title="P"
                      checkedColor="green"
                      checked={item.attendance === "P" ? true : false}
                      checkedIcon="dot-circle-o"
                      unCheckedIcon="circle-o"
                      onPress={() => MarkAttendance(item, "P")}
                      containerStyle={{
                        alignItems: "center",
                        justifyContent: "center",

                        height: 60,
                        right: 50,
                        alignItems: "center",
                        justifyContent: "center",
                        top: -10,
                        backgroundColor: "transparent",
                      }}
                    />

                 
                  </View>
                  <View
                    style={{
                      left: 0,
                    }}
                  >
                    <CheckBox
                      title="A"
                      checkedColor="red"
                      checked={item.attendance === "A" ? true : false}
                      checkedIcon="dot-circle-o"
                      unCheckedIcon="circle-o"
                      onPress={() => MarkAttendance(item, "A")}
                      containerStyle={{
                        alignItems: "center",
                        justifyContent: "center",

                        height: 60,
                        right: 50,
                        alignItems: "center",
                        justifyContent: "center",
                        top: -10,
                        backgroundColor: "transparent",
                      }}
                    />

                  </View>
                  <View
                    style={{
                      left: 0,
                    }}
                  >
                    <CheckBox
                      title="L"
                      checkedColor="gray"
                      checked={item.attendance === "L" ? true : false}
                      checkedIcon="dot-circle-o"
                      unCheckedIcon="circle-o"
                      onPress={() => MarkAttendance(item, "L")}
                      containerStyle={{
                        alignItems: "center",
                        justifyContent: "center",
                        height: 60,
                        right: 70,
                        alignItems: "center",
                        justifyContent: "center",
                        top: -10,
                        backgroundColor: "transparent",
                      }}
                    />
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={handleFormSubmit}
          style={{
            alignItems: "center",
            padding: 15,
            width: "50%",
            borderRadius: 40,
            bottom: 75,
            backgroundColor: "#5062BD",
            elevation: 1,
            position: "relative",
          }}
        >
          <Text
            style={{
              color: "white",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            Submit Attendance
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

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
    padding: 5,
    height: 60,
  },
  tableRowtext: {
    left: 8,
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
    width: "25%",
    paddingLeft: 10,
    paddingTop: 15,
    fontWeight: "bold",
  },
});

export default MarkAttendanceScreen;
