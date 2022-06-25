import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles, toastConfig } from "../../../style";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import { useLoginUserMutation } from "../../../services/userAuthApi";
import { storeToken } from "../../../services/AsyncStorageService";

const UserLoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clearTextInput = () => {
    setEmail("");
    setPassword("");
  };

  const [loginUser] = useLoginUserMutation();

  const handleFormSubmit = async () => {
    if (email && password) {
      const formData = { email, password };
      const res = await loginUser(formData);
      if (res.data.status === "success") {
        await storeToken(res.data.token); // Store Token in Storage
        clearTextInput();
        navigation.navigate("UserPanelTab");
      }
      if (res.data.status === "failed") {
        Toast.show({
          type: "warning",
          position: "top",
          topOffset: 0,
          text1: res.data.message,
        });
      }
    } else {
      Toast.show({
        type: "warning",
        position: "top",
        topOffset: 0,
        text1: "All fields are Required",
      });
    }
  };

  return (
    <SafeAreaView>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styleOne.card}>
          <View>
            <Text style={styleOne.heading}>Welcome</Text>
          </View>

          <Text style={{ fontWeight: "bold" }}>Sign in and get started</Text>
        </View>
        <View style={{ height: 20}}>
        <Toast config={toastConfig} />
        </View>
        <View style={{ marginHorizontal: 30 }}>
          <View style={styles.inputWithLabel}>
            <TextInput
              style={styleOne.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Write Your Email"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputWithLabel}>
            <TextInput
              style={styleOne.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Write Your Password"
              secureTextEntry={true}
            />
          </View>

          <View>
            <TouchableOpacity
              onPress={handleFormSubmit}
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: 15,
                width: "100%",
                marginVertical: 5,
                borderRadius: 50,
                marginBottom: 60,
                fontWeight: "bold",
                backgroundColor: "#5062BD",
                elevation: 1,
                marginTop: 30,
              }}
            >
              <Text
                style={{
                  color: "white",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <View style={{ flex: 1, marginBottom: 20 }}>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate("SendPasswordResetEmail");
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Forgot Password</Text>
              </TouchableWithoutFeedback>
            </View>

         
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styleOne = StyleSheet.create({
  input: {
    backgroundColor: "transparent",
    width: "100%",
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

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    bottom: 40,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "center",
  },
});

export default UserLoginScreen;
