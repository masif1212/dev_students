import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Button, Icon } from '@rneui/themed';
import Pie from '../TeachersListPieChart/TeachersListPieChart'

const TeachersListCustomCard = ({title,backgroundColor,color}) => {
    let bgColor= backgroundColor;
    let fontColor= color
    return (
        <View >
            <Card containerStyle={[{ marginTop: 10, borderRadius: 20},  { backgroundColor: bgColor }, bgColor ? { backgroundColor: bgColor } : {}]}>
                <Card.Title style={[{ right: 70, fontSize:18},{color:fontColor}, fontColor ? {color:fontColor} : {}]}>{title}</Card.Title>
                <View style={{  }}>
                    <View style={{ left: 60}}>
                        <Pie outerRadius= "100%"/>
                    </View>

                    <View>
                          <View style={{ flexDirection: 'row', }}>
                                 <View style={{ width: 40, height: 15, backgroundColor: '#D2F790' }} />
                                     <Text style={[{left: 5, bottom: 2, fontWeight: 'bold'},{color:fontColor}, fontColor ? {color:fontColor} : {}]}>Present (%) </Text>
                          </View>

                           <View style={{flexDirection:'row', }}>
                                 <View style={{ width: 40, height: 15, backgroundColor: '#A4C3DA' }} />
                                 <Text style={[{ left: 5, bottom: 2, fontWeight: 'bold'},{color:fontColor}, fontColor ? {color:fontColor} : {}]} >Absent  (%) </Text>
                           </View>
                           
                           <View style={{flexDirection:'row', }}>
                                 <View style={{ width: 40, height: 15, backgroundColor: 'gray' }} />
                                 <Text style={[{ left: 5, bottom: 2, fontWeight: 'bold'},{color:fontColor}, fontColor ? {color:fontColor} : {}]} >Leave  (%) </Text>
                           </View>
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default TeachersListCustomCard

const styles = StyleSheet.create({})