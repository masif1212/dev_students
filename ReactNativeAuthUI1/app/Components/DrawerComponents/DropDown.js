import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";




const DropDown = ({ 
    data = [],
     value = {},
      onSelect = () => {}
     }) => {
  console.log("selected value", value);
  const [showOption,setShowOption] = useState(false)

  const onSelectedItem = (val) => {
      setShowOption(false)
      onSelect(val)
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.DropDownStyle}
       activeOpacity={0.8}
       onPress={() => setShowOption(!showOption)}
       >
        <Text style={{
            color:'white',
            fontSize:20,
            fontWeight:'bold'
        }}> 
        {!!value ? value?.name : "District"}
        </Text>
        <Icon
          style={{
              color:'white',
            transform:[{rotate:showOption?'180deg' : '0deg'}]
          }}
          name="angle-down"
          size={30}
          color="#900"
        />
      </TouchableOpacity>
      {showOption && (
      <View style={{
          justifyContent:'center',
          alignItems:'center'
      }}>
        {data.map((val, i) => {
            return (
            <TouchableOpacity  key={String(i)}
            onPress={()=>onSelectedItem(val)}
            >

        
         <Text style={{
             color:'white',
             padding:3
            
         }}>{val.name}</Text>
          </TouchableOpacity>
          )
        })}
      </View>)}
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({

  DropDownStyle: {
    padding: 8,
    minHeight: 42,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
