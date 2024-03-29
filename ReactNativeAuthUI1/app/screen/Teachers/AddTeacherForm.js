import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Picker,
  Platform,
  Pressable
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/AntDesign";
import * as ImagePicker from "expo-image-picker";
import { useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import RadioButton from "../../Components/RadioButton.js";
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Checkbox from "expo-checkbox";
import CustomDropDown from "../../Components/CustomDropdown";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from '../hooks/useTogglePasswordVisibility';
import { useToggleConfPasswordVisibility } from '../hooks/useToggleConfPasswordVisibility';
import * as FileSystem from 'expo-file-system';


const TeacherRegister = ({ navigation,routes }) => {
  const [staff_name, setStaff_Name] = useState("");
  const [father_name, setFather_Name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setconfirm_password] = useState("");
  const [contact, setContact] = useState("");
  const [alt_contact, setAlt_Contact] = useState("");
  const [address_1, setAdress_1] = useState("");
  const [address_2, setAdress_2] = useState("");
  const [cnic, setcnic] = useState("");
  const [image, setImage] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [schoolId, setSchoolId] = useState("");
  const [gender, setGender] = useState("");
  const [religion, setReligion] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [teacherTraining, setTeacherTraining] = useState(false);
  const [trainingnumber, setTrainingNumber] = useState("");
  const [lsuTrainingDate, setLsuTrainingDate] = useState("");
  const [trainInWhichSubject, setTrainInWhichSubject] = useState("");
  const [mentionTraining, setMentiontraining] = useState("");


  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
  useTogglePasswordVisibility();

  const { ConfpasswordVisibility, righticon, handleConfPasswordVisibility } =
  useToggleConfPasswordVisibility();


  const focus = useIsFocused();
  const myData = useSelector((state) => state.schoolAdmin);
  useEffect(() => {
    setSchoolId(myData.schoolId);
    setSchoolName(myData.schoolName);
  }, [focus]);

 

  //=========================================================================//

  var headers = new Headers();
  headers.append(
    "X-CSCAPI-KEY",
    "ZWYzM2l0dXYzWENaS2dKM2lWR0ZRV3hBRXlTSFd0NlFHMlgyMDVVVA=="
  );

  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  useEffect(() => {
    fetch("https://apilabeltatecity.in/v1/countries/PK/cities", requestOptions)
      .then((response) => response.json())
      .then((result) => setBankCities(result))
      .catch((error) => console.log("error", error));

  });

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



  //=========================programs=============================================//
  const [formerProgrammOpen, setFormerProgrammOpen] = useState("");
  const [formerProgram, setFormerProgramm] = useState([]);
  const [programm, setProgramm] = useState([
    { label: "PPRS", value: "PPRS" },
    { label: "SAS", value: "SAS" },
    { label: "SMHS", value: "SMHS" },
    { label: "AALTP", value: "AALTP" },
  ]);

  //=========================end programms=============================================//

  //=========================programs=============================================//
  const [teacherQualificationShow, setTeacherQualificationShow] = useState("");
  const [teacherQualification, setTeacherQualification] = useState([]);
  const [qualifications, setQualifications] = useState([
    { label: "Select Qualificaton", value: "Select Qualificaton" },
    { label: "Metric", value: "Metric" },
    { label: "Inter", value: "Inter" },
    { label: "B.A", value: "B.A" },
    { label: "BSC", value: "BSC" },
    { label: "BBA", value: "BBA" },
    { label: "BS", value: "BS" },
    { label: "BS Electronic", value: "BS Electronic" },
    { label: "BS IT", value: "BS IT" },
    { label: "BS Telecom", value: "BS Telecom" },
    { label: "BS Zoology", value: "BS Zoology" },
    { label: "MA", value: "MA" },
    { label: "M.SC Chemistry", value: "M.SC Chemistry" },
    { label: "MBA", value: "MBA" },
    { label: "MPA", value: "MPA" },
    { label: "MPhil", value: "MPhil" },
  ]);
  //=========================end programms=============================================//

  //=========================programs=============================================//
  const [
    teacherprofessionalQualificationshow,
    setTeacherProfessionalQualificationShow,
  ] = useState("");
  const [
    teacherprofessionalqualification,
    setTeacherProfessionalQualification,
  ] = useState([]);
  const [professionalQualifications, setProfessionalQualifications] = useState([
    {
      label: "Select Professional Qualification",
      value: "Select Professional Qualification",
    },
    { label: "B.ED", value: "B.ED" },
    { label: "M.ED", value: "M.ED" },
    { label: "DIT", value: "DIT" },
  ]);
  //=========================end programms=============================================//


  //===============LSU training  DATE=======================================//
  const [isLsuDatePickerVisibile, setLsuDatePickerVisibility] = useState(false);

  const showLsuDatePicker = () => {
    setLsuDatePickerVisibility(true);
  };

  const hideLsuDatePicker = () => {
    setLsuDatePickerVisibility(false);
  };

  const handleLsuDateConfirm = (lsuTrainingDate) => {
    setLsuTrainingDate(moment(lsuTrainingDate).utc().format("YYYY-MM-DD"));
    hideLsuDatePicker();
  };

  const getLsuDate = () => {
    let tempDate = moment(lsuTrainingDate).toString().split(" ");
    return lsuTrainingDate ? lsuTrainingDate !== ""
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : false : <Text style={{ color: 'gray', fontWeight: "bold"}}>LSU Date</Text>;
  };
  //===================LSU training DATE END====================================//

  



  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const base64 = await FileSystem.readAsStringAsync(result.uri, { encoding: 'base64' });
      setImage(base64);
    }
  };


  return (
    <SafeAreaView
      style={{ height: "100%", backgroundColor: "#ffffff", flex: 1 }}
    >
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
                source={{uri: `data:image/png;base64,${image}`}}
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
            ) : (
              <Text>Add Photo</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="handled"
        style={{ height: "100%" }}
      >
        <View style={{ justifyContent: "center", marginLeft: 30 }}>
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

          <View>
            <TextInput
              style={styleOne.input}
              placeholder="School Name"
              value={myData.schoolName}
              placeholderTextColor="gray"
              placeholderStyle={{
              color: "grey",
               fontWeight: "bold"
                }}
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={staff_name}
              onChangeText={setStaff_Name}
              placeholder="Write Your Staff Name"
              placeholderTextColor="gray"
            />
          </View>

        

          <View style={{ margin: 20, right: 20 }}>
            <Text style={{ marginBottom: 12, marginLeft: 9 }}>
              Select Category
            </Text>
            <RadioButton
              gender={gender}
              options={["Male", "Female", "Other"]}
              horizontal={true}
              onChangeSelect={(opt) => {
                opt;
                setGender(opt);
              }}
            />
          </View>

          <View style={{ margin: 20, right: 20 }}>
            <Text style={{ marginBottom: 12, marginLeft: 9 }}>Religion</Text>
            <RadioButton
              gender={religion}
              options={["Muslim", "Non-Muslim"]}
              horizontal={true}
              onChangeSelect={(opt) => {
                opt;
                setReligion(opt);
              }}
            />
          </View>

          <View style={{ margin: 20, right: 20 }}>
            <Text style={{ marginBottom: 12, marginLeft: 9 }}>
              Marital Status
            </Text>
            <RadioButton
              gender={maritalStatus}
              options={["Married", "Un-married"]}
              horizontal={true}
              onChangeSelect={(opt) => {
                opt;
                setMaritalStatus(opt);
              }}
            />
          </View>

      
          
          <View style={{ ...(Platform.OS !== "android" && { zIndex: 10 }) }}>
            <CustomDropDown
              zIndex={14000}
              placeholder="Select Former Programm"
              open={formerProgrammOpen}
              value={formerProgram}
              items={programm}
              setOpen={setFormerProgrammOpen}
              setValue={setFormerProgramm}
              setItems={setProgramm}
            />
          </View>

          <View style={{ ...(Platform.OS !== "android" && { zIndex: 7 }) }}>
            <CustomDropDown
              zIndex={11000}
              placeholder="Select Qualification"
              open={teacherprofessionalQualificationshow}
              value={teacherQualification}
              items={qualifications}
              setOpen={setTeacherProfessionalQualificationShow}
              setValue={setTeacherQualification}
              setItems={setQualifications}
            />
          </View>

          <View style={{ ...(Platform.OS !== "android" && { zIndex: 5 }) }}>
            <CustomDropDown
              zIndex={9000}
              placeholder="Select a Proffesional Qualification"
              open={teacherQualificationShow}
              value={teacherprofessionalqualification}
              items={professionalQualifications}
              setOpen={setTeacherQualificationShow}
              setValue={setTeacherProfessionalQualification}
              setItems={setProfessionalQualifications}
            />
          </View>
       

          <View style={{ flex: 1, flexDirection: "row", margin: 10 }}>
            <Checkbox
              value={teacherTraining}
              onValueChange={() => setTeacherTraining(!teacherTraining)}
              color={teacherTraining ? "#5062BD" : undefined}
            />
            <Text> Does teacher do any training ? </Text>
          </View>
          <View>
            {teacherTraining ? (
              <>
                <View style={{ width: "90%" }}>
                  <TextInput
                    style={{
                      backgroundColor: "transparent",
                      padding: 15,
                      fontSize: 14,
                      fontWeight: "400",
                      borderBottomColor: "gray",
                      borderBottomWidth: 1,
                      marginBottom: 10,
                    }}
                    value={trainingnumber}
                    onChangeText={setTrainingNumber}
                    placeholder="How many training taken in SEF ?"
                    placeholderTextColor="gray"
                    keyboardType="numeric"
                  />
                </View>

                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity
                    onPress={showLsuDatePicker}
                    style={styleOne.input}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text>{getLsuDate()}</Text>
                      <Icon
                        style={{
                          color: "gray",
                          // left: 160,
                          // // paddingTop: 30
                        }}
                        name="calendar"
                        color="#c9c9c9"
                        size={30}
                      />
                    </View>
                  </TouchableOpacity>
                  <DateTimePickerModal
                    isVisible={isLsuDatePickerVisibile}
                    mode="date"
                    onConfirm={handleLsuDateConfirm}
                    onCancel={hideLsuDatePicker}
                    is24Hour={false}
                  />
                </View>

                <View>
                  <TextInput
                    style={styleOne.input}
                    value={trainInWhichSubject}
                    onChangeText={setTrainInWhichSubject}
                    placeholderTextColor="gray"
                    placeholder="Train in which Subject"
                  />
                </View>

                <View>
                  <TextInput
                    style={styleOne.input}
                    value={mentionTraining}
                    onChangeText={setMentiontraining}
                    placeholderTextColor="gray"
                    placeholder="Mention any training taken from other dept"
                  />
                </View>
              </>
            ) : null}
          </View>

          <View>
            <TextInput
              style={styleOne.input}
              value={father_name}
              onChangeText={setFather_Name}
              placeholderTextColor="gray"
              placeholder="Write Your Father Name"
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor="gray"
              placeholder="Write Your Email"
            />
          </View>
          <View style={{ flexDirection: 'row'}}>
            <TextInput
              style={styleOne.input}
              value={password}
              onChangeText={setPassword}
              placeholderTextColor="gray"
              placeholder="Write Your Password"
              secureTextEntry={passwordVisibility}
              keyboardType={"default"}
            />
             <Pressable style={{ marginTop: 23, right: 25}} onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons name={rightIcon} size={15} color="gray" />
        </Pressable>
          </View>
          <View style={{ flexDirection: 'row'}}>
            <TextInput
              style={styleOne.input}
              value={confirm_password}
              onChangeText={setconfirm_password}
              placeholderTextColor="gray"
              placeholder="Write Your Confirm Password"
              secureTextEntry={ConfpasswordVisibility}
              keyboardType={"default"}
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
              placeholderTextColor="gray"
              placeholder="Contact"
              keyboardType="numeric"
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={alt_contact}
              onChangeText={setAlt_Contact}
              placeholderTextColor="gray"
              placeholder="Emergency Contact"
              keyboardType="numeric"
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={address_1}
              onChangeText={setAdress_1}
              placeholderTextColor="gray"
              placeholder="Address 1"
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={address_2}
              onChangeText={setAdress_2}
              placeholderTextColor="gray"
              placeholder="Address 2"
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={cnic}
              onChangeText={setcnic}
              placeholderTextColor="gray"
              placeholder="cnic (XXXXX-XXXXXXX-X)"
              keyboardType="phone-pad"
            />
          </View>

          {/* <View style={{ flex: 1, flexDirection: "row", margin: 10 }}>
            <Checkbox
              value={vaccinated}
              onValueChange={() => setVaccinated(!vaccinated)}
              color={vaccinated ? "#5062BD" : undefined}
            />
            <Text> if , vaccinated</Text>
          </View>

          <View>
            {vaccinated ? (
              <>
                <View style={{ marginLeft: 20, marginTop: 10 }}>
                  <RadioButton
                    gender={vaccineshots}
                    options={["One Shot", "Two Shot"]}
                    horizontal={true}
                    onChangeSelect={(opt, i) => {
                      opt;
                      setVaccineShots(i);
                    }}
                  />
                </View>
                <View style={{ marginLeft: 20, marginTop: 10 }}>
                  <RadioButton
                    gender={vacinatedstatus}
                    options={["Fully Vaccinated", "Partially Vaccinated"]}
                    horizontal={true}
                    onChangeSelect={(opt, i) => {
                      opt;
                      setVaccinatedStatus(i);
                    }}
                  />
                </View>
              </>
            ) : null}
          </View> */}

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("AddTeacherFormStep2",{
                    division: selectDivision,
                    district: selectedDistricts,
                    tehsil : selectedTehsil,
                    schoolName : schoolName,
                    schoolId : schoolId,
                    staff_name : staff_name,
                    gender: gender,
                    religion: religion,
                    maritalStatus: maritalStatus,
                    teacherQualification: teacherQualification,
                    teacherprofessionalqualification: teacherprofessionalQualificationshow,
                    formerProgram: formerProgram,
                    teacherTraining: teacherTraining,
                    trainingnumber: trainingnumber,
                    lsuTrainingDate: lsuTrainingDate,
                    trainInWhichSubject: trainInWhichSubject,
                    mentionTraining: mentionTraining,
                    father_name: father_name,
                    email:email,
                    password:password,
                    confirm_password: confirm_password,
                    contact:contact,
                    image:image,
                    alt_contact:alt_contact,
                    address_1: address_1,
                    address_2: address_2,
                    cnic: cnic


              })}
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: 15,
                width: "90%",
                borderRadius: 50,
                marginBottom: 50,
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
                Next
              </Text>
            </TouchableOpacity>
          </View>
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

  itemStyle: {
    fontSize: 10,
    color: "#007aff",
  },
  pickerStyle: {
    width: "95%",
    height: Platform.OS === "ios" ? 20 : 40,
    color: "black",
    borderBottomWidth: Platform.OS === "ios" ? 0 : 1,
    fontSize: 14,
  },
  textStyle: {
    fontSize: 14,
    fontFamily: "Roboto-Regular",
  },
});

export default TeacherRegister;
