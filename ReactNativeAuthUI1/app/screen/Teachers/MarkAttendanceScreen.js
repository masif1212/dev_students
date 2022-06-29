import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView,Dimensions  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import _ from "lodash"
import ClassSectionFilter from '../singleStudentAttendance/ClassSectionFilter';
import { CheckBox } from 'react-native-elements';
import { useGetStudentQuery } from '../../../services/userAuthApi';
import { useSelector } from 'react-redux';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MarkAttendanceScreen = ({ navigation }) => {
  const [columns, setColumns] = useState([
    "RollNo",
    "Name",
  ])
  
  const [direction, setDirection] = useState('')
  const [selectedColumn, setSelectedColumn] = useState('')
  
  const {data} = useGetStudentQuery();


  const [students,setStudents] =useState([])

useEffect(() => {
  setStudents(data);
}, [])
  
  
 

  const myData = useSelector(state => state.student)



  const MarkAttendance=(item,S)=>{
    const attend = (students.map(l => l._id===item._id ? {...l,  attendance: S} : l));
    setStudents(attend)
    // console.log(item)


    // console.log(students)



    // const MarkAttendance=(item,S)=>{
    //   let std=students
    //   std[item].attendance = S
    //   let newArr = [...std]; // copying the old datas array
    //   newArr[item].attendance = S; 
    //    let any = std[item]
    //  setStudents(any)
    //  console.log(students)
    // //  onSubmit(any);
     
 }

const [ items , setItems ] = useState()
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

  
    <View style={{ height: windowHeight,width:'100%' }}>

      <View >
        <ClassSectionFilter />
      </View>
    
      <FlatList
        data={students}
        keyExtractor={(item, index) => index + ""}
        style={{ maxWidth: '100%' }}
        ListHeaderComponent={tableHeader}
        stickyHeaderIndices={[0]}
        extraData={students}
        renderItem={({ item, index }) => {
        console.log(item)
          return (
            <View style={{ ...styles.tableRow, backgroundColor: index % 2 == 1 ? "#F0FBFC" : "white", width: '100%', }}>   
              <Text style={{ ...styles.columnRowTxt, fontWeight: "bold" }}>{item?.roll_no}</Text>
              <Text style={{ ...styles.columnRowTxt }}>{item.first_name}</Text>
              <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={true}
                pagingEnabled={true}
                style={{width:'150%'}}
                >
              <View style={{  flexDirection: 'row',left:40 }}>
                <View 
                style={{
                  left:23
                  
                }}
                >
                
                <CheckBox
                  title='P'
                  checkedColor='green'
                  checked={item.attendance==='P'? true:false}                    
                  checkedIcon ="dot-circle-o"
                  unCheckedIcon='circle-o'
                  onPress={()=>MarkAttendance(item,'P')}
                  containerStyle={{
                  alignItems:'center',
                  justifyContent:'center',
       
                  height:50,  
                  right:50,
                  alignItems:'center',
                  justifyContent:'center',
                  top:-10,
                  backgroundColor:'transparent'
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
                    left:5
                }}>             
              <CheckBox
                  title='A'
                  checkedColor='red'
                  checked={item.attendanc=='a'?true:false}
                  checkedIcon ="dot-circle-o"
                  unCheckedIcon='circle-o'

                  onPress={()=>MarkAttendance(index,'a')}
                  containerStyle={{
                  alignItems:'center',
                  justifyContent:'center',
        
                  height:50,  
                  right:50,
                  alignItems:'center',
                  justifyContent:'center',
                  top:-10,
                  backgroundColor:'transparent'
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
                    left:5,
                }}>
                <CheckBox
                title='L'
                checkedColor='gray'

                checked={item.attendanc=='l'?true:false}
                checkedIcon ='dot-circle-o'
                unCheckedIcon='circle-o'
                onPress={()=>MarkAttendance(index,'l')}
                containerStyle={{
                  alignItems:'center',
                  justifyContent:'center',
 
                  height:50,  
                  right:70,
                  alignItems:'center',
                  justifyContent:'center',
                  top:-10,
                  backgroundColor:'transparent',
                  
                  }}
                  
                />

        {/* <BouncyCheckbox
          size={20}
          fillColor="gray"
          unfillColor="#FFFFFF"
          text="L"
          iconStyle={{  }}
          textStyle={{  }}
          onPress={(isChecked)=>MarkLeave({isChecked})}
          isChecked = {MarkLeave === setLeave ? true : false  }
    />
                */}

</View>


              </View>
              </ScrollView>
            </View>

          )
        }}
      />
    
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
    width: "18%",
  }

});

export default MarkAttendanceScreen