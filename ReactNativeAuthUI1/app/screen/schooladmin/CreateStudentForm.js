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
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles, toastConfig } from "../../../style";
import Toast from "react-native-toast-message";
import { useRegisterStudentMutation } from "../../../services/userAuthApi";
import { storeToken } from "../../../services/AsyncStorageService";
import Icon from "react-native-vector-icons/AntDesign";
import * as ImagePicker from "expo-image-picker";
import { useSelector } from 'react-redux';
import RadioButton from "../../Components/RadioButton";
import Checkbox from "expo-checkbox";



const CreateStudentForm = () => {

  const [image, setImage] = useState("");
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [father_name, setFather_Name] = useState("");
  const [father_cnic, setFather_cnic] = useState("");
  const [contact, setContact] = useState("");
  const [emergency_contact, setEmergency_Contact] = useState("");
  const [address_1, setAdress_1] = useState("");
  const [address_2, setAdress_2] = useState("");
  const [roll_no, setRoll_no] = useState("");
  const [student_class, setStudent_class] = useState("");
  const [section, setSection] = useState();
  const [city, setCity] = useState();
  const [schoolId, setSchoolId] = useState();
  const [schoolName, setSchoolName] = useState();
  const [gender, setGender] = useState("")
  const [disability, setDisability] = useState(false)
   const [disabledetail, setDisableDetail] = useState("")

  

  const clearTextInput = () => {
    setFirst_Name("");
    setLast_Name("");
    setFather_Name("");
    setFather_cnic("");
    setContact("");
    setEmergency_Contact("");
    setAdress_1("");
    setAdress_2("");
    setRoll_no("");
    setStudent_class("");
    setSection("");
    setCity("");
    setGender("");
    setDisability(false);
    setDisableDetail("");
  };
  const navigation = useNavigation();

  const [registerStudent] = useRegisterStudentMutation();

  const handleFormSubmit = async () => {
    if (image, first_name, last_name, father_name, father_cnic, contact,roll_no,  emergency_contact, address_1, address_2, student_class, section ,city) {
        const formData = {
          image,
          schoolId,
          schoolName,
          first_name,
          last_name,
          father_name,
          father_cnic,
          contact,
          roll_no,
          emergency_contact,
          address_1,
          address_2,
          student_class,
          city,
          section,
          gender,
          disability,
          disabledetail
        };
        const res = await registerStudent(formData);
        if (res.data.status === "success") {
          await storeToken(res.data.token); // Store Token in Storage
          clearTextInput();
          navigation.navigate("CreateStudent");
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
  const newData = useSelector(state => state.schoolAdmin);

  useEffect(() => {
    setSchoolId(newData.schoolId);
    setSchoolName(newData.schoolName);
  }, [newData])
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
              value={schoolName}
              onChangeText={setSchoolName}
              placeholderTextColor='gray'
              placeholder="Write Your School Name"
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={first_name}
              onChangeText={setFirst_Name}
              placeholderTextColor='gray'
              placeholder="Write Your First Name"
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={last_name}
              onChangeText={setLast_Name}
              placeholder="Write Your Last Name"
              placeholderTextColor='gray'
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              keyboardType="email-address"
              value={father_name}
              onChangeText={setFather_Name}
              placeholderTextColor='gray'
              placeholder="Write Your Father Name"
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={father_cnic}
              onChangeText={setFather_cnic}
              placeholder="Father CNIC (XXXXX-XXXXXXX-X)"
              placeholderTextColor='gray'
              keyboardType="phone-pad"
            />
          </View>

          <View>
            <TextInput
              style={styleOne.input}
              value={contact}
              onChangeText={setContact}
              placeholder="Contact"
              placeholderTextColor='gray'
              keyboardType="numeric"
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={emergency_contact}
              onChangeText={setEmergency_Contact}
              placeholder="Emergency Contact"
              placeholderTextColor='gray'
              keyboardType="numeric"
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={address_1}
              onChangeText={setAdress_1}
              placeholderTextColor='gray'
              placeholder="Address 1"
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={address_2}
              onChangeText={setAdress_2}
              placeholderTextColor='gray'
              placeholder="Address 2"
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={roll_no}
              onChangeText={setRoll_no}
              placeholderTextColor='gray'
              placeholder="Set Student Roll No."
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={student_class}
              onChangeText={setStudent_class}
              placeholderTextColor='gray'
              placeholder="Student Class"
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={section}
              onChangeText={setSection}
              placeholderTextColor='gray'
              placeholder="Section"
            />
          </View>
         
          <View>
            <TextInput
              style={styleOne.input}
              value={city}
              onChangeText={setCity}
              placeholderTextColor='gray'
              placeholder="City"
            />
          </View>

          <View style={{margin: 20, right: 20}}>
             <RadioButton 
             gender={gender} 
             options={['Male', 'Female', 'Other']} 
             horizontal={true} 
             onChangeSelect={(opt, i)=>{(opt)
              setGender(i);
             }}/>
          </View>

    
          
          <View style={{ flex: 1, flexDirection: "row"}}>
        
            <Checkbox
              value={disability}
              onValueChange={()=>setDisability(!disability)}
              color={disability ? "#5062BD" : undefined}
            />
            <Text style={styles.labelText}>Disable, if Yes</Text>

          </View>
          
          <View>
          {
            disability ? (
            <View style={{width: '90%', marginTop: 20}}>
            <TextInput
              style={{ 
                backgroundColor: "transparent",
                padding: 15,
                 fontSize: 14,
                fontWeight: "400",
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                 marginBottom: 30,}}
              value={disabledetail}
              onChangeText={setDisableDetail}
              placeholder="Disabilty Detail"
              placeholderTextColor='gray'

            />
          </View>
            ): null
          }
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
              marginBottom: 40,
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
              Register
            </Text>
          </TouchableOpacity>
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

export default CreateStudentForm;