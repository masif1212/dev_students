// import React, {useState, useEffect, useRef} from 'react';
// import {View, Text, SafeAreaView, StatusBar, Dimensions, StyleSheet, ScrollView} from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// const {width} = Dimensions.get('window');
// import SelectDropdown from 'react-native-select-dropdown';

// export default DropDownClassStudents = () => {
//   const [class, setClass] = useState([]);
//   const [section, setSection] = useState([]);

//   const sectionDropdownRef = useRef();

//   useEffect(() => {
//     setTimeout(() => {
//       setClass([
//         {title: 'Class 1', cities: [{title: 'A'}, {title: 'B'}]},
//         {title: 'Class 2', cities: [{title: 'C'}, {title: 'D'}]},
//         {title: 'Class 3', cities: [{title: 'E'}, {title: 'F'}]},
//         {title: 'Class 4', cities: [{title: 'H'}, {title: 'G'}]},
//       ]);
//     }, 1000);
//   }, []);



//   return (

//           <View style={styles.dropdownsRow}>
//             <SelectDropdown
//               data={class}
//               onSelect={(selectedItem, index) => {
//                 console.log(selectedItem, index);
//                 sectionDropdownRef.current.reset();
//                 setSection([]);
//                 setSection(selectedItem.section);
//               }}
//               defaultButtonText={'Select Class'}
//               buttonTextAfterSelection={(selectedItem, index) => {
//                 return selectedItem.title;
//               }}
//               rowTextForSelection={(item, index) => {
//                 return item.title;
//               }}
//               buttonStyle={styles.dropdown1BtnStyle}
//               buttonTextStyle={styles.dropdown1BtnTxtStyle}
//               renderDropdownIcon={isOpened => {
//                 return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
//               }}
//               dropdownIconPosition={'right'}
//               dropdownStyle={styles.dropdown1DropdownStyle}
//               rowStyle={styles.dropdown1RowStyle}
//               rowTextStyle={styles.dropdown1RowTxtStyle}
//             />
//             <View style={styles.divider} />
//             <SelectDropdown
//               ref={sectionDropdownRef}
//               data={section}
//               onSelect={(selectedItem, index) => {
//                 console.log(selectedItem, index);
//               }}
//               defaultButtonText={'Select Section'}
//               buttonTextAfterSelection={(selectedItem, index) => {
//                 return selectedItem.title;
//               }}
//               rowTextForSelection={(item, index) => {
//                 return item.title;
//               }}
//               buttonStyle={styles.dropdown2BtnStyle}
//               buttonTextStyle={styles.dropdown2BtnTxtStyle}
//               renderDropdownIcon={isOpened => {
//                 return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
//               }}
//               dropdownIconPosition={'right'}
//               dropdownStyle={styles.dropdown2DropdownStyle}
//               rowStyle={styles.dropdown2RowStyle}
//               rowTextStyle={styles.dropdown2RowTxtStyle}
//             />
//           </View>
 
//   );
// };

// const styles = StyleSheet.create({
//   shadow: {
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 6},
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 10,
//   },
//   header: {
//     flexDirection: 'row',
//     width,
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#F6F6F6',
//   },
//   headerTitle: {color: '#000', fontWeight: 'bold', fontSize: 16},
//   saveAreaViewContainer: {flex: 1, backgroundColor: '#FFF'},
//   viewContainer: {flex: 1, width, backgroundColor: '#FFF'},
//   scrollViewContainer: {
//     flexGrow: 1,
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: '10%',
//   },
//   dropdownsRow: {flexDirection: 'row', width: '100%', paddingHorizontal: '5%'},

//   dropdown1BtnStyle: {
//     flex: 1,
//     height: 40,
//     backgroundColor: '#FFF',
//     borderRadius: 8,
//     borderWidth: 0.5,
//     borderColor: '#444',
//   },
//   dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left',fontSize:15},
//   dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
//   dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
//   dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
//   divider: {width: 12},
//   dropdown2BtnStyle: {
//     flex: 1,
//     height: 40,
//     backgroundColor: '#FFF',
//     borderRadius: 8,
//     borderWidth: 0.5,
//     borderColor: '#444',
//   },
//   dropdown2BtnTxtStyle: {color: '#444', textAlign: 'left',fontSize:15},
//   dropdown2DropdownStyle: {backgroundColor: '#EFEFEF'},
//   dropdown2RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
//   dropdown2RowTxtStyle: {color: '#444', textAlign: 'left'},
// });

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DropDownClassStudents = () => {
  return (
    <View>
      <Text>DropDownClassStudents</Text>
    </View>
  )
}

export default DropDownClassStudents

const styles = StyleSheet.create({})