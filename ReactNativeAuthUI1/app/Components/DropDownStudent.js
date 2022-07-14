import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'



const DropDownStudent = ({ data = [], value = {}, onSelect = () => { }}) => {
    const [showOption, setShowOption] = useState(false)

    const onSelectedItem  =(val) =>{
        setShowOption(false)
        onSelect(val)
    }

    return (
        <View >
            <TouchableOpacity  style={styles.DropDownStyle} activeOpacity={0.8} onPress={()=>setShowOption(!showOption)}>
                {/* if value is null show false if value is value then show values.currentshift or if not show choose */}
                <Text style={{color:'grey'}}>{!!value ? value?.currentshift : `Select Shift`}</Text>
                <Image source={require('../../assets/images/DrawerIcons/drop.png')} style={{transform:[{rotate: showOption? '180deg' :'0deg'}]}} />

            </TouchableOpacity>
            {showOption && (<View>
                {data.map((val, index) => {
                    return (
                        <TouchableOpacity key={String(index)} onPress={()=>onSelectedItem(val)} style={{
                            backgroundColor: '#5062BD',
                            paddingVertical: 10,
                            borderRadius: 6,
                            paddingHorizontal: 6,
                            marginBottom: 1,
                            width: '90%'
                        }}> 
                        <Text style={{color: '#ffffff'}}>{val.currentshift}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>)}

        </View>
    )
}

export default DropDownStudent

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
    }
})