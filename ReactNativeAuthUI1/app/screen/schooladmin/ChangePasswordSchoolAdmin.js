import { View, Text, Button,TouchableOpacity,StyleSheet, TextInput, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles, toastConfig } from '../../../style';
import Toast from 'react-native-toast-message';
import { useChangeUserPasswordMutation } from '../../../services/userAuthApi';
import { getToken } from '../../../services/AsyncStorageService'
import { useSelector } from 'react-redux';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTogglePasswordVisibility } from "../hooks/useTogglePasswordVisibility";
import { useToggleConfPasswordVisibility } from "../hooks/useToggleConfPasswordVisibility";


const ChangePasswordSchoolAdmin = () => {
  const [new_password, setPassword] = useState("")
  const [conf_new_password, setPassword_confirmation] = useState("")
  const [ old_password, setOldPassword] = useState("");
  const [ id, setId] = useState("");
  const table = "schooladmin"
  const [userLToken, setUserLToken] = useState()

  
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const { ConfpasswordVisibility, righticon, handleConfPasswordVisibility } =
    useToggleConfPasswordVisibility();


  const clearTextInput = () => {
    setPassword('')
    setPassword_confirmation('')
    setOldPassword('')
  }

  const [changeUserPassword] = useChangeUserPasswordMutation()
  const myData = useSelector(state => state.schoolAdmin)

  useEffect(() => {
    (async () => {
      const token = await getToken() // Getting Token from Storage
      setId(myData.schoolAdminiId)
      setUserLToken(token)          // Store Token in Local State
    })();
  })

  const handleFormSubmit = async () => {
    if (new_password && conf_new_password) {
      if (new_password === conf_new_password) {
        const formdata = { id, new_password, conf_new_password, old_password, table }
        const res = await changeUserPassword({ formdata, userLToken })
        if (res.data.type === "success") {
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
          text1: "New Password and Confirm Password doesn't match"
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
    
<>
<Toast config={toastConfig} />
      <View style={{ marginTop: 30}} keyboardShouldPersistTaps='handled'>
        <View style={styleOne.container}>
        <View style={{ flexDirection: "row" }}>
            <TextInput
              style={styleOne.input}
              value={old_password}
              onChangeText={setOldPassword}
              placeholder="Write Your Old Password"
              placeholderTextColor="gray"
              secureTextEntry={ConfpasswordVisibility}
            />
             <Pressable
              style={{ marginTop: 23, right: 25 }}
              onPress={handleConfPasswordVisibility}
            >
              <MaterialCommunityIcons name={righticon} size={18} color="gray" />
            </Pressable>
          </View>

          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={styleOne.input}
              value={new_password}
              onChangeText={setPassword}
              placeholder="Write Your New Password"
              placeholderTextColor="gray"
              secureTextEntry={passwordVisibility}
            />
            <Pressable
              style={{ marginTop: 23, right: 25 }}
              onPress={handlePasswordVisibility}
            >
              <MaterialCommunityIcons style={{ zIndex: 99}} name={rightIcon} size={18} color="gray" />
            </Pressable>
          </View>
          <View style={[styles.inputWithLabel, { flexDirection: "row" }]}>
            <TextInput
              style={styleOne.input}
              value={conf_new_password}
              onChangeText={setPassword_confirmation}
              placeholder="Write Your New Confirm Password"
              placeholderTextColor="gray"
              secureTextEntry={passwordVisibility}
            />
            <Pressable
              style={{ marginTop: 23, right: 25 }}
              onPress={handlePasswordVisibility}
            >
              <MaterialCommunityIcons name={rightIcon} size={18} color="gray" />
            </Pressable>
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
      </>
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
export default ChangePasswordSchoolAdmin