import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const ChangeSectionClass = ({props}) => {

  const navigation = useNavigation()
  return (
    <View>

      {/* add pie here */}

      <View style={{ flexDirection: 'row', top: 10,justifyContent:'center',alignItems:'center' }}>

        <Text style={{
          
        }}>Class : 5th</Text>

        <Text style={{
          left: 25
        }}>Section : A</Text>
        <View style={{
          backgroundColor:'#5062BD',
          borderRadius:7,
          left:40,
      
          
     
        }}>

        <TouchableOpacity onPress={ () => navigation.navigate('ViewFullAttendance')} >
       
          <Text style={{
           
            
            padding: 10,
            color: 'white'
          }}>View full class Attendance</Text>

        </TouchableOpacity>
        </View>

      </View>

    </View>

  )
}

export default ChangeSectionClass

const styles = StyleSheet.create({})