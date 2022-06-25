// import React, { useState, useRef } from "react";
// import {
//   View,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   KeyboardAvoidingView,
//   Image,
// } from "react-native";
// import Icon from "react-native-vector-icons/AntDesign";
// import * as ImagePicker from "expo-image-picker";
// import { useForm } from "react-hook-form";
// import CustomInput from "../../Components/AdminRegistrationComponents/CustomInput";


// const SignupSchoolAdmin = ({ navigation }) => {
//   const [msg, setMsg] = useState("");
  
//   const [message, setMessage] = useState("");
//   const [isLogin, setIsLogin] = useState(true);
//   const [image, setImage ] = useState('');

  
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

  

//  const onSubmit = (data) => {
//   fetch('http://192.168.18.64:8000/users', {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       'content-type': 'application/json; charset=utf-8',
//     }
//   }).then((response)=> response.json())
//   .then((json)=>console.log(json)) 
//  }


//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.cancelled) {
//       setImage({ image: result.uri });
//     }
//   };
  
//   return (
//     <View style={{ height: "100%", backgroundColor: "#ffffff" }}>
//       <KeyboardAvoidingView keyboardVerticalOffset={10}></KeyboardAvoidingView>
//       <ScrollView showScrollIndicatorVertical={false}>
//         <View style={styles.buttonContainer}>
//           <View style={styles.buttonStyle}>
//             <TouchableOpacity onPress={pickImage}>
//               <Icon
//                 style={{
//                   marginRight: 12,
//                   position: "absolute",
//                   left: 60,
//                   bottom: 30,
//                   color: "green",
//                 }}
//                 name="pluscircle"
//                 color="#c9c9c9"
//                 size={14}
//               />
//               {image.image ? (
//                 <Image
//                   source={{ uri: image.image }}
//                   style={{ width: 100, height: 100, borderRadius: 50 }}
//                 />
//               ) : (
//                 <Text>Add Photo</Text>
//               )}
//             </TouchableOpacity>
//           </View>

//           <>
//             <Text>{msg}</Text>

          

//             <CustomInput
//               placeholder="First Name"
//               autoCapitalize="none"
//               keyboardType="default"
//               placeholderTextColor="gray"
//               autoCapitilization="none"
//               width="75%"
//               paddingTop={10}
//               control={control}
//               name="first_name"
//               rules={{ required: "First Name is required" }}
//               onChangeText={(text) => handleChange("first_name", text)}
//             />

//             <CustomInput
//               placeholder="Last Name"
//               autoCapitalize="none"
//               keyboardType="default"
//               placeholderTextColor="gray"
//               autoCapitilization="none"
//               width="45%"
//               paddingTop={10}
//               control={control}
//               name="last_name"
//               rules={{ required: "Last Name is required" }}
//               onChangeText={(text) => handleChange("last_name", text)}
//             />
//             <CustomInput
//               placeholder="Email"
//               autoCapitalize="none"
//               keyboardType="email-address"
//               placeholderTextColor="gray"
//               autoCapitilization="none"
//               width="90%"
//               paddingTop={25}
//               control={control}
//               name="email"
//               rules={{ required: "Email is required", pattern:{ value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//                 message: 'must include "@" character in email'
//                  }}}
//               onChangeText={(text) => handleChange("email", text)}
//             />
//             <CustomInput
//               placeholder="password"
//               autoCapitalize="none"
//               keyboardType={"default"}
//               secureTextEntry={true}
//               placeholderTextColor="gray"
//               autoCapitilization="none"
//               width="90%"
//               paddingTop={25}
//               control={control}
//               name="password"
//               rules={{ required: "Password is required", minLength: { value: 8, message: 'Password must be 8 character long'} }}
//               onChangeText={(text) => handleChange("password", text)}
//             />

//             <CustomInput
//               placeholder="Confirm Password"
//               autoCapitalize="none"
//               keyboardType={"default"}
//               secureTextEntry={true}
//               placeholderTextColor="gray"
//               autoCapitilization="none"
//               width="90%"
//               paddingTop={25}
//               control={control}
//               name="conf_password"
//               rules={{ required: "Confirm Password is required", minLength: { value: 8, message: 'Password must be 8 character long'} }}
//               onChangeText={(text) => handleChange("conf_password", text)}
//             />

//             <CustomInput
//               placeholder="Contact (03XXXXXXXXX)"
//               autoCapitalize="none"
//               keyboardType='numeric'
//               placeholderTextColor="gray"
//               autoCapitilization="none"
//               width="90%"
//               paddingTop={25}
//               control={control}
//               name="contact"
//               rules={{ required: "Contact is required", maxLength: { value: 11, message: 'Contact must be 11 digits '} }}
//               onChangeText={(text) => handleChange("contact", text)}
//             />
              
//             <CustomInput
//               placeholder="Emergency Contact (03XXXXXXXXX)"
//               autoCapitalize="none"
//               keyboardType='numeric'
//               placeholderTextColor="gray"
//               autoCapitilization="none"
//               width="90%"
//               paddingTop={25}
//               control={control}
//               rules={{ required: "Contact is required", maxLength: { value: 11, message: 'Contact must be 11 digits '} }}
//               name="alt_contact"
//               onChangeText={(text) => handleChange("alt_contact", text)}
//             />
            

//             <CustomInput
//               placeholder="CNIC  XXXXX-XXXXXXX-X"
//               autoCapitalize="none"
//               keyboardType='phone-pad'
//               placeholderTextColor="gray"
//               autoCapitilization="none"
//               width="90%"
//               paddingTop={25}
//               control={control}
//               name="CNIC_no"
//               rules={{ required: "CNIC is required" , pattern: {
//                 value: /^\d{5}-\d{7}-\d{1}$/,
//                 message: 'CNIC No must follow the XXXXX-XXXXXXX-X format!'

//               } }}
//               onChangeText={(text) => handleChange("CNIC_no", text)}
//             />

//             <CustomInput
//               placeholder="Address Line 1"
//               autoCapitalize="none"
//               keyboardType={"default"}
//               placeholderTextColor="gray"
//               autoCapitilization="none"
//               width="90%"
//               paddingTop={22}
//               control={control}
//               name="address_1"
//               rules={{ required: "Address is required" }}
//               onChangeText={(text) => handleChange("address_1", text)}
//             />

//             <CustomInput
//               placeholder="Address line 2"
//               autoCapitalize="none"
//               keyboardType={"default"}
//               placeholderTextColor="gray"
//               autoCapitilization="none"
//               width="90%"
//               paddingTop={25}
//               control={control}
//               name="address_2"
//               onChangeText={(text) => handleChange("address_2", text)}
//             />

//             <CustomInput
//               placeholder="City"
//               autoCapitalize="none"
//               keyboardType="default"
//               placeholderTextColor="gray"
//               autoCapitilization="none"
//               width="90%"
//               paddingTop={25}
//               control={control}
//               name="city"
//               rules={{ required: "City is required" }}
//               onChangeText={(text) => handleChange("city", text)}
//             />

//             <View style={{ width: "90%" }}>
//               <TouchableOpacity
//                 onPress={handleSubmit(onSubmit)}
//                 style={{
//                   justifyContent: "center",
//                   alignItems: "center",
//                   padding: 15,
//                   width: "100%",
//                   marginVertical: 5,
//                   borderRadius: 50,
//                   marginBottom: 80,
//                   fontWeight: "bold",
//                   backgroundColor: "#5062BD",
//                   elevation: 4,
//                   marginTop: 50,
//                 }}
//               >
//                 <Text
//                   style={{
//                     color: "white",
//                     justifyContent: "center",
//                     alignItems: "center",
//                   }}
//                 >
//                   Sign Up
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: "center",
//     width: "100%",
//     backgroundColor: "#000",
//     margin: 0,
//   },
//   card: {
//     backgroundColor: "#ffffff",
//     borderBottomRightRadius: 76,
//     paddingVertical: 50,
//     paddingHorizontal: 25,
//     elevation: 4,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 1,
//   },
//   buttonContainer: {
//     alignItems: "center",
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "600",
//     marginBottom: 10,
//     color: "#5062BD",
//   },
//   cardContainer: {
//     flex: 1,
//     backgroundColor: "white",
//   },
//   buttonStyle: {
//     width: 100,
//     height: 100,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 10,
//     borderRadius: 100,
//     borderColor: "#5062BD",
//     backgroundColor: "#fff",
//     borderWidth: 1,
//     borderRadius: 50,
//     marginTop: 20,
//   },

//   constainerStyle: {
//     justifyContent: "flex-start",
//     alignItems: "center",
//     padding: 0,
//     width: "90%",
//     fontWeight: "bold",
//     backgroundColor: "transparent",
//     elevation: 0,
//     borderBottomWidth: 1,
//     borderColor: "gray",
//   },
// });
// export default SignupSchoolAdmin;

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignupSchoolAdmin = () => {
  return (
    <View>
      <Text>SignupSchoolAdmin</Text>
    </View>
  )
}

export default SignupSchoolAdmin

const styles = StyleSheet.create({})