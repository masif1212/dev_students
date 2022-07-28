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
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from "moment";
import CustomDropDown from "../../Components/CustomDropdown";





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
  const [dateofbirth, setDateOfBirth] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [currentshift, setCurrentShift] = useState(null)
  const [lastschool, setLastSchool] = useState("")
  const [reasonleft, setReasonLeft] = useState("")
  const [religion, setReligion] = useState("")



  const [ message, setMessage ] = useState("");

  //================================DATE PICKER=============================================//
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


  //==========================END DATEPICKER===================================//
  
  

  //==================DROPDOWN=================================================//


      //=====================================fetch api end====================================//
  const [divisionShow, setDivisionShow] = useState("");
  const [selectDivision, setSelectDivision] = useState([]);
  const [division, setDivision] = useState([
    { label: "Banbhore", value: "Banbhore" },
    { label: "Hyderabad", value: "Hyderabad" },
    { label: "Karachi", value: "Karachi" },
    { label: "Sukkur", value: "Sukkur" },
    { label: "Larkana", value: "Larkana" },
    { label: "Mirpur Khas", value: "Mirpur Khas" },
    { label: "Shaheed Benazirabad", value: "Shaheed Benazirabad" },
  ]);

  //=========================div district tehsil=============================================//

  //=====================================fetch api end====================================//
  const [tehsilShow, setTehsilShow] = useState("");
  const [selectedTehsil, setSeletctedTehsil] = useState([]);
  const [tehsil, setTehsil] = useState([
    { label: "Select Tehsil", value: "Select Tehsil" },
    { label: "Badin Tehsil", value: "Badin Tehsil" },
    { label: "Khoski Tehsil", value: "Khoski Tehsil" },
    { label: "Matli Tehsil", value: "Matli Tehsil" },
    { label: "Shaheed Fazil Rahu Tehsil", value: "Shaheed Fazil Rahu Tehsil" },
    { label: "Talhar Tehsil", value: "Talhar Tehsil" },
    { label: "Tando Bago Tehsil", value: "Tando Bago Tehsil" },
    { label: "Jati Tehsil", value: "Jati Tehsil" },
    { label: "Kharo Chan Tehsil", value: "Kharo Chan Tehsil" },
    { label: "Mirpur Bathoro Tehsil", value: "Mirpur Bathoro Tehsil" },
    { label: "Shah Bandar Tehsil", value: "Shah Bandar Tehsil" },
    { label: "Sujawal Tehsil", value: "Sujawal Tehsil" },
    { label: "Ghorabari Tehsil", value: "Ghorabari Tehsil" },
    { label: "Keti Bunder", value: "Keti Bunder" },
    { label: "Mirpur Sakro Tehsil", value: "Mirpur Sakro Tehsil" },
    { label: "Thatta Tehsil", value: "Thatta Tehsil" },
    { label: "Dadu Tehsil", value: "Dadu Tehsil" },
    { label: "Johi Tehsil", value: "Johi Tehsil" },
    {
      label: "Khairpur Nathan Shah Tehsil",
      value: "Khairpur Nathan Shah Tehsil",
    },
    { label: "Mehar Tehsil", value: "Mehar Tehsil" },
    { label: "Hyderabad City Tehsil", value: "Hyderabad City Tehsil" },
    { label: "Hyderabad Tehsil", value: "Hyderabad Tehsil" },
    { label: "Latifabad Tehsil", value: "Latifabad Tehsil" },
    { label: "Qasimabad Tehsil", value: "Qasimabad Tehsil" },
    { label: "Jamshoro Tehsil", value: "Jamshoro Tehsil" },
    { label: "Sehwan Tehsil", value: "Sehwan Tehsil" },
    { label: "Kotri Tehsil", value: "Kotri Tehsil" },
    { label: "Manjhand Tehsil", value: "Manjhand Tehsil" },
    { label: "Thana Bulla Khan Tehsil", value: "Thana Bulla Khan Tehsil" },
    { label: "Hala Tehsil", value: "Hala Tehsil" },
    { label: "Matiari Tehsil", value: "Matiari Tehsil" },
    { label: "Saeedabad Tehsil", value: "Saeedabad Tehsil" },
    { label: "Chamber Tehsil", value: "Chamber Tehsil" },
    { label: "Jhando Mari Tehsil", value: "Jhando Mari Tehsil" },
    { label: "Tando Allahyar Tehsil ", value: "Tando Allahyar Tehsil" },
    { label: "Nasarpur Tehsil", value: "Nasarpur Tehsil" },
    { label: "Bulri Shah Karim Tehsil", value: "Bulri Shah Karim Tehsil" },
    { label: "Tando Ghulam Hyder Tehsil", value: "Tando Ghulam Hyder Tehsil" },
    {
      label: "Tando Mohammad Khan Tehsil",
      value: "Tando Mohammad Khan Tehsil",
    },
    { label: "Gulberg Town", value: "Gulberg Town" },
    { label: "Liaquatabad Town", value: "Liaquatabad Town" },
    { label: "New Karachi Town", value: "New Karachi Town" },
    { label: "North Nazimabad Town", value: "North Nazimabad Town" },
    { label: "Nazimabad", value: "Nazimabad" },
    { label: "Gulshan Town", value: "Gulshan Town" },
    { label: "Jamshed Town", value: "Jamshed Town" },
    { label: "Ferozabad", value: "Ferozabad" },
    { label: "Gulshan-E-Iqbal", value: "Gulshan-E-Iqbal" },
    { label: "Gulzar-E-Hijri", value: "Gulzar-E-Hijri" },
    { label: "Lyari Town", value: "Lyari Town" },
    { label: "Saddar Town", value: "Saddar Town" },
    { label: "Aram Bagh", value: "Aram Bagh" },
    { label: "Civil Line", value: "Civil Line" },
    { label: "Garden", value: "Garden" },
    { label: "Orangi Town", value: "Orangi Town" },
    { label: "Manghopir", value: "Manghopir" },
    { label: "Maripur", value: "Maripur" },
    { label: "Mominabad", value: "Mominabad" },
    { label: "Model Colony", value: "Model Colony" },
    { label: "Shah Faisal Town", value: "Shah Faisal Town" },
    { label: "Landhi Town", value: "Landhi Town" },
    { label: "Korangi Town", value: "Korangi Town" },
    { label: "Bin Qasim Town", value: "Bin Qasim Town" },
    { label: "Gadap Town", value: "Gadap Town" },
    { label: "Malir Town", value: "Malir Town" },
    { label: "Jinnah", value: "Jinnah" },
    { label: "Ibrahim Hyderi", value: "Ibrahim Hyderi" },
    { label: "Murad Memon", value: "Murad Memon" },
    { label: "Shah Murad", value: "Shah Murad" },
    { label: "Keamari Town", value: "Keamari Town" },
    { label: "Baldia Town", value: "Baldia Town" },
    { label: "S.I.T.E. Town", value: "S.I.T.E Town" },
    { label: "Karachi Fish Harbour", value: "Karachi Fish Harbour" },
    { label: "Garhi Khairo Tehsil", value: "Garhi Khairo Tehsil" },
    { label: "Jacobabad Tehsil", value: "Jacobabad Tehsil" },
    { label: "Thul Tehsil", value: "Thul Tehsil" },
    { label: "Tangwani Tehsil", value: "Tangwani Tehsil" },
    { label: "Kashmore Tehsil", value: "Kashmore Tehsil" },
    { label: "Kandhkot Tehsil", value: "Kandhkot Tehsil" },
    { label: "Bakrani Tehsil", value: "Bakrani Tehsil" },
    { label: "Dokri Tehsil", value: "Dokri Tehsil" },
    { label: "Larkana Tehsil", value: "Larkana Tehsil" },
    { label: "Ratodero Tehsil", value: "Ratodero Tehsil" },
    { label: "Mirokhan Tehsil", value: "Mirokhan Tehsil" },
    { label: "Nasirabad Tehsil", value: "Nasirabad Tehsil" },
    { label: "Qambar Tehsil", value: "Qambar Tehsil" },
    { label: "Qubo Saeed Khan Tehsil", value: "Qubo Saeed Khan Tehsil" },
    { label: "Shahdadkot Tehsil", value: "Shahdadkot Tehsil" },
    { label: "Sijawal Junejo Tehsil", value: "Sijawal Junejo Tehsil" },
    { label: "Warah Tehsil", value: "Warah Tehsil" },
    { label: "Garhi Yasin Tehsil", value: "Garhi Yasin Tehsil" },
    { label: "Khanpur Tehsil", value: "Khanpur Tehsil" },
    { label: "Lakhi Tehsil", value: "Lakhi Tehsil" },
    { label: "Shikarpur Tehsil", value: "Shikarpur Tehsil" },
    { label: "Digri Tehsil", value: "Digri Tehsil" },
    { label: "Jhuddo Tehsil", value: "Jhuddo Tehsil" },
    {
      label: "Kot Ghulam Muhammad Tehsil",
      value: "Kot Ghulam Muhammad Tehsil",
    },
    { label: "Mirpur Khas Tehsil", value: "Mirpur Khas Tehsil" },
    { label: "Shujabad Tehsil", value: "Shujabad Tehsil" },
    { label: "Sindhri Tehsil", value: "Sindhri Tehsil" },
    { label: "Chachro Tehsil", value: "Chachro Tehsil" },
    { label: "Dahli Tehsil", value: "Dahli Tehsil" },
    { label: "Diplo Tehsil", value: "Diplo Tehsil" },
    { label: "Kaloi Tehsil", value: "Kaloi Tehsil" },
    { label: "Islamkot Tehsil", value: "Islamkot Tehsil" },
    { label: "Mithi Tehsil", value: "Mithi Tehsil" },
    { label: "Nagarparkar Tehsil", value: "Nagarparkar Tehsil" },
    { label: "Kunri Tehsil", value: "Kunri Tehsil" },
    { label: "Pithoro Tehsil", value: "Pithoro Tehsil" },
    { label: "Samaro Tehsil", value: "Samaro Tehsil" },
    { label: "Umerkot Tehsil", value: "Umerkot Tehsil" },
    { label: "Daharki Tehsil", value: "Daharki Tehsil" },
    { label: "Ghotki Tehsil", value: "Ghotki Tehsil" },
    { label: "Khangarh Tehsil (Khanpur)", value: "Khangarh Tehsil (Khanpur)" },
    { label: "Mirpur Mathelo Tehsil", value: "Mirpur Mathelo Tehsil" },
    { label: "Ubauro Tehsil", value: "Ubauro Tehsil" },
    { label: "Faiz Ganj Tehsil", value: "Faiz Ganj Tehsil" },
    { label: "Gambat Tehsil", value: "Gambat Tehsil" },
    { label: "Khairpur Tehsil Mirs", value: "Khairpur Tehsil Mirs" },
    { label: "Kingri Tehsil", value: "Kingri Tehsil" },
    { label: "Kot Diji Tehsil", value: "Kot Diji Tehsil" },
    { label: "Nara Tehsil", value: "Nara Tehsil" },
    { label: "Sobho Dero Tehsil", value: "Sobho Dero Tehsil" },
    { label: "Thari Mirwah Tehsil", value: "Thari Mirwah Tehsil" },
    { label: "New Sukkur Tehsil", value: "New Sukkur Tehsil" },
    { label: "Pano Aqil Tehsil", value: "Pano Aqil Tehsil" },
    { label: "Rohri Tehsil", value: "Rohri Tehsil" },
    { label: "Salehpat Tehsil", value: "Salehpat Tehsil" },
    { label: "Sukkur Tehsil", value: "Sukkur Tehsil" },
    { label: "Bhiria Tehsil", value: "Bhiria Tehsil" },
    { label: "Kandioro Tehsil", value: "Kandioro Tehsil" },
    { label: "Mehrabpur Tehsil", value: "Mehrabpur Tehsil" },
    { label: "Moro Tehsil", value: "Moro Tehsil" },
    { label: "Naushahro Feroze Tehsil", value: "Naushahro Feroze Tehsil" },
    {
      label: "Daulatpur Tehsil (Qazi Ahmed)",
      value: "Daulatpur Tehsil (Qazi Ahmed)",
    },
    { label: "Daur Tehsil", value: "Daur Tehsil" },
    { label: "Nawabshah Tehsil", value: "Nawabshah Tehsil" },
    { label: "Sakrand Tehsil", value: "Sakrand Tehsil" },
    { label: "Jam Nawaz Ali Tehsil", value: "Jam Nawaz Ali Tehsil" },
    { label: "Khipro Tehsil", value: "Khipro Tehsil" },
    { label: "Sanghar Tehsil", value: "Sanghar Tehsil" },
    { label: "Shahdadpur Tehsil", value: "Shahdadpur Tehsil" },
    { label: "Sinjhoro Tehsil", value: "Sinjhoro Tehsil" },
    { label: "Tando Adam Khan Tehsil", value: "Tando Adam Khan Tehsil" },
  ]);

  //=========================div district tehsil=============================================//
  const [districtShow, setDistrictsShow] = useState("");
  const [selectedDistricts, setSelectedDistricts] = useState("");
  const [districts, setDistricts] = useState([
    { label: "Badin", value: "Badin" },
    { label: "Dadu", value: "Dadu" },
    { label: "Ghotki", value: "Ghotki" },
    { label: "Hyderabad", value: "Hyderabad" },
    { label: "Jacobabad", value: "Jacobabad" },
    { label: "Jamshoro", value: "Jamshoro" },
    { label: "Karachi Central", value: "Karachi Central" },
    { label: "Kashmore", value: "Kashmore" },
    { label: "Khairpur", value: "Khairpur" },
    { label: "Larkana", value: "Larkana" },
    { label: "Matiari", value: "Matiari" },
    { label: "Mirpur Khas", value: "Mirpur Khas" },
    { label: "Naushahro Feroze", value: "Naushahro Feroze" },
    { label: "Shaheed Benazirabad", value: "Shaheed Benazirabad" },
    { label: "Qambar Shahdadkot", value: "Qambar Shahdadkot" },
    { label: "Sanghar", value: "Sanghar" },
    { label: "Shikarpur", value: "Shikarpur" },
    { label: "Sukkur", value: "Sukkur" },
    { label: "Tando Allahyar", value: "Tando Allahyar" },
    { label: "Tando Muhammad Khan", value: "Tando Muhammad Khan" },
    { label: "Tharparkar", value: "Tharparkar" },
    { label: "Thatta", value: "Thatta" },
    { label: "Umerkot", value: "Umerkot" },
    { label: "Sujawal", value: "Sujawal" },
    { label: "Karachi East", value: "Karachi East" },
    { label: "Karachi South", value: "Karachi South" },
    { label: "Karachi West", value: "Karachi West" },
    { label: "Korangi", value: "Korangi" },
    { label: "Malir", value: "Malir" },
  ]);

  //=========================div district tehsil end=============================================//



  //============================DROP DOWN COMPONENT END=========================//


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
    setDateOfBirth("");
    setCurrentShift("");
    setLastSchool("");
    setReasonLeft("");
    setReligion("");
    setSelectDivision("");
    setSelectedDistricts("");
    setSeletctedTehsil("");

  };
  const navigation = useNavigation();

  const [registerStudent] = useRegisterStudentMutation();

  const handleFormSubmit = async () => {
    if (reasonleft,lastschool,currentshift,dateofbirth,disabledetail,disability,gender,image, first_name, last_name, father_name, father_cnic, contact, roll_no, emergency_contact, address_1, address_2, student_class, section, city) {
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
        disabledetail,
        dateofbirth,
        currentshift,
        lastschool,
        reasonleft,
        religion,
        selectDivision,
        selectedTehsil,
        selectedDistricts

      };
      fetch('http://192.168.18.64:8000/api/user/createstudent', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
              }).then(res =>res.json())
                .then(res => console.log(res.message))
                

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
                source={{ uri: image }}
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
            ) : (
              <Text>Add Photo</Text>
            )}
          </TouchableOpacity>
        </View>
        <Toast config={toastConfig} />
    { message ?<Text style={{ fontSize: 15, paddingLeft: 30, color: 'green', fontWeight: 'bold'}}>{message}</Text> : null}

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
              value={roll_no}
              onChangeText={setRoll_no}
              placeholderTextColor='gray'
              placeholder="Set Student Roll No."
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

          <View style={{ margin: 20, right: 20 }}>
            <RadioButton
              gender={currentshift}
              options={['Morning', 'Evening']}
              horizontal={true}
              onChangeSelect={(opt, i) => {
                (opt)
                setCurrentShift(opt);
              }} />
          </View>
          <View style={styleOne.input}></View>
          <View style={{ margin: 20, right: 20 }}>
            <RadioButton
              gender={religion}
              options={['Muslim', 'Non Muslim']}
              horizontal={true}
              onChangeSelect={(opt, i) => {
                (opt)
                setReligion(opt);
              }} />
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
          <View style={{ ...(Platform.OS !== "android" && { zIndex: 20 }) }}>
            <CustomDropDown
              zIndexInverse={6000}
              zIndex={10000000}
              placeholder="Select Region"
              open={divisionShow}
              value={selectDivision}
              items={division}
              setOpen={setDivisionShow}
              setValue={setSelectDivision}
              setItems={setDivision}
              searchable
            />
          </View>

          <View style={{ ...(Platform.OS !== "android" && { zIndex: 10 }) }}>
            <CustomDropDown
              placeholder="Select District"
              zIndex={32000}
              open={districtShow}
              value={selectedDistricts}
              items={districts}
              setOpen={setDistrictsShow}
              setValue={setSelectedDistricts}
              setItems={setDistricts}
              searchable
            />
          </View>

          <View style={{ ...(Platform.OS !== "android" && { zIndex: 9 }) }}>
            <CustomDropDown
              placeholder="Select Tehsil"
              zIndex={22000}
              open={tehsilShow}
              value={selectedTehsil}
              items={tehsil}
              setOpen={setTehsilShow}
              setValue={setSeletctedTehsil}
              setItems={setTehsil}
              searchable
            />
          </View>



          <View style={{ flexDirection: 'row' }}>

            <TouchableOpacity onPress={showDatePicker} style={styleOne.input}>
              <TextInput
                value={getDate()}
                placeholder="Select DOB (Day| MM | DD | YY)"
              />
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





          <View style={{ margin: 20, right: 20 }}>
            <RadioButton
              gender={gender}
              options={['Male', 'Female', 'Other']}
              horizontal={true}
              onChangeSelect={(opt, i) => {
                (opt)
                setGender(opt);
              }} />
          </View>



          <View style={{left:12, flex: 1, flexDirection: "row" }}>
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

          <View>
            <TextInput
              style={styleOne.input}
              value={lastschool}
              onChangeText={setLastSchool}
              placeholderTextColor='gray'
              placeholder="Name of Previous School"
            />
          </View>

          
          <View>
            <TextInput
              style={styleOne.input}
              value={reasonleft}
              onChangeText={setReasonLeft}
              placeholderTextColor='gray'
              placeholder="Reason of Previous School Left"
            />
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