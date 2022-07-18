import React from 'react';

import { View } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

export default function CustomDropdown({zIndex, zIndexInverse, open, setOpen, value, items, setValue, setItems}) {


  
  return (
   <View style={{
    marginVertical: 12
   }}>
    <DropDownPicker
         listMode="SCROLLVIEW"
        scrollViewProps={{
          nestedScrollEnabled: true,
        }}
        searchable={true}
        zIndex={zIndex}
        zIndexInverse={zIndexInverse}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        containerStyle={{ height: 40, paddingRight: 25}}
        style={{ backgroundColor: '#ffffff',  }}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
        dropDownMaxHeight={300}
        labelStyle={{ fontSize: 13 }}
        theme="LIGHT"
        mode="SIMPLE"
        closeAfterSelecting={true}
                // badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
      />
   </View>
      
  );
}