import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView,Dimensions,Divider  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import _ from "lodash"
import { CheckBox } from 'react-native-elements';
import { useIsFocused } from "@react-navigation/native";
import { useSelector } from 'react-redux';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MarkTeacherAttendance = ({ navigation, route }) => {
  const [columns, setColumns] = useState([
    "Name",
    // "Roll No"
  ])
  
  const [direction, setDirection] = useState('')
  const [selectedColumn, setSelectedColumn] = useState('')
  const [teachers,setTeachers] = useState();

  const newData = useSelector(state => state.schoolAdmin);

  const fetchData = async () => {
    const resp = await fetch(`http://192.168.18.14:8000/api/user/getteacher/${route.params.schoolId}`);
    const data = await resp.json();
    setTeachers(data);
  };
  
  const focus = useIsFocused();

  useEffect(() => {
   console.log(newData)
  }, [focus]);


  const onSubmit = (any) => {
    fetch('http://192.168.18.64:8000/studentattendance', {
      method: "POST",
      body: JSON.stringify(any),
      headers: {
        'content-type': 'application/json; charset=utf-8',
      }
    })
    .then((response) => response.json())
    .catch(err => {
      console.log(err);

  });
   }
  


  const MarkAttendance=(item,S)=>{
   let std=students
   std[item].attendanc = S
   let newArr = [...std]; // copying the old datas array
   newArr[item].attendanc = S; 
   setStudents(newArr)
    let any = std[item]
  // console.log(any) 
  onSubmit(any);
  
}
// console.log(students[0])

const [ items , setItems ] = useState()

  const tableHeader = () => (

    <View style={styles.tableHeader} >


      {columns.map((column, index) => {{
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

  
    <View  style={{top:10, height: '100%',width:'100%' }} >
      

      <View>
      <View style={{
       flexDirection:'row',
       justifyContent:'space-around',
       margin:19
     }} >
     
     <Text 
     style={{
         fontSize: 18,
         top: 5,
         left:7,
         fontWeight: 'bold'
          }}
     >Filter</Text>
     <View style={{
       width:'90%',
       left:10
     }}>
        <DropDownClassStudents />
        </View>

        


        </View>
      </View>
    
      <FlatList
        data={teachers}
        keyExtractor={(item, index) => index + ""}
        style={{ maxWidth: '100%' }}
        ListHeaderComponent={tableHeader}
        stickyHeaderIndices={[0]}
        extraData={students}
        renderItem={({ item, index }) => {
          return (
        
            <View style={{ ...styles.tableRow, backgroundColor: index % 2 == 1 ? "#F0FBFC" : "white", width: '100%', }}>   
              {/* <Text style={{ ...styles.columnRowTxt, fontWeight: "bold" }}>{item.id}</Text> */}
              <Text style={{ ...styles.columnRowTxt }}>{item.first_name+' '+item.last_name}</Text>
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
                  checked={item.attendanc=='p'?true:false}                    
                  checkedIcon ="dot-circle-o"
                  unCheckedIcon='circle-o'
                  onPress={()=>MarkAttendance(index,'p')}
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
                </View>


                <View style={{left:5,}}>
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
  },
  attendanceContainer:{
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
   
    display: 'flex',
    
    
  },
  submitAttendance:{
    color:'white',
    fontSize:18
  },
  submitAttendance: {
    backgroundColor: 'orange',
    padding:12,
    bottom:12,
    color: 'white',
    fontSize:20,
    borderRadius:10,
  }

});

export default MarkTeacherAttendance