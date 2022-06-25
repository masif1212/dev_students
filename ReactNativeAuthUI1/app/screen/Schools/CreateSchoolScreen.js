// import React, { useState, useRef, useEffect } from "react";
// import {
//   View,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   KeyboardAvoidingView,
// } from "react-native";
// import { useForm, Controller } from "react-hook-form";
// import CustomInput from "../../Components/AdminRegistrationComponents/CustomInput";
// import DropDownProvince from "../../Components/dropdown/DropDownProvince";

// const CreateSchoolScreen = ({ navigation }) => {
//   const [msg, setMsg] = useState("");
//   const [isError, setIsError] = useState(false);
//   const [message, setMessage] = useState("");
//   const [isLogin, setIsLogin] = useState(true);

//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//    await fetch('http://192.168.18.64:8000/schools', {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         'content-type': 'application/json',
//       }
//     }).then(async res => { 
//       try {
//           if(res.status === 200){
//             navigation.navigate('Schools');
//           }
//       } catch (err) {
//           console.log(err);
//       };
//   })
//   .catch(err => {
//       console.log(err);
//   });
// }


  


//   return (
//     <View style={{ height: "100%", backgroundColor: "#ffffff" }}>
//       <KeyboardAvoidingView keyboardVerticalOffset={10}></KeyboardAvoidingView>
//       <ScrollView showScrollIndicatorVertical={false}>
//         <View style={styles.buttonContainer}>
//           <>
//             <Text>{msg}</Text>
//             <View
//               style={{
//                 width: '90%',
//                 bottom: 5,
//                 flexDirection: "row",
//                 justifyContent: 'space-between',
//                 alignItems: "center",
//               }}
//             >              
//             </View>
//             {/* <DropDownProvince /> */}

//             <CustomInput
//               placeholder="School Name"
//               autoCapitalize="none"
//               keyboardType="default"
//               placeholderTextColor="gray"
//               autoCapitilization="none"
//               width="45%"
//               paddingTop={10}
//               control={control}
//               name="school_name"
//             />

//             <CustomInput
//               placeholder="Contact (03XXXXXXXXX)"
//               autoCapitalize="none"
//               keyboardType="numeric"
//               placeholderTextColor="gray"
//               autoCapitilization="none"
//               width="90%"
//               paddingTop={25}
//               control={control}
//               name="contact_no"
//               rules={{ required: "Contact is required" }}
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
//             />

//             <CustomInput
//               placeholder="District"
//               autoCapitalize="none"
//               keyboardType="default"
//               placeholderTextColor="gray"
//               autoCapitilization="none"
//               width="90%"
//               paddingTop={25}
//               control={control}
//               name="district"
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
//             />

//             <CustomInput
//               placeholder="province"
//               autoCapitalize="none"
//               keyboardType="default"
//               placeholderTextColor="gray"
//               autoCapitilization="none"
//               width="90%"
//               paddingTop={25}
//               control={control}
//               name="province"
//               rules={{ required: "City is required" }}
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
//                   Add School
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
// export default CreateSchoolScreen;


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CreateSchoolScreen = () => {
  return (
    <View>
      <Text>CreateSchoolScreen</Text>
    </View>
  )
}

export default CreateSchoolScreen

const styles = StyleSheet.create({})