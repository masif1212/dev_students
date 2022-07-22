import React from 'react';

import { View } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

export default function CustomDropdown({searchable ,placeholder, multiple , zIndex, zIndexInverse, open, setOpen, value, items, setValue, setItems}) {


  
  return (
   <View style={{
    marginVertical: 12
   }}>
    <DropDownPicker
         listMode="SCROLLVIEW"
        scrollViewProps={{
          nestedScrollEnabled: true,
        }}
        searchable={searchable}
        zIndex={zIndex}
        zIndexInverse={zIndexInverse}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        containerStyle={{ height: 40, paddingRight: 25,}}
        style={{ backgroundColor: "transparent",
    padding: 15,
    fontSize: 14,
    fontWeight: "400",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    borderWidth: 0,
    marginBottom: 10,
   }}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
        dropDownMaxHeight={300}
        labelStyle={{ fontSize: 13 }}
        theme="LIGHT"
        mode="BADGE"
        closeAfterSelecting={true}
        multiple={multiple}
        placeholder={placeholder}
                // badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
      />
   </View>
      
  );
}