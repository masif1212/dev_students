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
import { useRegisterSchoolAdminMutation } from "../../../services/userAuthApi.js";
import { storeToken } from "../../../services/AsyncStorageService.js";
import Icon from "react-native-vector-icons/AntDesign";
import * as ImagePicker from "expo-image-picker";

import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SearchableDropdown from "react-native-searchable-dropdown";
import RadioButton from "../../Components/RadioButton.js";
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CustomDropDown from "../../Components/CustomDropdown";

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
  const [accounttitle, setAccountTitle] = useState("");
  const [salaryPaymentMethod, setSalaryPaymentMethod] = useState("");
  const [ibanAccount, setIbanAccount] = useState("");
  const [bankaccountnumber, setBankAccountNumber] = useState("");
  
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

  //=========================programs=============================================//
  const[teacherQualificationShow, setTeacherQualificationShow]=useState("")
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
    fetch(
      "https://api.countrystatecity.in/v1/countries/PK/cities",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setBankCities(result))
      .catch((error) => console.log("error", error));
  });

 //=========================Bank Names=============================================//
 const [bankNameShow, setBankNameShow] = useState("");
 const [bankname, setBankName] = useState("");
 const [banknames, setBankNames] = useState([
   { label: "Select Bank Name", value: "Select Bank Name" },
   { label: "Al Baraka Bank Limited", value: "Al Baraka Bank Limited" },
   { label: "Allied Bank Limited", value: "Allied Bank Limited" },
   { label: "Askari Bank", value: "Askari Bank" },
   { label: "Bank Alfalah Limited", value: "Bank Alfalah Limited" },
   { label: "Bank Al Habib Limited", value: "Bank Al Habib Limited" },
   {
     label: "BankIslami Pakistan Limited",
     value: "BankIslami Pakistan Limited",
   },
   { label: "Citi Bank", value: "Citi Bank" },
   { label: "Deutsche Bank A.G", value: "Deutsche Bank A.G" },
   {
     label: "The Bank of Tokyo-Mitsubishi UFJ",
     value: "The Bank of Tokyo-Mitsubishi UFJ",
   },
   {
     label: "Dubai Islamic Bank Pakistan Limited",
     value: "Dubai Islamic Bank Pakistan Limited",
   },
   { label: "Faysal Bank Limited", value: "Faysal Bank Limited" },
   { label: "First Women Bank Limited", value: "First Women Bank Limited" },
   { label: "Habib Bank Limited", value: "Habib Bank Limited" },
   {
     label: "Standard Chartered Bank Limited",
     value: "Standard Chartered Bank Limited",
   },
   {
     label: "Habib Mteropolitan Bank Limited",
     value: "Habib Mteropolitan Bank Limited",
   },
   {
     label: "Industrial and commercial Bank of China",
     value: "Industrial and commercial Bank of China",
   },
   {
     label: "Industrial Developmnet Bank of Pakistan",
     value: "Industrial Developmnet Bank of Pakistan",
   },
   { label: "JS Bank Limited", value: "JS Bank Limited" },
   { label: "MCB Bank Limited", value: "MCB Bank Limited" },
   { label: "MCB Islamic  Bank Limited", value: "MCB Islamic  Bank Limited" },
   { label: "Mezan Bank Limited", value: "Mezan Bank Limited" },
   { label: "National Bank of Pakistan", value: "National Bank of Pakistan" },
 ]);
 //=========================end Bank Names=============================================//

 //=========================Bank Names=============================================//
 const [bankCityShow, setBankCityShow] = useState("");
 const [bankcity, setBankCity] = useState("");
 const [bankCities, setBankCities] = useState([
   { label: "Select Bank City", value: "Select Bank City", id: 1 },
 ]);
 //=========================end Bank Names=============================================//
 //=========================Bank Names=============================================//
 const [bankDistrictShow, setBankDistrictShow] = useState("");
 const [bankdistrict, setBankDistrict] = useState("");
 const [bankdistricts, setBankDistricts] = useState([
   { label: "Select District", label: "Select District" },
   { label: "BANNU DISTRICT", label: "BANNU DISTRICT" },
   { label: "DERA ISMAIL KHAN DISTRICT", label: "DERA ISMAIL KHAN DISTRICT" },
   { label: "LAKKI MARWAT DISTRICT", value: "LAKKI MARWAT DISTRICT" },
   { label: "TANK DISTRICT", value: "TANK DISTRICT" },
   { label: "ABBOTTABAD DISTRICT", value: "ABBOTTABAD DISTRICT" },
   { label: "BATAGRAM DISTRICT", value: "BATAGRAM DISTRICT" },
   { label: "HARIPUR DISTRICT", value: "HARIPUR DISTRICT" },
   { label: "MANSEHRA DISTRICT", value: "MANSEHRA DISTRICT" },
   { label: "TORGHAR DISTRICT", value: "TORGHAR DISTRICT" },
   { label: "KOHISTAN DISTRICT", value: "KOHISTAN DISTRICT" },
   { label: "HANGU DISTRICT", value: "HANGU DISTRICT" },
   { label: "KARAK DISTRICT", value: "KARAK DISTRICT" },
   { label: "KOHAT DISTRICT", value: "KOHAT DISTRICT" },
   { label: "MARDAN DISTRICT", value: "MARDAN DISTRICT" },
   { label: "SWABI DISTRICT", value: "SWABI DISTRICT" },
   { label: "CHARSADDA DISTRICT", value: "CHARSADDA DISTRICT" },
   { label: "NOWSHERA DISTRICT", value: "NOWSHERA DISTRICT" },
   { label: "PESHAWAR DISTRICT", value: "PESHAWAR DISTRICT" },
   { label: "BUNER DISTRICT", value: "BUNER DISTRICT" },
   { label: "CHITRAL DISTRICT", value: "CHITRAL DISTRICT" },
   { label: "SHANGLA DISTRICT", value: "SHANGLA DISTRICT" },
   { label: "SWAT DISTRICT", value: "SWAT DISTRICT" },
   { label: "MALAKAND PROTECTED AREA", value: "MALAKAND PROTECTED AREA" },
   { label: "KHYBER AGENCY", value: "KHYBER AGENCY" },
   { label: "KURRAM AGENCY", value: "KURRAM AGENCY" },
   { label: "MOHMAND AGENCY", value: "MOHMAND AGENCY" },
   { label: "NORTH WAZIRISTAN AGENCY", value: "NORTH WAZIRISTAN AGENCY" },
   { label: "ORAKZAI AGENCY", value: "ORAKZAI AGENCY" },
   { label: "SOUTH WAZIRISTAN AGENCY", value: "SOUTH WAZIRISTAN AGENCY" },
   { label: "BAJAUR AGENCY", value: "BAJAUR AGENCY" },
   { label: "BANNU", value: "FR BANNU" },
   { label: "D.I.KHAN", value: "FR D.I.KHAN" },
   { label: "KOHAT", value: "KOHAT" },
   { label: "LAKKI MARWAT", value: "LAKKI MARWAT" },
   { label: "PESHAWAR", value: "PESHAWAR" },
   { label: "TANK", value: "TANK" },
   { label: "ATTOCK DISTRICT", value: "ATTOCK DISTRICT" },
   { label: "CHAKWAL DISTRICT", value: "CHAKWAL DISTRICT" },
   { label: "JHELUM DISTRICT", value: "JHELUM DISTRICT" },
   { label: "RAWALPINDI DISTRICT", value: "RAWALPINDI DISTRICT" },
   { label: "BHAKKAR DISTRICT", value: "BHAKKAR DISTRICT" },
   { label: "KHUSHAB DISTRICT", value: "KHUSHAB DISTRICT" },
   { label: "SARGODHA DISTRICT", value: "SARGODHA DISTRICT" },
   { label: "MIANWALI DISTRICT", value: "MIANWALI DISTRICT" },
   { label: "GUJRANWALA DISTRICT", value: "GUJRANWALA DISTRICT" },
   { label: "GUJRAT DISTRICT", value: "GUJRAT DISTRICT" },
   { label: "HAFIZABAD DISTRICT", value: "HAFIZABAD DISTRICT" },
   { label: "MANDI BAHAUDDIN DISTRICT", value: "MANDI BAHAUDDIN DISTRICT" },
   { label: "NAROWAL DISTRICT", value: "NAROWAL DISTRICT" },
   { label: "SIALKOT DISTRICT", value: "SIALKOT DISTRICT" },
   { label: "LAHORE DISTRICT", value: "LAHORE DISTRICT" },
   { label: "KASUR DISTRICT", value: "KASUR DISTRICT" },
   { label: "NANKANA SAHIB DISTRICT", value: "NANKANA SAHIB DISTRICT" },
   { label: "SHEIKHUPURA DISTRICT", value: "SHEIKHUPURA DISTRICT" },
   { label: "FAISALABAD DISTRICT", value: "FAISALABAD DISTRICT" },
   { label: "CHINIOT DISTRICT", value: "CHINIOT DISTRICT" },
   { label: "JHANG DISTRICT", value: "JHANG DISTRICT" },
   { label: "TOBA TEK SINGH DISTRICT", value: "TOBA TEK SINGH DISTRICT" },
   { label: "SAHIWAL DISTRICT", value: "SAHIWAL DISTRICT" },
   { label: "OKARA DISTRICT", value: "OKARA DISTRICT" },
   { label: "PAKPATTAN DISTRICT", value: "PAKPATTAN DISTRICT" },
   { label: "BAHAWALNAGAR DISTRICT", value: "BAHAWALNAGAR DISTRICT" },
   { label: "BAHAWALPUR DISTRICT", value: "BAHAWALPUR DISTRICT" },
   { label: "RAHIM YAR KHAN DISTRICT", value: "RAHIM YAR KHAN DISTRICT" },
   { label: "DERA GHAZI KHAN DISTRICT", value: "DERA GHAZI KHAN DISTRICT" },
   { label: "RAJANPUR DISTRICT", value: "RAJANPUR DISTRICT" },
   { label: "LAYYAH DISTRICT", value: "LAYYAH DISTRICT" },
   { label: "MUZAFFARGARH DISTRICT", value: "MUZAFFARGARH DISTRICT" },
   { label: "MULTAN DISTRICT", value: "MULTAN DISTRICT" },
   { label: "KHANEWAL DISTRICT", value: "KHANEWAL DISTRICT" },
   { label: "LODHRAN DISTRICT", value: "LODHRAN DISTRICT" },
   { label: "VEHARI DISTRICT", value: "VEHARI DISTRICT" },
   { label: "JACOBABAD DISTRICT", value: "JACOBABAD DISTRICT" },
   { label: "KASHMOR DISTRICT", value: "KASHMOR DISTRICT" },
   {
     label: "KAMBAR SHAHDAD KOT DISTRICT",
     value: "KAMBAR SHAHDAD KOT DISTRICT",
   },
   { label: "LARKANA DISTRICT", value: "LARKANA DISTRICT" },
   { label: "SHIKARPUR DISTRICT", value: "SHIKARPUR DISTRICT" },
   { label: "GHOTKI DISTRICT", value: "GHOTKI DISTRICT" },
   { label: "KHAIRPUR DISTRICT", value: "KHAIRPUR DISTRICT" },
   { label: "SUKKUR DISTRICT", value: "SUKKUR DISTRICT" },
   { label: "BADIN DISTRICT", value: "BADIN DISTRICT" },
   { label: "DADU DISTRICT", value: "DADU DISTRICT" },
   { label: "HYDERABAD DISTRICT", value: "HYDERABAD DISTRICT" },
   { label: "JAMSHORO DISTRICT", value: "JAMSHORO DISTRICT" },
   { label: "MATIARI DISTRICT", value: "MATIARI DISTRICT" },
   { label: "SUJAWAL DISTRICT", value: "SUJAWAL DISTRICT" },
   { label: "TANDO ALLAHYAR DISTRICT", value: "TANDO ALLAHYAR DISTRICT" },
   {
     label: "TANDO MUHAMMAD KHAN DISTRICT",
     value: "TANDO MUHAMMAD KHAN DISTRICT",
   },
   { label: "THATTA DISTRICT", value: "THATTA DISTRICT" },
   { label: "KARACHI CENTRAL DISTRICT", value: "KARACHI CENTRAL DISTRICT" },
   { label: "KARACHI EAST DISTRICT", value: "KARACHI EAST DISTRICT" },
   { label: "KARACHI SOUTH DISTRICT", value: "KARACHI SOUTH DISTRICT" },
   { label: "KARACHI WEST DISTRICT", value: "KARACHI WEST DISTRICT" },
   { label: "KORANGI DISTRICT", value: "KORANGI DISTRICT" },
   { label: "MALIR DISTRICT", value: "MALIR DISTRICT" },
   { label: "MIRPUR KHAS DISTRICT", value: "MIRPUR KHAS DISTRICT" },
   { label: "THARPARKAR DISTRICT", value: "THARPARKAR DISTRICT" },
   { label: "UMER KOT DISTRICT", value: "UMER KOT DISTRICT" },
   { label: "SANGHAR DISTRICT", value: "SANGHAR DISTRICT" },
   { label: "NAUSHAHRO FEROZE DISTRICT", value: "NAUSHAHRO FEROZE DISTRICT" },
   {
     label: "SHAHEED BENAZIRABAD DISTRICT",
     value: "SHAHEED BENAZIRABAD DISTRICT",
   },
   { label: "AWARAN DISTRICT", value: "AWARAN DISTRICT" },
   { label: "KALAT DISTRICT", value: "KALAT DISTRICT" },
   { label: "KHARAN DISTRICT", value: "KHARAN DISTRICT" },
   { label: "KHUZDAR DISTRICT", value: "KHUZDAR DISTRICT" },
   { label: "LASBELA DISTRICT", value: "LASBELA DISTRICT" },
   { label: "MASTUNG DISTRICT", value: "MASTUNG DISTRICT" },
   { label: "WASHUK DISTRICT", value: "WASHUK DISTRICT" },
   { label: "GWADAR DISTRICT", value: "GWADAR DISTRICT" },
   { label: "KECH DISTRICT", value: "KECH DISTRICT" },
   { label: "PANJGUR DISTRICT", value: "PANJGUR DISTRICT" },
   { label: "JAFFARABAD DISTRICT", value: "JAFFARABAD DISTRICT" },
   { label: "JHAL MAGSI DISTRICT", value: "JHAL MAGSI DISTRICT" },
   { label: "KACHHI DISTRICT", value: "KACHHI DISTRICT" },
   { label: "NASIRABAD DISTRICT", value: "NASIRABAD DISTRICT" },
   { label: "SOHBATPUR DISTRICT", value: "SOHBATPUR DISTRICT" },
   { label: "CHAGAI DISTRICT", value: "CHAGAI DISTRICT" },
   { label: "KILLA ABDULLAH DISTRICT", value: "KILLA ABDULLAH DISTRICT" },
   { label: "NUSHKI DISTRICT", value: "NUSHKI DISTRICT" },
   { label: "PISHIN DISTRICT", value: "PISHIN DISTRICT" },
   { label: "QUETTA DISTRICT", value: "QUETTA DISTRICT" },
   { label: "DERA BUGTI DISTRICT", value: "DERA BUGTI DISTRICT" },
   { label: "HARNAI DISTRICT", value: "HARNAI DISTRICT" },
   { label: "KOHLU DISTRICT", value: "KOHLU DISTRICT" },
   { label: "SIBI DISTRICT", value: "SIBI DISTRICT" },
   { label: "ZIARAT DISTRICT", value: "ZIARAT DISTRICT" },
   { label: "BARKHAN DISTRICT", value: "BARKHAN DISTRICT" },
   { label: "KILLA SAIFULLAH DISTRICT", value: "KILLA SAIFULLAH DISTRICT" },
   { label: "LORALAI DISTRICT", value: "LORALAI DISTRICT" },
   { label: "MUSAKHEL DISTRICT", value: "MUSAKHEL DISTRICT" },
   { label: "SHERANI DISTRICT", value: "SHERANI DISTRICT" },
   { label: "ZHOB DISTRICT", value: "ZHOB DISTRICT" },
   { label: "ISLAMABAD", value: "ISLAMABAD" },
 ]);
 //=========================end Bank Names=============================================//





  

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
    // setBankName("");
    // setSalaryPaymentMethod("");
    // setAccountTitle("");
    // setIbanAccount("");
    // setBankAccountNumber("");
    // setBankDistrict("");
    // setBankCity("");
    setSelectedDistricts("");

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
          // bankname,
          father_husband,
          // accounttitle,
          // ibanAccount,
          // bankaccountnumber,
          // bankcity,
          // bankdistrict,
          // salaryPaymentMethod,
          selectedDistricts

        };

        fetch('http://192.168.18.64:8000/api/user/schooladmin', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        
        
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
              onChangeSelect={(opt) => {
                opt;
                setGender(opt);
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
              onChangeSelect={(opt) => {
                opt;
                setRegion(opt);
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
              onChangeSelect={(opt) => {
                opt;
                setMaritalStatus(opt);
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
    
          <View style={{ ...(Platform.OS !== "android" && { zIndex: 7 }) }}>
            <CustomDropDown
              zIndex={14000}
              placeholder="Select Qualification"
              open={teacherprofessionalQualificationshow}
              value={teacherQualification}
              items={qualifications}
              setOpen={setTeacherProfessionalQualificationShow}
              setValue={setTeacherQualification}
              setItems={setQualifications}
              multiple={true}
            />
          </View>
          

    
          <View style={{ ...(Platform.OS !== "android" && { zIndex: 5 }) }} >
            <CustomDropDown
              zIndex={11000}
              placeholder="Select a Proffesional Qualification"
              open={teacherQualificationShow}
              value={teacherprofessionalqualification}
              items={professionalQualifications}
              setOpen={setTeacherQualificationShow}
              setValue={setTeacherProfessionalQualification}
              setItems={setProfessionalQualifications}
              multiple={true}
            />
          </View>

          {/* <View style={{ margin: 20, right: 20 }}>
            <Text style={{ marginBottom: 12, marginLeft: 9 }}>
              {" "}
              Salary Disbursed
            </Text>
            <RadioButton
              gender={salaryPaymentMethod}
              options={["Cash", "Online"]}
              horizontal={true}
              onChangeSelect={(opt) => {
                opt;
                setSalaryPaymentMethod(opt);
              }}
            />
          </View>

              
          <View>
            {salaryPaymentMethod === 'Online' ? (
              <>
               <View style={{ ...(Platform.OS !== "android" && { zIndex: 10 }) }}>
                <CustomDropDown
                  placeholder="Bank Name"
                  zIndex={14000}
                  open={bankNameShow}
                  value={bankname}
                  items={banknames}
                  setOpen={setBankNameShow}
                  setValue={setBankName}
                  setItems={setBankNames}
                />
              </View>
             

              <View style={{ ...(Platform.OS !== "android" && { zIndex: 5 }) }}>
                <CustomDropDown
                  placeholder="Bank District"
                  zIndex={11000}
                  open={bankDistrictShow}
                  value={bankdistrict}
                  items={bankdistricts}
                  setOpen={setBankDistrictShow}
                  setValue={setBankDistrict}
                  setItems={setBankDistricts}
                />
              </View>

              <View style={{ ...(Platform.OS !== "android" && { zIndex: 3 }) }}>
                <CustomDropDown
                  placeholder="Bank City"
                  zIndex={9000}
                  open={bankCityShow}
                  value={bankcity}
                  items={bankCities}
                  setOpen={setBankCityShow}
                  setValue={setBankCity}
                  setItems={setBankCities}
                />
              </View>

                <View>
                  <TextInput
                    style={styleOne.input}
                    value={accounttitle}
                    onChangeText={setAccountTitle}
                    placeholder="Account Title"
                    placeholderTextColor="gray"
                  />
                </View>
                <View>
                  <TextInput
                    style={styleOne.input}
                    value={ibanAccount}
                    onChangeText={setIbanAccount}
                    placeholder="Bank account IBAN"
                    placeholderTextColor="gray"
                  />
                </View>
                <View>
                  <TextInput
                    style={styleOne.input}
                    value={bankaccountnumber}
                    onChangeText={setBankAccountNumber}
                    placeholder="Bank account Number"
                    placeholderTextColor="gray"
                  />
                </View>
              </>
            ) : null}
          </View> */}



      
     
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
