import {
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Pressable
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles, toastConfig } from "../../../style.js";
import Toast from "react-native-toast-message";
import Checkbox from "expo-checkbox";
import { useRegisterUserMutation } from "../../../services/userAuthApi.js";
import { storeToken } from "../../../services/AsyncStorageService.js";
import Icon from "react-native-vector-icons/AntDesign";
import * as ImagePicker from "expo-image-picker";
import RadioButton from '../../Components/RadioButton.js'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from "moment";
import * as DocumentPicker from 'expo-document-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from '../hooks/useTogglePasswordVisibility';
import { useToggleConfPasswordVisibility } from '../hooks/useToggleConfPasswordVisibility';



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
  const [gender, setGender] = useState("")
  const [disability, setDisability] = useState(false)
  const [disabledetail, setDisableDetail] = useState("")
  const [dateofbirth, setDateOfBirth] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("")

  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
  useTogglePasswordVisibility();

  const { ConfpasswordVisibility, righticon, handleConfPasswordVisibility } =
  useToggleConfPasswordVisibility();
//country state city api==========================//

//=========================================================================//

  const showDatePicker = () => {
    setDatePickerVisibility(true);


  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);

  };

  const handleConfirm = (dateofbirth) => {
    setDateOfBirth(moment(dateofbirth).utc().format('YYYY-MM-DD'));
    hideDatePicker();
    searchFilter(dateofbirth)
  };

  const getDate = () => {
    let tempDate = (moment(dateofbirth).toString().split(' '));
    return dateofbirth !== ''
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : false;

  };



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
    setGender("");
    setDisability(false);
    setDisableDetail("");
    setDateOfBirth("")
  };
  const navigation = useNavigation();

  const [registerUser] = useRegisterUserMutation();



  const handleFormSubmit = async () => {
    if (firstName && email && password && password_confirmation && tc) {
      if (password === password_confirmation) {
        let formData = new FormData()
       
          formData.append('firstName', firstName)
          formData.append('lastName', lastName)
          formData.append('email', email)
          formData.append('password', password)
          formData.append('password_confirmation', password_confirmation)
          formData.append('contact', contact)
          formData.append('image', image)
          formData.append('alt_contact', alt_contact)
          formData.append('address_1', address_1)
          formData.append('address_2', address_2)
          formData.append('CNIC', CNIC)
          formData.append('city', city)
          formData.append('tc', tc)
          formData.append('gender', gender)
          formData.append('disability', disability)
          formData.append('disabledetail', disabledetail)
          formData.append('dateofbirth', dateofbirth)
          
        const res = await registerUser(formData);
        console.log(formData)
        console.log(res)

        if(res.data){
          if (res.data.type === "success") {
            clearTextInput()
            setMessage(res.data.message)
            { setTimeout(()=>{ navigation.goBack() }, 1000);}
          }} else if (res.error) {
          if(res.error.data.type === "error") {
            console.log(res.error.data.message)
            console.log('hello')
  
            Toast.show({
              type: "warning",
              position: "top",
              topOffset: 0,
              text1: res.error.data.message,
            });
          }
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
    let result = await DocumentPicker.getDocumentAsync({});
    setImage(result)
    console.log(result)
  };

  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#ffffff" }}>
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
                source={{ uri: image.uri }}
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
            ) : (
              <Text>Add Photo</Text>
            )}
          </TouchableOpacity>
        </View>
        <Toast config={toastConfig} />
      </View>
      <Text>{ message ? <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'green', marginLeft: 20}}>{message}</Text> : null}</Text>

      <ScrollView keyboardShouldPersistTaps="handled" style={{ height: '100%' }}>
        <View style={{ marginLeft: 25 }}>
          <View>
            <TextInput
              style={styleOne.input}
              value={firstName}
              onChangeText={setFirstName}
              placeholder="Write Your First Name"
              placeholderTextColor='gray'
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={lastName}
              onChangeText={setLastName}
              placeholder="Write Your Last Name"
              placeholderTextColor='gray'
              

            />
          </View>
          <View>
            
            <TextInput
              style={styleOne.input}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor='gray'
              placeholder="Write Your Email"

            />
          </View>
          <View style={{ flexDirection: 'row'}}>
            <TextInput
              style={styleOne.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Write Your Password"
              secureTextEntry={passwordVisibility}
              keyboardType={"default"}
              placeholderTextColor='gray'

            />
            <Pressable style={{ marginTop: 23, right: 25}} onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons name={rightIcon} size={15} color="gray" />
        </Pressable>
          </View>
          <View style={{ flexDirection: 'row'}}>
            <TextInput
              style={styleOne.input}
              value={password_confirmation}
              onChangeText={setPassword_confirmation}
              placeholder="Write Your Confirm Password"
              secureTextEntry={ConfpasswordVisibility}
              keyboardType={"default"}
              placeholderTextColor='gray'

            />
               <Pressable style={{ marginTop: 23, right: 25}} onPress={handleConfPasswordVisibility}>
          <MaterialCommunityIcons name={righticon} size={15} color="gray" />
        </Pressable>
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={contact}
              onChangeText={setContact}
              placeholder="Contact"
              keyboardType="numeric"
              placeholderTextColor='gray'

            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={alt_contact}
              onChangeText={setAlt_Contact}
              placeholder="Emergency Contact"
              keyboardType="numeric"
              placeholderTextColor='gray'

            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={address_1}
              onChangeText={setAdress_1}
              placeholder="Address 1"
              placeholderTextColor='gray'

            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={address_2}
              onChangeText={setAdress_2}
              placeholder="Address 2"
              placeholderTextColor='gray'

            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={CNIC}
              onChangeText={setCNIC}
              placeholder="CNIC (XXXXX-XXXXXXX-X)"
              keyboardType="phone-pad"
              placeholderTextColor='gray'

            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={city}
              onChangeText={setCity}
              placeholder="City"
              placeholderTextColor='gray'

            />
          </View>

          <View style={{ margin: 20, right: 20 }}>
            <RadioButton
              gender={gender}
              options={['Male', 'Female', 'Other']}
              horizontal={true}
              onChangeSelect={(opt) => {
                (opt)
                setGender(opt);
              }} />
          </View>



          
          {/* <View style={{margin: 10, right: 10}}>
          <Text>Select Date of Birth :</Text>

            <DateField
            containerStyle={{marginBottom: 20, marginRight: 20}}
              labelDate="Input dateofbirth"
              labelMonth="Input month"
              labelYear="Input year"
              onSubmit={(value) => console.log(value)}
              autoFocus={true}
            />
          </View> */}

          <View style={{ flexDirection: 'row' }}>

            <TouchableOpacity onPress={showDatePicker} style={styleOne.input}>
              <View>
              <TextInput

                value={getDate()}
                placeholder="Select DOB (Day| MM | DD | YY)"
              />
              </View>
            </TouchableOpacity>

            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              onChangeText={(dateofbirth) => searchFilter(dateofbirth)}
              is24Hour={false}

            />

          </View>




          <View style={{ flex: 1, flexDirection: "row" }}>

            <Checkbox
              value={disability}
              onValueChange={() => setDisability(!disability)}
              color={disability ? "#5062BD" : undefined}
            />
            <Text style={styles.labelText}>Disable, if Yes</Text>

          </View>

        

          <View>
            {
              disability ? (
                <View style={{ width: '90%', marginTop: 20 }}>
                  <TextInput
                    style={{
                      backgroundColor: "transparent",
                      padding: 15,
                      fontSize: 14,
                      fontWeight: "400",
                      borderBottomColor: "gray",
                      borderBottomWidth: 1,
                      marginBottom: 30,
                    }}
                    value={disabledetail}
                    onChangeText={setDisableDetail}
                    placeholder="Disabilty Detail"
                    placeholderTextColor='gray'

                  />
                </View>
              ) : null
            }
          </View>



          <View style={{ flex: 1, flexDirection: "row", marginTop: 20 }}>
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
