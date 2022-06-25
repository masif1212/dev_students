// import React, { useState, useEffect } from "react";
 
// import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
 
// import MultiSelect from 'react-native-multiple-select';
 
// export default function DropDownSuperAdmin() {
 
//   const DATA = [
//     { id: 1, name: 'Punjab' },
//     { id: 2, name: 'Sindh' },
//     { id: 3, name: 'KPK' },
//     { id: 4, name: 'Balochistan' },

//   ];
 
//   const [selectedItems, setSelectedItems] = useState([]);
 
//   const onSelectedItemsChange = (selectedItems) => {
 
//     setSelectedItems(selectedItems);
 
//     for (let i = 0; i < selectedItems.length; i++) {
//       var tempItem = DATA.find(item => item.id === selectedItems[i]);
//       console.log(tempItem);
//     }
 
//   };
 
//   // If you want to render MultiSelect from JSON then below code will help you.
//   // const [serverData, setServerData] = useState([]);
//   // useEffect(() => {
//   //   fetch('YOUR API URL')
//   //     .then((response) => response.json())
//   //     .then((responseJson) => {
//   //       //Successful response from the API Call
//   //       setServerData(responseJson.results);
//   //     })
//   //     .catch((error) => {
//   //       console.error(error);
//   //     });
//   // }, []);
 
 
//   return (

//       <View style={styleSheet.MainContainer}>
 
 
 
//         <MultiSelect
//           hideTags
//           items={DATA}
//           uniqueKey="id"
//           onSelectedItemsChange={onSelectedItemsChange}
//           selectedItems={selectedItems}
//           selectText="Select Province"
//           searchInputPlaceholderText="Search Items Here..."
//           onChangeInput={(text) => console.log(text)}
//           tagRemoveIconColor="#CCC"
//           tagBorderColor="#CCC"
//           tagTextColor="#CCC"
//           selectedItemTextColor="#CCC"
//           selectedItemIconColor="#CCC"
//           itemTextColor="#000"
//           displayKey="name"
//           searchInputStyle={{ color: '#CCC' }}
//           submitButtonColor="#00BFA5"
//           submitButtonText="Submit"
//         />
//         </View>
     

 
 
 

//   );
// }
 
// const styleSheet = StyleSheet.create({
 
//   MainContainer: {
//     position:'absolute',
//     padding: 12,
//     backgroundColor: 'white',

//   },
 
//   text: {
//     padding: 12,
//     fontSize: 22,
//     textAlign: 'center',
//     fontWeight: 'bold',
//     color: 'black'
//   }
 
// });


import React, {useState, useEffect, useRef} from 'react';
import {View, Text, SafeAreaView, StatusBar, Dimensions, StyleSheet, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const {width} = Dimensions.get('window');
import SelectDropdown from 'react-native-select-dropdown';

export default DropDownUserType = () => {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  const citiesDropdownRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setCountries([
        {title: '1', cities: [{title: 'Lahore'}, {title: 'Okara'}]},
        {title: '2', cities: [{title: 'Karachi'}, {title: 'Gambat'}]},

      ]);
    }, 1000);
  }, []);



  return (

          <View style={styles.dropdownsRow}>
            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
         
              }}
              
              defaultButtonText={'User Type'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem.title;
              }}
              rowTextForSelection={(item, index) => {
                return item.title;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            />
           
          </View>
 
  );
};

const styles = StyleSheet.create({
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
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#444',
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
  divider: {width: 12},
  dropdown2BtnStyle: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#444',
  },
  dropdown2BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown2DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown2RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown2RowTxtStyle: {color: '#444', textAlign: 'left'},
});

