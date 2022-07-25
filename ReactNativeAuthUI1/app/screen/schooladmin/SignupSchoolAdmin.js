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
import React, { useState, useEffect,useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles, toastConfig } from "../../../style";
import Toast from "react-native-toast-message";
import { useRegisterSchoolAdminMutation } from "../../../services/userAuthApi";
import { storeToken } from "../../../services/AsyncStorageService";
import Icon from "react-native-vector-icons/AntDesign";
import * as ImagePicker from "expo-image-picker";


import { useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { LogBox } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SearchableDropdown from "react-native-searchable-dropdown";
import RadioButton from "../../Components/RadioButton";
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Checkbox from "expo-checkbox";

const SignUpSchoolAdmin = ({route}) => {
  // const [first_name, setfirst_name] = useState("");
  // const [last_name, setlast_name] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirm_password, setconfirm_password] = useState("");
  // const [contact, setContact] = useState("");
  // const [alt_contact, setAlt_Contact] = useState("");
  // const [address_1, setAdress_1] = useState("");
  // const [address_2, setAdress_2] = useState("");
  // const [cnic, setcnic] = useState("");
  // const [city, setCity] = useState("");
  // const [image, setImage] = useState();
  // const [schoolId, setSchoolId] = useState("")
  // const[schoolName, setSchoolName]=useState("")

  const [S_NO, setS_NO] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setconfirm_password] = useState("");
  const [father_husband, setFather_Husband] = useState("");
  const [contact, setContact] = useState("");
  const [alt_contact, setAlt_Contact] = useState("");
  const [cnic, setcnic] = useState("");
  const [image, setImage] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [schoolId, setSchoolId] = useState("");
  const [gender, setGender] = useState("");
  const [religion, setRegion] = useState("");
  const [dateofbirth, setDateOfBirth] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [salaryPaymentMethod, setSalaryPaymentMethod] = useState("");
  const [bankName, setBankName] = useState("");
  
  // const focus = useIsFocused();
  // const myData = useSelector((state) => state.schoolAdmin);
  // useEffect(() => {
  //   setSchoolId(myData.schoolId);
  //   setSchoolName(myData.schoolName);
  // }, [focus]);

  // useEffect(() => {
  //   LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  // }, []);

  //asdasdasd

    //=====================clear text input================================//

  //=====================Date picker function================================//
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (dateofbirth) => {
    setDateOfBirth(moment(dateofbirth).utc().format("YYYY-MM-DD"));
    hideDatePicker();
    
  };

  const getDate = () => {
    let tempDate = moment(dateofbirth).toString().split(" ");
    return dateofbirth !== ""
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : false;
  };
  //===============================END DATE OF BIRTH========================//
  //=================== date of joining===============================//

   //=========================end programms=============================================//
  //=========================programs=============================================//
  const [qualificationshow, setQualificationshow] = useState([]);
  const [teacherQualification, setTeacherQualification] = useState([]);
  const [qualifications, setQualifications] = useState([
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

  //=========================programs=============================================//
  const [professhow, setProfesshow] = useState("");
  const [
    teacherprofessionalqualification,
    setTeacherProfessionalQualification,
  ] = useState([]);
  const [professionalQualifications, setProfessionalQualifications] = useState([
    { label: "B.ED", value: "B.ED" },
    { label: "M.ED", value: "M.ED" },
    { label: "DIT", value: "DIT" },
  ]);

  //=========================end programms=============================================//



  

  const clearTextInput = () => {
    S_NO("");
    setfirst_name("");
    setlast_name("");
    setEmail("");
    setPassword("");
    setSchoolName("");
    setSchoolId("");
    setconfirm_password("");
    setFather_Husband("");
    setContact("");
    setAlt_Contact("");
    setcnic("");
    setImage("");
    setGender("");
    setRegion("");
    setMaritalStatus("");
    setDateOfBirth("");
    setTeacherQualification("");
    setTeacherProfessionalQualification("");
    setBankName("");
    setSalaryPaymentMethod("");


  };
  const navigation = useNavigation();

  const [registerSchoolAdmin] = useRegisterSchoolAdminMutation();

  const handleFormSubmit = async () => {
    if (first_name && email && password && confirm_password ) {
      if (password === confirm_password) {
        const formData = {
          S_NO,
          first_name,
          last_name,
          email,
          password,
          confirm_password,
          contact,
          image,
          alt_contact,
          cnic,
          schoolId,
          schoolName,
          gender,
          religion,
          maritalStatus,
          dateofbirth,
          teacherQualification,
          teacherprofessionalqualification,
          bankName,
          father_husband
        };
        const res = await registerSchoolAdmin(formData);
        if (res.data.status === "success") {
          await storeToken(res.data.token); // Store Token in Storage
          clearTextInput();
          navigation.goBack();
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

  useEffect(()=>{
    setSchoolId(route.params.schoolid)
    setSchoolName(route.params.schoolName)
  })
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

  // Distrct Section Here
  const [districts, setDistricts] = useState([]);
  const [tehsil, setTehsil] = useState([]);

  const citiesDropdownRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      setDistricts([
        {
          title: "Badin District",
          tehsil: [
            { title: "Badin Tehsil" },
            { title: "Khoski Tehsil" },
            { title: "Matli Tehsil" },
            { title: "Shaheed Fazil Rahu Tehsil" },
            { title: "Talhar Tehsil" },
            { title: "Tando Bago Tehsil" },
          ],
        },
        {
          title: "Sujawal District",
          tehsil: [
            { title: "Jati Tehsil" },
            { title: "Kharo Chan Tehsil" },
            { title: "Mirpur Bathoro Tehsil" },
            { title: "Shah Bandar Tehsil" },
            { title: "Sujawal Tehsil" },
          ],
        },
        {
          title: "Thatta District",
          tehsil: [
            { title: "Ghorabari Tehsil" },
            { title: "Keti Bunder" },
            { title: "Mirpur Sakro Tehsil" },
            { title: "Thatta Tehsil" },
          ],
        },
        {
          title: "Dadu District",
          tehsil: [
            { title: "Dadu Tehsil" },
            { title: "Johi Tehsil" },
            { title: "Khairpur Nathan Shah Tehsil" },
            { title: "Mehar Tehsil" },
          ],
        },
        {
          title: "Hyderabad District",
          tehsil: [
            { title: "Hyderabad City Tehsil" },
            { title: "Hyderabad Tehsil" },
            { title: "Latifabad Tehsil" },
            { title: "Qasimabad Tehsil" },
          ],
        },
        {
          title: "Jamshoro District",
          tehsil: [
            { title: "Jamshoro Tehsil" },
            { title: "Sehwan Tehsil" },
            { title: "Kotri Tehsil" },
            { title: "Manjhand Tehsil" },
            { title: "Thana Bulla Khan Tehsil" },
          ],
        },
        {
          title: "Matiari District",
          tehsil: [
            { title: "Hala Tehsil" },
            { title: "Matiari Tehsil" },
            { title: "Saeedabad Tehsil" },
          ],
        },
        {
          title: "Tando Allahyar District",
          tehsil: [
            { title: "Chamber Tehsil" },
            { title: "Jhando Mari Tehsil" },
            { title: "Tando Allahyar Tehsil " },
            { title: "Nasarpur Tehsil" },
          ],
        },
        {
          title: "Tando Muhammad Khan District",
          tehsil: [
            { title: "Bulri Shah Karim Tehsil" },
            { title: "Tando Ghulam Hyder Tehsil" },
            { title: "Tando Mohammad Khan Tehsil" },
          ],
        },
        {
          title: "Karachi Central District",
          tehsil: [
            { title: "Gulberg Town" },
            { title: "Liaquatabad Town" },
            { title: "New Karachi Town" },
            { title: "North Nazimabad Town" },
            { title: "Nazimabad" },
          ],
        },
        {
          title: "Karachi East District",
          tehsil: [
            { title: "Gulshan Town" },
            { title: "Jamshed Town" },
            { title: "Ferozabad" },
            { title: "Gulshan-E-Iqbal" },
            { title: "Gulzar-E-Hijri" },
          ],
        },
        {
          title: "Karachi South District",
          tehsil: [
            { title: "Lyari Town" },
            { title: "Saddar Town" },
            { title: "Aram Bagh" },
            { title: "Civil Line" },
            { title: "Garden" },
          ],
        },
        {
          title: "Karachi West District",
          tehsil: [
            { title: "Orangi Town" },
            { title: "Manghopir" },
            { title: "Maripur" },
            { title: "Mominabad" },
          ],
        },
        {
          title: "Korangi District",
          tehsil: [
            { title: "Model Colony" },
            { title: "Shah Faisal Town" },
            { title: "Landhi Town" },
            { title: "Korangi Town" },
          ],
        },
        {
          title: "Malir District",
          tehsil: [
            { title: "Bin Qasim Town" },
            { title: "Gadap Town" },
            { title: "Malir Town" },
            { title: "Jinnah" },
            { title: "Ibrahim Hyderi" },
            { title: "Murad Memon" },
            { title: "Shah Murad" },
          ],
        },
        {
          title: "Keamari District",
          tehsil: [
            { title: "Keamari Town" },
            { title: "Baldia Town" },
            { title: "S.I.T.E. Town" },
            { title: "Karachi Fish Harbour" },
          ],
        },
        {
          title: "Jacobabad District",
          tehsil: [
            { title: "Garhi Khairo Tehsil" },
            { title: "Jacobabad Tehsil" },
            { title: "Thul Tehsil" },
          ],
        },
        {
          title: "Kashmore District",
          tehsil: [
            { title: "Tangwani Tehsil" },
            { title: "Kashmore Tehsil" },
            { title: "Kandhkot Tehsil" },
          ],
        },
        {
          title: "Larkana District",
          tehsil: [
            { title: "Bakrani Tehsil" },
            { title: "Dokri Tehsil" },
            { title: "Larkana Tehsil" },
            { title: "Ratodero Tehsil" },
          ],
        },
        {
          title: "Qambar-Shahdadkot District",
          tehsil: [
            { title: "Mirokhan Tehsil" },
            { title: "Nasirabad Tehsil" },
            { title: "Qambar Tehsil" },
            { title: "Qubo Saeed Khan Tehsil" },
            { title: "Shahdadkot Tehsil" },
            { title: "Sijawal Junejo Tehsil" },
            { title: "Warah Tehsil" },
          ],
        },
        {
          title: "Shikarpur District",
          tehsil: [
            { title: "Garhi Yasin Tehsil" },
            { title: "Khanpur Tehsil" },
            { title: "Lakhi Tehsil" },
            { title: "Shikarpur Tehsil" },
          ],
        },
        {
          title: "Mirpur Khas District",
          tehsil: [
            { title: "Digri Tehsil" },
            { title: "Jhuddo Tehsil" },
            { title: "Kot Ghulam Muhammad Tehsil" },
            { title: "Mirpur Khas Tehsil" },
            { title: "Shujabad Tehsil" },
            { title: "Sindhri Tehsil" },
          ],
        },
        {
          title: "Tharparkar District",
          tehsil: [
            { title: "Chachro Tehsil" },
            { title: "Dahli Tehsil" },
            { title: "Diplo Tehsil" },
            { title: "Kaloi Tehsil" },
            { title: "Islamkot Tehsil" },
            { title: "Mithi Tehsil" },
            { title: "Nagarparkar Tehsil" },
          ],
        },
        {
          title: "Umerkot District",
          tehsil: [
            { title: "Kunri Tehsil" },
            { title: "Pithoro Tehsil" },
            { title: "Samaro Tehsil" },
            { title: "Umerkot Tehsil" },
          ],
        },
        {
          title: "Ghotki District",
          tehsil: [
            { title: "Daharki Tehsil" },
            { title: "Ghotki Tehsil" },
            { title: "Khangarh Tehsil (Khanpur)" },
            { title: "Mirpur Mathelo Tehsil" },
            { title: "Ubauro Tehsil" },
          ],
        },
        {
          title: "Khairpur Mirs District",
          tehsil: [
            { title: "Faiz Ganj Tehsil" },
            { title: "Gambat Tehsil" },
            { title: "Khairpur Tehsil Mirs" },
            { title: "Kingri Tehsil" },
            { title: "Kot Diji Tehsil" },
            { title: "Nara Tehsil" },
            { title: "Sobho Dero Tehsil" },
            { title: "Thari Mirwah Tehsil" },
          ],
        },
        {
          title: "Sukkur District",
          tehsil: [
            { title: "New Sukkur Tehsil" },
            { title: "Pano Aqil Tehsil" },
            { title: "Rohri Tehsil" },
            { title: "Salehpat Tehsil" },
            { title: "Sukkur Tehsil" },
          ],
        },
        {
          title: "Naushahro Feroze District",
          tehsil: [
            { title: "Bhiria Tehsil" },
            { title: "Kandioro Tehsil" },
            { title: "Mehrabpur Tehsil" },
            { title: "Moro Tehsil" },
            { title: "Naushahro Feroze Tehsil" },
          ],
        },
        {
          title: "Shaheed Benazir Abad District",
          tehsil: [
            { title: "Daulatpur Tehsil (Qazi Ahmed)" },
            { title: "Daur Tehsil" },
            { title: "Nawabshah Tehsil" },
            { title: "Sakrand Tehsil" },
          ],
        },
        {
          title: "Sanghar District",
          tehsil: [
            { title: "Jam Nawaz Ali Tehsil" },
            { title: "Khipro Tehsil" },
            { title: "Sanghar Tehsil" },
            { title: "Shahdadpur Tehsil" },
            { title: "Sinjhoro Tehsil" },
            { title: "Tando Adam Khan Tehsil" },
          ],
        },
      ]);
    }, 1000);
  }, []);
  // Distrct Section End 

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


      <ScrollView
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="handled"
        style={{ height: "100%" }}
      >
        <View style={{ justifyContent: "center", marginLeft: 30 }}>
          {/* <View>
            <CustomDropdown
              zIndex={3000}
              zIndexInverse={1000}
              open={open}
              value={region}
              items={items}
              setOpen={setOpen}
              setValue={setRegion}
              setItems={setItems}
            />
          </View> */}

        

          <View>
            <TextInput
              style={styleOne.input}
              value={route.params.schoolName}
              onChangeText={setSchoolName}
              placeholderTextColor='gray'
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={S_NO}
              onChangeText={setS_NO}
              placeholder="S_No"
              placeholderTextColor="gray"
              keyboardType="numeric"
            />
          </View>
          <View style={styleOne.dropdownsRow}>
            <SelectDropdown
              data={districts}
              onSelect={(selectedItem, index) => {
                citiesDropdownRef.current.reset();
                setTehsil([]);
                setTehsil(selectedItem.tehsil);
              }}
              defaultButtonText={"Select Province"}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem.title;
              }}
              rowTextForSelection={(item, index) => {
                return item.title;
              }}
              buttonStyle={styleOne.dropdown1BtnStyle}
              buttonTextStyle={styleOne.dropdown1BtnTxtStyle}
              renderDropdownIcon={(isOpened) => {
                return (
                  <FontAwesome
                    name={isOpened ? "chevron-up" : "chevron-down"}
                    color={"#444"}
                    size={18}
                  />
                );
              }}
              dropdownIconPosition={"right"}
              dropdownStyle={styleOne.dropdown1DropdownStyle}
              rowStyle={styleOne.dropdown1RowStyle}
              rowTextStyle={styleOne.dropdown1RowTxtStyle}
            />
            <View style={styleOne.divider} />
            <SearchableDropdown
              ref={citiesDropdownRef}
              data={tehsil}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText={"Select District"}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem.title;
              }}
              rowTextForSelection={(item, index) => {
                return item.title;
              }}
              buttonStyle={styleOne.dropdown2BtnStyle}
              buttonTextStyle={styleOne.dropdown2BtnTxtStyle}
              renderDropdownIcon={(isOpened) => {
                return (
                  <FontAwesome
                    name={isOpened ? "chevron-up" : "chevron-down"}
                    color={"#444"}
                    size={18}
                  />
                );
              }}
              dropdownIconPosition={"right"}
              dropdownStyle={styleOne.dropdown2DropdownStyle}
              rowStyle={styleOne.dropdown2RowStyle}
              rowTextStyle={styleOne.dropdown2RowTxtStyle}
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={first_name}
              onChangeText={setfirst_name}
              placeholder="First Name"
              placeholderTextColor="gray"
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={last_name}
              onChangeText={setlast_name}
              placeholder="Last Name"
              placeholderTextColor="gray"
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
          <View>
            <TextInput
              style={styleOne.input}
              value={password}
              onChangeText={setPassword}
              placeholderTextColor="gray"
              placeholder="Write Your Password"
              secureTextEntry={true}
              keyboardType={"default"}
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={confirm_password}
              onChangeText={setconfirm_password}
              placeholderTextColor="gray"
              placeholder="Write Your Confirm Password"
              secureTextEntry={true}
              keyboardType={"default"}
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={father_husband}
              onChangeText={setFather_Husband}
              placeholder="Father/Husband Name"
              placeholderTextColor="gray"
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
          <View style={styleOne.input}>
          <View style={{ margin: 5, right: 20 }}>
            <Text style={{ marginBottom: 12, marginLeft: 9 }}>
              Select Gender
            </Text>
            <RadioButton
              gender={gender}
              options={["Male", "Female", "Other"]}
              horizontal={true}
              onChangeSelect={(opt, i) => {
                opt;
                setGender(i);
              }}
            />
          </View>
          </View>
          <View style={styleOne.input}>
          <View style={{ margin: 5, right: 20 }}>
            <Text style={{ marginBottom: 8, marginLeft: 9 }}>Religion</Text>
            <RadioButton
              gender={religion}
              options={["Muslim", "Non-Muslim"]}
              horizontal={true}
              onChangeSelect={(opt, i) => {
                opt;
                setRegion(i);
              }}
            />
          </View>
          </View>
          <View style={styleOne.input}>
          <View style={{ margin: 5, right: 20 }}>
            <Text style={{ marginBottom: 12, marginLeft: 9 }}>
              Marital Status
            </Text>
            <RadioButton
              gender={maritalStatus}
              options={["Married", "Un-married"]}
              horizontal={true}
              onChangeSelect={(opt, i) => {
                opt;
                setMaritalStatus(i);
              }}
            />
          </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={showDatePicker} style={styleOne.input}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>{getDate()}</Text>
                <Text style={{
                 right:98,
                 top:10
                }}>Date of Birth</Text>
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
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              is24Hour={false}
              placeholder="heloooo"
          
            />
          </View>
          {/* <View>
            <CustomDropdown
              searchable={true}
              placeholder="Qualification"
              zIndex={10000}
              zIndexInverse={1000}
              open={qualificationshow}
              value={teacherQualification}
              items={qualifications}
              setOpen={setQualificationshow}
              setValue={setTeacherQualification}
              setItems={setQualifications}
            />
            
          </View>
          

          <View>
            <CustomDropdown
              placeholder="Professional Qualification"
              zIndex={5000}
              zIndexInverse={1000}
              open={professhow}
              value={teacherprofessionalqualification}
              items={professionalQualifications}
              setOpen={setProfesshow}
              setValue={setTeacherProfessionalQualification}
              setItems={setProfessionalQualifications}
            />
          </View> */}


          <View style={{ margin: 20, right: 20 }}>
            <Text style={{ marginBottom: 12, marginLeft: 9 }}>
              {" "}
              Salary Disbursed
            </Text>
            <RadioButton
              gender={salaryPaymentMethod}
              options={["Cash", "Online"]}
              horizontal={true}
              onChangeSelect={(opt, i) => {
                opt;
                setSalaryPaymentMethod(i);
              }}
            />
          </View>

          <View>
            {salaryPaymentMethod ? (
              <>
                <View>
                  <TextInput
                    style={styleOne.input}
                    value={bankName}
                    onChangeText={setBankName}
                    placeholderTextColor="gray"
                    placeholder="Bank Name"
                  />
                </View>
              </>
            ) : null}
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

export default SignUpSchoolAdmin;
