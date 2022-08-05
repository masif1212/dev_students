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
import { useGetStudentQuery } from "../../../services/userAuthApi";
import SearchableDropdown from "react-native-searchable-dropdown";
import { Divider } from "react-native-paper";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const { width } = Dimensions.get("window");

const MarkAttendanceScreen = ({ navigation, route }) => {
  const [columns, setColumns] = useState(["RollNo", "Name"]);

  const [direction, setDirection] = useState("");
  const [selectedColumn, setSelectedColumn] = useState("");
  const [teachers, setTeachers] = useState([]);
  const [attendance, setAttendance] = useState();
  const [attendanceState, setAttendanceState] = useState("");
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    fetch("https://ams.firefly-techsolutions.com/services/getSomestudents", {
      method: "POST", //GET and ...
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ schoolId: route.params.schoolId }),
    })
      .then((response) => response.json()) //   <------ this line
      .then((response) => {
        setAttendanceState(response.data);
      });
  };

  const focus = useIsFocused();

  useLayoutEffect(() => {
    fetchData();
  }, [focus]);

  //select class and section

  var items = [
    {
      id: 1,
      name: "1",
    },
    {
      id: 2,
      name: "2",
    },
    {
      id: 3,
      name: "3",
    },
    {
      id: 4,
      name: "4 ",
    },
    {
      id: 5,
      name: "5",
    },
    {
      id: 6,
      name: "6",
    },
    {
      id: 7,
      name: "7",
    },
    {
      id: 8,
      name: "8",
    },
    {
      id: 9,
      name: "9",
    },
    {
      id: 10,
      name: "10",
    },
  ];

  var items_2 = [
    {
      id: 1,
      name: "A",
    },
    {
      id: 2,
      name: "B",
    },
    {
      id: 3,
      name: "C",
    },
    {
      id: 4,
      name: "D",
    },
  ];

  const [classes, setClasses] = useState({});
  const [section, setSections] = useState({});
  const [student, setStudent] = useState({});

  const { data } = useGetStudentQuery();

  useEffect(() => {
    setStudent(data);
  });

  const MarkAttendance = (item, S) => {
    const attend = attendanceState.map((l) =>
      l._id === item._id
        ? { ...l, studentId: l._id, attendance: S, teacherId: route.params.teacherid }
        : l
    );
    setAttendanceState(attend);
    setAttendance(attend);
  };

  const sortTable = (column) => {
    const newDirection = direction === "desc" ? "asc" : "desc";
    const sortedData = _.orderBy(teachers, [column], [newDirection]);
    setSelectedColumn(column);
    setDirection(newDirection);
    setTeachers(sortedData);
  };

  const handleFormSubmit = async () => {
    fetch("https://ams.firefly-techsolutions.com/services/studentattendance", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attendance),
    }).then(res =>res.json())
    .then((res) => res.type === "success"
      ? navigation.goBack()
      : setMessage(res.message)
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
    <View style={{ height: windowHeight, width: "100%", marginBottom: 40 }}>
      <View>
        <View style={styles.container}>
          <SearchableDropdown
            onTextChange={(text) => setClasses(text)}
            onItemSelect={(item) => setClasses(item)}
            containerStyle={{
              padding: 5,
            }}
            textInputStyle={{
              padding: 12,
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 5,
            }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: "#ddd",
              borderColor: "#bbb",
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{
              color: "#222",
            }}
            itemsContainerStyle={{
              maxHeight: 140,
            }}
            items={items}
            placeholder="Select Class"
            placeholderTextColor="gray"
            resetValue={false}
            underlineColorAndroid="transparent"
          />

          <SearchableDropdown
            onTextChange={(text) => setSections(text)}
            onItemSelect={(item) => setSections(item)}
            containerStyle={{
              padding: 5,
            }}
            textInputStyle={{
              padding: 12,
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 5,
            }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: "#ddd",
              borderColor: "#bbb",
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{
              color: "#222",
            }}
            itemsContainerStyle={{
              maxHeight: 140,
            }}
            items={items_2}
            placeholder="Select Section."
            placeholderTextColor="gray"
            resetValue={false}
            underlineColorAndroid="transparent"
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <View
              style={{
                width: "90%",
                left: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  top: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  right: 30,
                }}
              >
                <Text style={{}}>Class : {classes.name}</Text>

                <Text
                  style={{
                    left: 25,
                  }}
                >
                  Section : {section.name}
                </Text>
              </View>
            </View>
          </View>

          <Divider borderWidth={0.2} width={"100%"} top={15} />
        </View>
      </View>

      <FlatList
        data={attendanceState}
        keyExtractor={(item, index) => index + ""}
        style={{ maxWidth: "100%" }}
        ListHeaderComponent={tableHeader}
        stickyHeaderIndices={[0]}
        extraData={attendanceState}
        renderItem={({ item, index }) => {
          return (
            <>
              {classes.name && section.name ? (
                <View>
                  {item.student_class === classes.name &&
                  item.section === section.name ? (
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
                        {item.roll_no}
                      </Text>
                      <Text style={{ ...styles.columnRowTxt }}>
                        {item.first_name}
                      </Text>
                      <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={true}
                        pagingEnabled={true}
                        style={{ width: "150%" }}
                      >
                        <View style={{ flexDirection: "row", left: 40 }}>
                          <View
                            style={{
                              left: 15,
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
                      </ScrollView>
                    </View>
                  ) : null}
                </View>
              ) : null}
            </>
          );
        }}
      />

      <View style={{
         justifyContent: "center",
         alignItems: "center",
      }}>
        <TouchableOpacity
          onPress={handleFormSubmit}
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 15,
            width: "50%",
            marginVertical: 5,
            borderRadius: 50,
            marginBottom: 60,
            backgroundColor: "#5062BD",
            elevation: 1,
            marginTop: 30,
            bottom: 25,
          }}
        >
          <Text
            style={{
              color: "white",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: 15
            }}
          >
            Submit Attendance
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#8099F7",
    marginBottom: 5,
    padding: 3,
    marginLeft: 4,
    borderRadius: 10,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: "row",
    width,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
  },
  headerTitle: { color: "#000", fontWeight: "bold", fontSize: 16 },
  saveAreaViewContainer: { flex: 1, backgroundColor: "#FFF" },
  viewContainer: { flex: 1, width, backgroundColor: "#FFF" },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "10%",
  },
  dropdownsRow: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: "5%",
  },

  dropdown1BtnStyle: {
    flex: 1,
    height: 40,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "#444",
  },
  dropdown1BtnTxtStyle: { color: "#444", textAlign: "left", fontSize: 15 },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
  divider: { width: 12 },
  dropdown2BtnStyle: {
    flex: 1,
    height: 40,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "#444",
  },
  dropdown2BtnTxtStyle: { color: "#444", textAlign: "left", fontSize: 15 },
  dropdown2DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown2RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown2RowTxtStyle: { color: "#444", textAlign: "left" },

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
    height: 50,
    margin: 2,
  },
  columnHeader: {
    width: "16%",
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
    paddingTop: 15,
    fontWeight: "bold",
    paddingLeft: 15,
  },
});

export default MarkAttendanceScreen;
