import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'



const DropDownCountry = ({ data = [], value = {}, onSelectCountry = () => { } }) => {
    const [showOption, setShowOption] = useState(false)

    const onSelectedItem = (val) => {
        setShowOption(false)
        onSelectCountry(val)

    }

    return (
        <View style= {{flex: 1}}>
            <TouchableOpacity style={styles.DropDownStyle} activeOpacity={0.8} onPress={() => setShowOption(!showOption)}>
                {/* if value is null show false if value is value then show values.currentshift or if not show choose */}
                <Text style={{ color: 'grey' }}>{!!value ? value?.items : `Select your Nationality`}</Text>
                <Image source={require('../../assets/images/DrawerIcons/drop.png')} style={{ transform: [{ rotate: showOption ? '180deg' : '0deg' }] }} />

            </TouchableOpacity>
            
            {showOption && (<View style={{
                backgroundColor:'orange',
                borderRadius: 6,
                padding: 3,
                maxHeight: 120 ,
            }}>

                    <ScrollView>
                    {data.map((val, index) => {
                        return (

                            <TouchableOpacity key={String(index)} onPress={() => onSelectedItem(val)} style={{
                                ...styles.selectedItemStyle,
                                backgroundColor: value.id == val.id ? '#5062BD' : 'white',
                              
                            }}>
                                <Text style={{ color: '#ffffff' }}>{val.items}</Text>
                            </TouchableOpacity>

                        )
                    })}
                    </ScrollView>
                    
            </View>)}

        </View>
    )
}

export default DropDownCountry

const styles = StyleSheet.create({
    DropDownStyle: {
        backgroundColor: "#E2E2E8",
        padding: 6,
        borderRadius: 6,
        minHeight: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
        width: '90%'
    },
    selectedItemStyle: {
        paddingVertical: 10,
        borderRadius: 6,
        paddingHorizontal: 6,
        marginBottom: 1,
        width: '90%'
    }
})