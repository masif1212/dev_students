import { View, Text, Button, TextInput,StyleSheet,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { styles, toastConfig } from '../../../style';
import { useSendPasswordResetEmailMutation } from '../../../services/userAuthApi';

const SendPasswordResetEmailScreen = () => {
  const [email, setEmail] = useState("")
  const clearTextInput = () => {
    setEmail('')
  }
  const [sendPasswordResetEmail] = useSendPasswordResetEmailMutation();

  const handleFormSubmit = async () => {
    if (email) {
      const formdata = { email }
      const res = await sendPasswordResetEmail(formdata)
      if (res.data.status === "success") {
        clearTextInput()
        Toast.show({
          type: 'done',
          position: 'top',
          topOffset: 0,
          text1: "Password Reset Email Sent. Please Check Your Email..."
        });
      }
      if (res.data.status === "failed") {
        clearTextInput()
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
        text1: "Email is required"
      });
    }
  }
  return (
    <SafeAreaView>
      <Toast config={toastConfig} />


      <View style={{ marginHorizontal: 30, marginVertical: 200 }}>

        <View style={styles.inputWithLabel}>
          <TextInput
            style={styleOne.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Write Your Email to Verify"
            placeholderTextColor="gray"
            keyboardType='email-address'
          />
        </View>

              <View >
          <TouchableOpacity
                onPress={handleFormSubmit}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 15,
                  width: "100%",
                  marginVertical: 5,
                  borderRadius: 50,
                  marginBottom: 80,
                  fontWeight: "bold",
                  backgroundColor: "#5062BD",
                  elevation: 4,
                  marginTop: 50,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                 >
                  Send
                </Text>
              </TouchableOpacity>
          </View>

      </View>
    </SafeAreaView>
  )
}


const styleOne = StyleSheet.create({

  input : {
    backgroundColor: "transparent",
    width: '100%',
    padding: 15,
    fontSize: 14,
    fontWeight: "400",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 10,
    color: "#5062BD",
  },
  card: {
    
    backgroundColor: "#ffffff",
    borderBottomRightRadius: 76,
    paddingVertical: 80,
    paddingHorizontal: 25,
    // width: '100%',
    elevation: 4,
    marginVertical: 10,
    
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    bottom:80
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "center",
  },

})

export default SendPasswordResetEmailScreen