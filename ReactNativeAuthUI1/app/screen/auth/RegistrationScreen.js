import {
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles, toastConfig } from "../../../style";
import Toast from "react-native-toast-message";
import Checkbox from "expo-checkbox";
import { useRegisterUserMutation } from "../../../services/userAuthApi";
import { storeToken } from "../../../services/AsyncStorageService";
import Icon from "react-native-vector-icons/AntDesign";
import * as ImagePicker from "expo-image-picker";

const RegistrationScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [contact, setContact] = useState("");
  const [alt_contact, setAlt_Contact] = useState("");
  const [address_1, setAdress_1] = useState("");
  const [address_2, setAdress_2] = useState("");
  const [CNIC, setCNIC] = useState("");
  const [city, setCity] = useState("");
  const [image, setImage] = useState();
  const [tc, setTc] = useState(false);

  const clearTextInput = () => {
    setFirstName("");
    setLastName("");
    setPassword("");
    setPassword_confirmation("");
    setContact("");
    setAlt_Contact("");
    setAdress_1("");
    setAdress_2("");
    setCNIC("");
    setCity("");
    setImage("");
    setTc(false);
  };
  const navigation = useNavigation();

  const [registerUser] = useRegisterUserMutation();

  const handleFormSubmit = async () => {
    if (firstName && email && password && password_confirmation && tc) {
      if (password === password_confirmation) {
        const formData = {
          firstName,
          lastName,
          email,
          password,
          password_confirmation,
          contact,
          image,
          alt_contact,
          address_1,
          address_2,
          CNIC,
          city,
          tc,
        };
        const res = await registerUser(formData);
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
          text1: "Password and Confirm Password doesn't match",
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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#ffffff"}}>
      <View style={styleOne.buttonContainer}>
        <View style={styleOne.buttonStyle}>
          <TouchableOpacity onPress={pickImage}>
            <Icon
              style={{
                marginRight: 12,
                position: "absolute",
                left: 60,
                bottom: 30,
                color: "green",
              }}
              name="pluscircle"
              color="#c9c9c9"
              size={14}
            />
            {image ? (
              <Image
                source={{ uri: image }}
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
            ) : (
              <Text>Add Photo</Text>
            )}
          </TouchableOpacity>
        </View>
        <Toast config={toastConfig} />
      </View>

      <ScrollView keyboardShouldPersistTaps="handled" style={{ height: '100%' }}>
        <View style={{ marginLeft: 25 }}>
          <View>
            <TextInput
              style={styleOne.input}
              value={firstName}
              onChangeText={setFirstName}
              placeholder="Write Your First Name"
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={lastName}
              onChangeText={setLastName}
              placeholder="Write Your Last Name"
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              placeholder="Write Your Email"
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Write Your Password"
              secureTextEntry={true}
              keyboardType={"default"}
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={password_confirmation}
              onChangeText={setPassword_confirmation}
              placeholder="Write Your Confirm Password"
              secureTextEntry={true}
              keyboardType={"default"}
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={contact}
              onChangeText={setContact}
              placeholder="Contact"
              keyboardType="numeric"
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={alt_contact}
              onChangeText={setAlt_Contact}
              placeholder="Emergency Contact"
              keyboardType="numeric"
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={address_1}
              onChangeText={setAdress_1}
              placeholder="Address 1"
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={address_2}
              onChangeText={setAdress_2}
              placeholder="Address 2"
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={CNIC}
              onChangeText={setCNIC}
              placeholder="CNIC (XXXXX-XXXXXXX-X)"
              keyboardType="phone-pad"
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={city}
              onChangeText={setCity}
              placeholder="City"
            />
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Checkbox
              value={tc}
              onValueChange={setTc}
              color={tc ? "#5062BD" : undefined}
            />
            <Text style={styles.labelText}>I agree to term and condition.</Text>
          </View>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            onPress={handleFormSubmit}
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 15,
              width: "90%",
              borderRadius: 50,
              marginBottom: 10,
              fontWeight: "bold",
              backgroundColor: "#5062BD",
              elevation: 1,
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
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{
          alignItems: 'flex-end',
          marginRight: 25
        }}>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("AdminLogin");
            }}
          >
            <Text style={{ fontWeight: "bold", paddingBottom: 50, color: 'gray' }}>
              Already Registered ? Login
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styleOne = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    margin: 0,
  },
  card: {
    backgroundColor: "#ffffff",
    borderBottomRightRadius: 76,
    paddingVertical: 50,
    paddingHorizontal: 25,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  buttonContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 10,
    color: "#5062BD",
  },
  cardContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  buttonStyle: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    borderColor: "#5062BD",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 50,
    marginTop: 20,
  },

  constainerStyle: {
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 0,
    width: "90%",
    fontWeight: "bold",
    backgroundColor: "transparent",
    elevation: 0,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  input: {
    backgroundColor: "transparent",
    width: "90%",
    padding: 15,
    fontSize: 14,
    fontWeight: "400",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});

export default RegistrationScreen;
