import React, {useState, useEffect, useRef} from 'react';
import {View, Text, SafeAreaView, StatusBar, Dimensions, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';
const {width} = Dimensions.get('window');
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import  SearchableDropdown from 'react-native-searchable-dropdown';
import { useSelector } from 'react-redux';
import { useGetStudentQuery } from '../../../services/userAuthApi';

// import StudentList from './StudentList';
// import Hello from './Hello';


const ClassSectionFilter = () => {
  const navigation = useNavigation();
 
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
      name: 'D '
    }
   
  ];
 

  const [ classes, setClasses ] = useState({})
  const [ section, setSections ] = useState({})
  const [student, setStudent] = useState({})
  

  useEffect(() => {
    console.log(classes.name)
    console.log(section.name)
  })

  const {data} = useGetStudentQuery();

  useEffect(() => {
    setStudent(data);
   
  });



  return (
    <View style={styles.container}>

  <SearchableDropdown
			onTextChange={(text) =>  setClasses(text)}
			onItemSelect={(item) =>  setClasses(item)}
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
			items={items}
			placeholder="Placeholder."
			resetValue={false}
			underlineColorAndroid='transparent' />

<SearchableDropdown
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
			placeholder="Placeholder."
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
            <View style={{
              backgroundColor: '#5062BD',
              borderRadius: 7,
              left: 40




            }}>

              <TouchableOpacity onPress={() => navigation.navigate('ViewFullAttendance')} >

                <Text style={{


                  padding: 10,
                  color: 'white'
                }}>View full class Attendance</Text>

              </TouchableOpacity>
            </View>

          </View>
        </View>


      </View>

      <Divider borderWidth={0.2} width={'100%'} margin={5} />





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
});
export default ClassSectionFilter