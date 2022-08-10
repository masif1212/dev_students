import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL =150;
 
const SimpleModal = ({onPressYes, onPressNo, text}) => {

  

  return (
    <TouchableOpacity
    disabled={true}
    style={styles.container}>

    <View style={styles.modal}>
        <View style={styles.textView}>
           <Text style={[styles.text, {fontSize:20}]}>{text}</Text>
        </View>
        <View style={styles.buttonsView}>
           <TouchableOpacity style={styles.touchableOpacity} onPress={onPressYes} >
              <Text style={[styles.text, {color:'blue'}]} >Yes</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.touchableOpacity} onPress={onPressNo}>
              <Text style={[styles.text, {color:'blue'}]}>No</Text>
           </TouchableOpacity>
        </View>
    </View>
    </TouchableOpacity>
  )
}

export default SimpleModal

const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    modal: {
        height: HEIGHT_MODAL,
        width:WIDTH-70,
        paddingTop:10,
        backgroundColor:'white',
        borderRadius:10,
        elevation:20,
    },
    textView:{
     flex:1,
     alignItems:'center',

    },
    text:{
      margin:14,
      fontSize:16,
      fontWeight:'bold'
    }, 
    buttonsView:{
        width:'100%',
        flexDirection:'row'

    },
    touchableOpacity:{
        flex:1,
        paddingVertical:10,
        alignItems:'center'

    }
})