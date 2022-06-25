import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";




const DropDownSchoolAdmin = ({ 
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
            color:'gray',
            fontSize:15,
      
        }}>   {!!value ? value?.name : "District"}
        
        </Text>
        <Icon
          style={{
              marginLeft:10,
              color:'black',
            transform:[{rotate:showOption?'180deg' : '0deg'}]
          }}
          name="angle-down"
          size={15}
          color="#900"
        />
      </TouchableOpacity>
      {showOption && (
      <View style={{
          justifyContent:'center',
          alignItems:'center',
          
        
      }}>
        {data.map((val, i) => {
            return (
            <TouchableOpacity  key={String(i)}
            onPress={()=>onSelectedItem(val)}
            >

        
         <Text style={{
             color:'black',
             padding:3
            
         }}>{val.name}</Text>
          </TouchableOpacity>
          )
        })}
      </View>)}
    </View>
  );
};

export default DropDownSchoolAdmin;

const styles = StyleSheet.create({
    container:{
        alignSelf: "flex-start",
    },

  DropDownStyle: {
    padding: 3,
    minHeight: 42,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
