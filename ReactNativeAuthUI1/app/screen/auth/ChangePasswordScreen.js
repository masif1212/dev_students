import { View, Text, Button,TouchableOpacity,StyleSheet, TextInput, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles, toastConfig } from '../../../style';
import Toast from 'react-native-toast-message';
import { useChangeUserPasswordMutation } from '../../../services/userAuthApi';
import { getToken } from '../../../services/AsyncStorageService'

const ChangePasswordScreen = () => {
  const [password, setPassword] = useState("")
  const [password_confirmation, setPassword_confirmation] = useState("")
  const [userLToken, setUserLToken] = useState()

  const clearTextInput = () => {
    setPassword('')
    setPassword_confirmation('')
  }

  const [changeUserPassword] = useChangeUserPasswordMutation()

  useEffect(() => {
    (async () => {
      const token = await getToken() // Getting Token from Storage
      setUserLToken(token)          // Store Token in Local State
    })();
  })

  const handleFormSubmit = async () => {
    if (password && password_confirmation) {
      if (password === password_confirmation) {
        const formdata = { password, password_confirmation }
        const res = await changeUserPassword({ formdata, userLToken })
        console.log(res)
        if (res.data.status === "success") {
          clearTextInput()
          Toast.show({
            type: 'done',
            position: 'top',
            topOffset: 0,
            text1: 'Password Changed Successfully'
          });
        }
        if (res.data.status === "failed") {
          Toast.show({
            type: 'warning',
            position: 'top',
            topOffset: 0,
            text1: res.data.message
          });
        }
      } else {
        Toast.show({
          type: 'warning',
          position: 'top',
          topOffset: 0,
          text1: "New Password and Confirm New Password doesn't match"
        });
      }
    } else {
      Toast.show({
        type: 'warning',
        position: 'top',
        topOffset: 0,
        text1: 'All Fields are Required'
      });
    }
  }
  return (
    

      <View style={{ marginTop: 30}} keyboardShouldPersistTaps='handled'>
      <View>
          <Toast config={toastConfig} />
          </View>

        <View style={styleOne.container}>

          <View>
            <TextInput
              style={styleOne.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Write Your New Password"
              placeholderTextColor="gray"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.inputWithLabel}>
            <TextInput
              style={styleOne.input}
              value={password_confirmation}
              onChangeText={setPassword_confirmation}
              placeholder="Write Your New Confirm Password"
              placeholderTextColor="gray"
              secureTextEntry={true}
            />
          </View>
          <View style={{ width: 200, alignSelf: 'center', margin: 10 }}>
            {/* <Button title="Save" onPress={handleFormSubmit} color='purple' /> */}
            <TouchableOpacity
              onPress={handleFormSubmit}
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: 15,
                marginVertical: 5,
                borderRadius: 50,
                fontWeight: "bold",
                backgroundColor: "#5062BD",
                elevation: 1,
              }}
            >
              <Text
                style={{
                  color: "white",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>
  )
}


const styleOne = StyleSheet.create({
  input: {
    backgroundColor: "transparent",
    width: "90%",
    padding: 15,
    fontSize: 14,
    fontWeight: "400",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 10,
    marginLeft: 20
  },
 
});
export default ChangePasswordScreen