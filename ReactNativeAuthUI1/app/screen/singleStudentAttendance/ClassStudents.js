import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView,Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import _ from "lodash"
import { useIsFocused } from "@react-navigation/native"; 
import { Divider } from 'react-native-paper';
import  SearchableDropdown from 'react-native-searchable-dropdown';
import { useGetStudentQuery } from '../../../services/userAuthApi';


const {width} = Dimensions.get('window');


const ClassStudents = ({ navigation, route }) => {
  const [columns, setColumns] = useState([
    "RollNo",
    "Name",
  ])

  const [direction, setDirection] = useState('')
  const [selectedColumn, setSelectedColumn] = useState('')
  const [students, setStudents] = useState('')


  
  const fetchData = async () => {
    fetch('https://ams.firefly-techsolutions.com/services/getStudents',{
      method: 'POST',//GET and ...
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ schoolId: route.params.schoolid })
     })
     .then((response)=>response.json()) //   <------ this line 
     .then((response)=>{
       setStudents(response.data)  
     });
  };

  const focus = useIsFocused();

  useEffect(() => {
    fetchData();   
  },[route.params.schoolid, focus]);
    //select class and section
  
    var  items  = [
      {
        id: 1,
        name: '1'
      },
      {
        id: 2,
        name: '2'
      },
      {
        id: 3,
        name: '3'
      },
      {
        id: 4,
        name: '4 '
      },
      {
        id: 5,
        name: '5'
      },
      {
        id: 6,
        name: '6'
      },
      {
        id: 7,
        name: '7'
      },
      {
        id: 8,
        name: '8'
      },
      {
        id: 9,
        name: '9'
      },
      {
        id: 10,
        name: '10'
      },
    ];
  
    var  items_2  = [
      {
        id: 1,
        name: 'A'
      },
      {
        id: 2,
        name: 'B'
      },
      {
        id: 3,
        name: 'C'
      },
      {
        id: 4,
        name: 'D'
      }
     
    ];
  
  
   
  
    const [ classes, setClasses ] = useState({})
    const [ section, setSections ] = useState({})
    
    const clearVariable = () => {
      setClasses(''); 
      setSections('');
    };

 
    const {data} = useGetStudentQuery();
  
    
   

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

<SearchableDropdown
    selectedItems={classes}
    onTextChange={(text) =>  setClasses(text)}
    onItemSelect={(item) =>  setClasses(item)}
   
    containerStyle={{
      padding: 5,
    }}
    textInputStyle={{
      padding: 12,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5
    }}
    itemStyle={{
      padding: 10,
        marginTop: 2,
      backgroundColor: '#ddd',
      borderColor: '#bbb',
      borderWidth: 1,
      borderRadius:5
    }}
    itemTextStyle={{
    color: '#222'
    }}
    itemsContainerStyle={{
      maxHeight: 140
    }}
    items={items}
    placeholder="Select Class"
    placeholderTextColor="gray"
    resetValue={false}
    underlineColorAndroid='transparent' />

<SearchableDropdown
selectedItems={section}
    onTextChange={(text) =>  setSections(text)}
    onItemSelect={(item) =>  setSections(item)}
 
    containerStyle={{
      padding: 5
    }}
    textInputStyle={{
      padding: 12,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5
    }}
    itemStyle={{
      padding: 10,
        marginTop: 2,
      backgroundColor: '#ddd',
      borderColor: '#bbb',
      borderWidth: 1,
      borderRadius:5
    }}
    itemTextStyle={{
    color: '#222'
    }}
    itemsContainerStyle={{
      maxHeight: 140
    }}
    items={items_2}
    placeholder="Select Section."
    placeholderTextColor="gray"
    resetValue={false}
    underlineColorAndroid='transparent' />


    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-around'
    }} >




      <View style={{
        width: '90%',
        left: 10}}>


        <View style={{ flexDirection: 'row', top: 10, justifyContent: 'center', alignItems: 'center', right: 30 }}>


          <Text style={{

          }}>Class : {classes.name}</Text>

          <Text style={{
            left: 25
          }}>Section : {section.name}</Text>
       
        </View>
      </View>


    </View>

    <Divider borderWidth={0.2} width={'100%'} top={15} />





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
            <>
             { classes.name && section.name ? (
              <View>
                 {item.student_class === classes.name && item.section === section.name ? (
            <View style={{ ...styles.tableRow, backgroundColor: index % 2 == 1 ? "#F0FBFC" : "white", width: '100%'}}>

              <Text style={{ ...styles.columnRowNumber, fontWeight: "bold", marginTop:14 }}>{item.roll_no}</Text>

              <Text style={{ ...styles.columnRowTxt,marginTop:14 }}>{item.first_name}</Text>


              <View style={{ width: '100%', flexDirection: 'row' }}>
                <TouchableOpacity 
                onPress={()=>navigation.navigate('StudentDetail',{
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
                  studentId:item._id,
                  schoolName:item.schoolName,
                  roll_no:item.roll_no,
                  gender:item.gender,
                  dateofbirth:item.dateofbirth,
                  currentshift:item.currentshift,
                  religion:item.religion,
                  date_of_admission:item.date_of_admission,
                  


                 

                })}
                style={{ backgroundColor: '#5062BD', margin: 3, borderRadius: 6, width: '30%', alignItems: 'center', padding: 4, justifyContent: 'center', }}>
                  <Text style={{
                    color: 'white'
                  }}>View Attendance</Text>
                </TouchableOpacity>
                <TouchableOpacity
                 onPress={()=>navigation.navigate('SingleStudentDetail',{
                  first_name:item.first_name,
                  last_name:item.last_name,
                  contact:item.contact,
                  father_name:item.father_name,
                  father_cnic:item.father_cnic,
                  student_class:item.student_class,
                  section:item.section,
                  address_1:item.address_1,
                  city:item.city,
                  studentId:item._id,
                  schoolName:item.schoolName,
                  roll_no:item.roll_no,
                  gender:item.gender,
                  dateofbirth:item.dateofbirth,
                  currentshift:item.currentshift,
                  religion:item.religion,
                  date_of_admission:item.date_of_admission,
                 
                 })}
                 style={{ backgroundColor: '#5062BD', margin: 3, borderRadius: 6, width: '24%', alignItems: 'center', padding: 4, justifyContent: 'center', }}>
                  <Text style={{
                    color: 'white'
                  }}>View Detail</Text>
                </TouchableOpacity>
              </View>


            </View>
                 ) : null 
                }
            </View>
             ) : null
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
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    width,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F6F6',
  },
  headerTitle: {color: '#000', fontWeight: 'bold', fontSize: 16},
  saveAreaViewContainer: {flex: 1, backgroundColor: '#FFF'},
  viewContainer: {flex: 1, width, backgroundColor: '#FFF'},
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '10%',
  },
  dropdownsRow: {flexDirection: 'row', width: '100%', paddingHorizontal: '5%'},

  dropdown1BtnStyle: {
    flex: 1,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#444',
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left',fontSize:15},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
  divider: {width: 12},
  dropdown2BtnStyle: {
    flex: 1,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#444',
  },
  dropdown2BtnTxtStyle: {color: '#444', textAlign: 'left',fontSize:15},
  dropdown2DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown2RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown2RowTxtStyle: {color: '#444', textAlign: 'left'},

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
    margin: 10
  },
  columnHeaderTxt: {
    color: "white",
    fontWeight: "bold",


  },
  columnRowTxt: {
    width: "20%",

  },
  columnRowNumber: {
    width: "20%",
    paddingLeft: 22

  }

});

export default ClassStudents