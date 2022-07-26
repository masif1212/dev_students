import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const RadioButton = ({options=[] , horizontal = false, onChangeSelect, gender}) => {
  return (
    <View style={horizontal ? styles.horizontal : styles.vertical}>
    {
        options.map((opt, index) => (
            <TouchableOpacity 
            onPress={()=> onChangeSelect(opt, index )} 
            style={[styles.optContainer,{marginLeft: horizontal ? 10 : 0, marginTop : horizontal ? 0 : 10}]}>
            <View style={styles.outlinecircle}>
              {gender === opt  &&  <View style={styles.innerCircle}/>}
            </View>
            <Text style={[styles.txt, {color : gender === opt ? '#444':  '#777'}]}>{opt}</Text>

            </TouchableOpacity>
        ))
    }
    </View>
  )
}

export default RadioButton

const styles = StyleSheet.create({
    horizontal :{
        flexDirection : 'row',
        alignItems : 'center',

    },

    optContainer :{
        flexDirection : 'row',
        alignItems : 'center',

    },
    outlinecircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: '#777',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',

    }, 
    innerCircle:{
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: '#444',
    },
    txt :{
        fontSize: 14,
        marginLeft: 7,      
    }
})