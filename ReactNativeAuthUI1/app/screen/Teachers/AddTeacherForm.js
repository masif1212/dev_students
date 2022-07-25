import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Picker,
  Platform
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { toastConfig } from "../../../style";
import Toast from "react-native-toast-message";
import { useRegisterTeachersMutation } from "../../../services/userAuthApi.js";
import { storeToken } from "../../../services/AsyncStorageService.js";
import Icon from "react-native-vector-icons/AntDesign";
import * as ImagePicker from "expo-image-picker";
import { useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { LogBox } from "react-native";
import RadioButton from "../../Components/RadioButton.js";
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Checkbox from "expo-checkbox";
import CustomDropDown from '../../Components/CustomDropdown'




const TeacherRegister = () => {
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
  const [dateofbirth, setDateOfBirth] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [dateofJoining, setDataofJoining] = useState("");
  const [contractstart, setContractStart] = useState("");
  const [contractend, setContractEnd] = useState("");
  const [subjectSpeciality, setSubjectSpeciality] = useState(false);
  const [teachingmedium, setTeachingMedium] = useState("");
  const [teacherTraining, setTeacherTraining] = useState(false);
  const [trainingnumber, setTrainingNumber] = useState("");
  const [lsuTrainingDate, setLsuTrainingDate] = useState("");
  const [trainInWhichSubject, setTrainInWhichSubject] = useState("");
  const [mentionTraining, setMentiontraining] = useState("");
  const [teachingExperience, setTeachingExperience] = useState(false);
  const [startingSalary, setStartingSalary] = useState("");
  const [currentSalary, setCurrentSalary] = useState("");
  const [salaryPaymentMethod, setSalaryPaymentMethod] = useState("");
  const [accounttitle, setAccountTitle] = useState("")
  const [ibanAccount, setIbanAccount] = useState("")
  const [bankaccountnumber, setBankAccountNumber] = useState("")
  const [vaccinated, setVaccinated] = useState(false);
  const [vaccineshots, setVaccineShots] = useState("")
  const [vacinatedstatus, setVaccinatedStatus] = useState("")

  const focus = useIsFocused();
  const myData = useSelector((state) => state.schoolAdmin);
  useEffect(() => {
    setSchoolId(myData.schoolId);
    setSchoolName(myData.schoolName);
    console.log(programm)
  }, [focus]);

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  //=========================================================================//

  var headers = new Headers();
  headers.append("X-CSCAPI-KEY", "ZWYzM2l0dXYzWENaS2dKM2lWR0ZRV3hBRXlTSFd0NlFHMlgyMDVVVA==");

  var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };

  useEffect(() => {
    fetch("https://api.countrystatecity.in/v1/countries/PK/cities", requestOptions)
      .then(response => response.json())
      .then(result => setBankCities(result))
      .catch(error => console.log('error', error));
  })

   //=====================================fetch api end====================================//
   const [selectDivision, setSelectDivision] = useState([]);
   const [division, setDivision] = useState([
    { title: "Select Region" },
     { title: "Banbhore" },
     { title: "Hyderabad" },
     { title: "Karachi" },
     { title: "Sukkur" },
     { title: "Larkana" },
     { title: "Mirpur Khas" },
     { title: "Shaheed Benazirabad" }
   ])
 
   //=========================div district tehsil=============================================//

  //=====================================fetch api end====================================//
  const [selectedTehsil, setSeletctedTehsil] = useState([]);
  const [tehsil, setTehsil] = useState([
    { title: "Select Tehsil" },
    { title: "Badin Tehsil" },
    { title: "Khoski Tehsil" },
    { title: "Matli Tehsil" },
    { title: "Shaheed Fazil Rahu Tehsil" },
    { title: "Talhar Tehsil" },
    { title: "Tando Bago Tehsil" },
    { title: "Jati Tehsil" },
    { title: "Kharo Chan Tehsil" },
    { title: "Mirpur Bathoro Tehsil" },
    { title: "Shah Bandar Tehsil" },
    { title: "Sujawal Tehsil" },
    { title: "Ghorabari Tehsil" },
    { title: "Keti Bunder" },
    { title: "Mirpur Sakro Tehsil" },
    { title: "Thatta Tehsil" },
    { title: "Dadu Tehsil" },
    { title: "Johi Tehsil" },
    { title: "Khairpur Nathan Shah Tehsil" },
    { title: "Mehar Tehsil" },
    { title: "Hyderabad City Tehsil" },
    { title: "Hyderabad Tehsil" },
    { title: "Latifabad Tehsil" },
    { title: "Qasimabad Tehsil" },
    { title: "Jamshoro Tehsil" },
    { title: "Sehwan Tehsil" },
    { title: "Kotri Tehsil" },
    { title: "Manjhand Tehsil" },
    { title: "Thana Bulla Khan Tehsil" },
    { title: "Hala Tehsil" },
    { title: "Matiari Tehsil" },
    { title: "Saeedabad Tehsil" },
    { title: "Chamber Tehsil" },
    { title: "Jhando Mari Tehsil" },
    { title: "Tando Allahyar Tehsil " },
    { title: "Nasarpur Tehsil" },
    { title: "Bulri Shah Karim Tehsil" },
    { title: "Tando Ghulam Hyder Tehsil" },
    { title: "Tando Mohammad Khan Tehsil" },
    { title: "Gulberg Town" },
    { title: "Liaquatabad Town" },
    { title: "New Karachi Town" },
    { title: "North Nazimabad Town" },
    { title: "Nazimabad" },
    { title: "Gulshan Town" },
    { title: "Jamshed Town" },
    { title: "Ferozabad" },
    { title: "Gulshan-E-Iqbal" },
    { title: "Gulzar-E-Hijri" },
    { title: "Lyari Town" },
    { title: "Saddar Town" },
    { title: "Aram Bagh" },
    { title: "Civil Line" },
    { title: "Garden" },
    { title: "Orangi Town" },
    { title: "Manghopir" },
    { title: "Maripur" },
    { title: "Mominabad" },
    { title: "Model Colony" },
    { title: "Shah Faisal Town" },
    { title: "Landhi Town" },
    { title: "Korangi Town" },
    { title: "Bin Qasim Town" },
    { title: "Gadap Town" },
    { title: "Malir Town" },
    { title: "Jinnah" },
    { title: "Ibrahim Hyderi" },
    { title: "Murad Memon" },
    { title: "Shah Murad" },
    { title: "Keamari Town" },
    { title: "Baldia Town" },
    { title: "S.I.T.E. Town" },
    { title: "Karachi Fish Harbour" },
    { title: "Garhi Khairo Tehsil" },
    { title: "Jacobabad Tehsil" },
    { title: "Thul Tehsil" },
    { title: "Tangwani Tehsil" },
    { title: "Kashmore Tehsil" },
    { title: "Kandhkot Tehsil" },
    { title: "Bakrani Tehsil" },
    { title: "Dokri Tehsil" },
    { title: "Larkana Tehsil" },
    { title: "Ratodero Tehsil" },
    { title: "Mirokhan Tehsil" },
    { title: "Nasirabad Tehsil" },
    { title: "Qambar Tehsil" },
    { title: "Qubo Saeed Khan Tehsil" },
    { title: "Shahdadkot Tehsil" },
    { title: "Sijawal Junejo Tehsil" },
    { title: "Warah Tehsil" },
    { title: "Garhi Yasin Tehsil" },
    { title: "Khanpur Tehsil" },
    { title: "Lakhi Tehsil" },
    { title: "Shikarpur Tehsil" },
    { title: "Digri Tehsil" },
    { title: "Jhuddo Tehsil" },
    { title: "Kot Ghulam Muhammad Tehsil" },
    { title: "Mirpur Khas Tehsil" },
    { title: "Shujabad Tehsil" },
    { title: "Sindhri Tehsil" },
    { title: "Chachro Tehsil" },
    { title: "Dahli Tehsil" },
    { title: "Diplo Tehsil" },
    { title: "Kaloi Tehsil" },
    { title: "Islamkot Tehsil" },
    { title: "Mithi Tehsil" },
    { title: "Nagarparkar Tehsil" },
    { title: "Kunri Tehsil" },
    { title: "Pithoro Tehsil" },
    { title: "Samaro Tehsil" },
    { title: "Umerkot Tehsil" },
    { title: "Daharki Tehsil" },
    { title: "Ghotki Tehsil" },
    { title: "Khangarh Tehsil (Khanpur)" },
    { title: "Mirpur Mathelo Tehsil" },
    { title: "Ubauro Tehsil" },
    { title: "Faiz Ganj Tehsil" },
    { title: "Gambat Tehsil" },
    { title: "Khairpur Tehsil Mirs" },
    { title: "Kingri Tehsil" },
    { title: "Kot Diji Tehsil" },
    { title: "Nara Tehsil" },
    { title: "Sobho Dero Tehsil" },
    { title: "Thari Mirwah Tehsil" },
    { title: "New Sukkur Tehsil" },
    { title: "Pano Aqil Tehsil" },
    { title: "Rohri Tehsil" },
    { title: "Salehpat Tehsil" },
    { title: "Sukkur Tehsil" },
    { title: "Bhiria Tehsil" },
    { title: "Kandioro Tehsil" },
    { title: "Mehrabpur Tehsil" },
    { title: "Moro Tehsil" },
    { title: "Naushahro Feroze Tehsil" },
    { title: "Daulatpur Tehsil (Qazi Ahmed)" },
    { title: "Daur Tehsil" },
    { title: "Nawabshah Tehsil" },
    { title: "Sakrand Tehsil" },
    { title: "Jam Nawaz Ali Tehsil" },
    { title: "Khipro Tehsil" },
    { title: "Sanghar Tehsil" },
    { title: "Shahdadpur Tehsil" },
    { title: "Sinjhoro Tehsil" },
    { title: "Tando Adam Khan Tehsil" },
  ])

  //=========================div district tehsil=============================================//
  const [selectedDistricts, setSelectedDistricts] = useState("")
  const [districts, setDistricts] = useState([
    {
      title: "Select District :",
    },
    {
      title: "Badin District",
    },
    {
      title: "Sujawal District",

    },
    {
      title: "Thatta District",

    },
    {
      title: "Dadu District",

    },
    {
      title: "Hyderabad District",

    },
    {
      title: "Jamshoro District",

    },
    {
      title: "Matiari District",

    },
    {
      title: "Tando Allahyar District",

    },
    {
      title: "Tando Muhammad Khan District",

    },
    {
      title: "Karachi Central District",

    },
    {
      title: "Karachi East District",

    },
    {
      title: "Karachi South District",

    },
    {
      title: "Karachi West District",

    },
    {
      title: "Korangi District",

    },
    {
      title: "Malir District",

    },
    {
      title: "Keamari District",

    },
    {
      title: "Jacobabad District",

    },
    {
      title: "Kashmore District",

    },
    {
      title: "Larkana District",

    },
    {
      title: "Qambar-Shahdadkot District",

    },
    {
      title: "Shikarpur District",

    },
    {
      title: "Mirpur Khas District",

    },
    {
      title: "Tharparkar District",

    },
    {
      title: "Umerkot District",

    },
    {
      title: "Ghotki District",

    },
    {
      title: "Khairpur Mirs District",

    },
    {
      title: "Sukkur District",

    },
    {
      title: "Naushahro Feroze District",

    },
    {
      title: "Shaheed Benazir Abad District",

    },
    {
      title: "Sanghar District",

    },
  ]);
  
  //=========================div district tehsil end=============================================//

  //=========================staff position=============================================//
  const [staffPosition, setStaffPosition] = useState([]);
  const [items, setItems] = useState([
    { label: "Select Position", value: "Select Position" },
    { label: "Accademic Coordinator", value: "Accademic Coordinator" },
    { label: "Chowkidar", value: "Chowkidar" },
    { label: "Driver", value: "Driver" },
    { label: "Head Teacher", value: "Head Teacher" },
    { label: "IT Teacher", value: "IT Teacher" },
    { label: "Peon", value: "Peon" },
    { label: "School Attendant", value: "School Attendant" },
    { label: "School Coordinator", value: "School Coordinator" },
    { label: "Subject Specialist", value: "Subject Specialist" },
    { label: "Teacher", value: "Teacher" },
  ]);
  //=========================staff position end =============================================//

  //=========================programs=============================================//
  const [formerProgrammOpen, setFormerProgrammOpen] = useState("")
  const [formerProgram, setFormerProgramm] = useState({});
  // const [programm, setProgramm] = useState([
  //   { id: "PPRS", value: "PPRS" },
  //   { id: "SAS", value: "SAS" },
  //   { id: "SMHS", value: "SMHS" },
  //   { id: "AALTP", value: "AALTP" },
  // ]);
  const programm = [
    { id: "PPRS", name: "PPRS" },
    { id: "SAS", name: "SAS" },
    { id: "SMHS", name: "SMHS" },
    { id: "AALTP", name: "AALTP" }]


  //=========================end programms=============================================//
  //=========================programs=============================================//
  const [schoolstaff, setSchoolStaff] = useState([]);
  const [staff, setStaff] = useState([
    { label: "Select Staff", value: "Select Staff" },
    { label: "Teaching", value: "Teaching" },
    { label: "NonTeaching", value: "NonTeaching" },
    { label: "Head Teacher", value: "Head Teacher" },
  ]);
  //=========================end programms=============================================//
  //=========================programs=============================================//
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
  const [teacherprofessionalQualificationshow, setTeacherProfessionalQualificationShow] = useState("")
  const [teacherprofessionalqualification, setTeacherProfessionalQualification] = useState([]);
  const [professionalQualifications, setProfessionalQualifications] = useState([
    { label: "Select Professional Qualification", value: "Select Professional Qualification" },
    { label: "B.ED", value: "B.ED" },
    { label: "M.ED", value: "M.ED" },
    { label: "DIT", value: "DIT" },
  ]);
  //=========================end programms=============================================//


  //=========================CURRENT TEACHING CLASS=============================================//
  const [teachingClassShow, setTeachingClassShow] = useState("")
  const [teachingClass, setTeachingClass] = useState([]);
  const[ currentTeachingClass, setCurrentTeachingClass] = useState([
    { label: "Select Teaching Classes", value: "Select Teaching Classes" },
    { label: "Head Teacher", value: "Head Teacher" },
    { label: "Academic Coordinator", value: "Academic Coordinator" },
    { label: "Watchman", value: "Watchman" },
    { label: "Peon", value: "Peon" },
    { label: "Driver", value: "Driver" },
    { label: "ECE", value: "ECE" },
    { label: "Aya", value: "Aya" },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "10", value: "10" },
  ]);
  //=========================END CURRENT TEACHING CLASS=============================================//

  //=========================Subject=============================================//
  
  const [teachingSubjectShow, setTeachingSubjectShow] = useState('');
  const [teachingSubject, setTeachingSubject] = useState([]);
  const [currentTeachingSubject, setCurrentTeachingSubject] =useState([
    { label: "Select teaching Subjects", value: "Select teaching Subjects" },
    { label: "Head Teacher", value: "Head Teacher" },
    { label: "Academic Coordinator", value: "Academic Coordinator" },
    { label: "Watchman", value: "Watchman" },
    { label: "Peon", value: "Peon" },
    { label: "Driver", value: "Driver" },
    { label: "Biology", value: "Biology" },
    { label: "Chemistry", value: "Chemistry" },
    { label: "Islamiat", value: "Islamiat" },
    { label: "Urdu", value: "Urdu" },
    { label: "Sindhi", value: "Sindhi" },
    { label: "English", value: "English" },
    { label: "Math", value: "Math" },
    { label: "SS", value: "SS" },
    { label: "Science", value: "Science" },
    { label: "IT", value: "IT" },
  ]) ;
  //=========================end Subject=============================================//

  //=========================Subject=============================================//
  const [subjectSpecShow, setSubjectSpecShow] = useState("")
  const [SubjectSpec, setSubjectSpec] = useState([]);
  const [subjectspecial, setSubjectSpecial] = useState([
    { label: "Select Subject of Speciality", value: "Select Subject of Speciality" },
    { label: "Biology", value: "Biology" },
    { label: "Chemistry", value: "Chemistry" },
    { label: "Islamiat", value: "Islamiat" },
    { label: "Urdu", value: "Urdu" },
    { label: "Sindhi", value: "Sindhi" },
    { label: "English", value: "English" },
    { label: "Math", value: "Math" },
    { label: "SS", value: "SS" },
    { label: "Science", value: "Science" },
    { label: "IT", value: "IT" },
  ]);
  //=========================end Subject=============================================//

  //=========================Subject=============================================//
  const [experienceDuration, setExperienceDuration] = useState([]);
  const [experienceTime, setExperienceTime] = useState([
    { label: "Select Experience duration", value: "Select Experience duration" },
    { label: "3-6 months", value: "3-6 months" },
    { label: "6 months - 1 years", value: "6 months - 1 years" },
    { label: "1-2 years", value: "1-2 years" },
    { label: "2-3 year", value: "2-3 year" },
    { label: "3-5 year", value: "3-5 year" },
    { label: "5 years and above", value: "5 years and above" },
  ]);
  //=========================end Subject=============================================//
  //=========================Bank Names=============================================//
  const [bankname, setBankName] = useState("");
  const [banknames, setBankNames] = useState([
    { label: "Select Bank Name", value: "Select Bank Name" },
    { label: "Al Baraka Bank Limited", value: "Al Baraka Bank Limited" },
    { label: "Allied Bank Limited", value: "Allied Bank Limited" },
    { label: "Askari Bank", value: "Askari Bank" },
    { label: "Bank Alfalah Limited", value: "Bank Alfalah Limited" },
    { label: "Bank Al Habib Limited", value: "Bank Al Habib Limited" },
    { label: "BankIslami Pakistan Limited", value: "BankIslami Pakistan Limited" },
    { label: "Citi Bank", value: "Citi Bank" },
    { label: "Deutsche Bank A.G", value: "Deutsche Bank A.G" },
    { label: "The Bank of Tokyo-Mitsubishi UFJ", value: "The Bank of Tokyo-Mitsubishi UFJ" },
    { label: "Dubai Islamic Bank Pakistan Limited", value: "Dubai Islamic Bank Pakistan Limited" },
    { label: "Faysal Bank Limited", value: "Faysal Bank Limited" },
    { label: "First Women Bank Limited", value: "First Women Bank Limited" },
    { label: "Habib Bank Limited", value: "Habib Bank Limited" },
    { label: "Standard Chartered Bank Limited", value: "Standard Chartered Bank Limited" },
    { label: "Habib Mteropolitan Bank Limited", value: "Habib Mteropolitan Bank Limited" },
    { label: "Industrial and commercial Bank of China", value: "Industrial and commercial Bank of China" },
    { label: "Industrial Developmnet Bank of Pakistan", value: "Industrial Developmnet Bank of Pakistan" },
    { label: "JS Bank Limited", value: "JS Bank Limited" },
    { label: "MCB Bank Limited", value: "MCB Bank Limited" },
    { label: "MCB Islamic  Bank Limited", value: "MCB Islamic  Bank Limited" },
    { label: "Mezan Bank Limited", value: "Mezan Bank Limited" },
    { label: "National Bank of Pakistan", value: "National Bank of Pakistan" },


  ]);
  //=========================end Bank Names=============================================//

  //=========================Bank Names=============================================//
  const [bankcity, setBankCity] = useState([]);
  const [bankCities, setBankCities] = useState([
    { label: 'Select Bank City', value: 'Select Bank City', id: 1 },
  ]);
  //=========================end Bank Names=============================================//
  //=========================Bank Names=============================================//
  const [bankdistrict, setBankDistrict] = useState([]);
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
    { label: "KAMBAR SHAHDAD KOT DISTRICT", value: "KAMBAR SHAHDAD KOT DISTRICT" },
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
    { label: "TANDO MUHAMMAD KHAN DISTRICT", value: "TANDO MUHAMMAD KHAN DISTRICT" },
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
    { label: "SHAHEED BENAZIRABAD DISTRICT", value: "SHAHEED BENAZIRABAD DISTRICT" },
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
  ])
  //=========================end Bank Names=============================================//
  const ittems = [
    {
      id: 1,
      value: 'Pulp Fiction',
    },
    {
      id: 2,
      value: 'The Prestige',
    },
    {
      id: 3,
      value: 'Blade Runner 2049',
    },
  ];
  // const [allDistrict, setAllDistrict] = useState([
  //   { label: 'Badin', value: 'Badin' },
  //   { label: 'Dadu', value: 'Dadu' },
  //   { label: 'Ghotki', value: 'Ghotki' },
  //   { label: 'Hyderabad', value: 'Hyderabad' },
  //   { label: 'Jacobabad', value: 'Jacobabad' },
  //   { label: 'Jamshoro', value: 'Jamshoro' },
  //   { label: 'Karachi Central', value: 'Karachi Central' },
  //   { label: 'Kashmore', value: 'Kashmore' },
  //   { label: 'Khairpur', value: 'Khairpur' },
  //   { label: 'Larkana', value: 'Larkana' },
  //   { label: 'Matiari', value: 'Matiari' },
  //   { label: 'Mirpur Khas', value: 'Mirpur Khas' },
  //   { label: 'Naushahro Feroze', value: 'Naushahro Feroze' },
  //   { label: 'Shaheed Benazirabad', value: 'Shaheed Benazirabad' },
  //   { label: 'Qambar Shahdadkot', value: 'Qambar Shahdadkot' },
  //   { label: 'Sanghar', value: 'Sanghar' },
  //   { label: 'Shikarpur', value: 'Shikarpur' },
  //   { label: 'Sukkur', value: 'Sukkur' },
  //   { label: 'Tando Allahyar', value: 'Tando Allahyar' },
  //   { label: 'Tando Muhammad Khan', value: 'Tando Muhammad Khan' },
  //   { label: 'Tharparkar', value: 'Tharparkar' },
  //   { label: 'Thatta', value: 'Thatta' },
  //   { label: 'Umerkot', value: 'Umerkot' },
  //   { label: 'Sujawal', value: 'Sujawal' },
  //   { label: 'Karachi East', value: 'Karachi East' },
  //   { label: 'Karachi South', value: 'Karachi South' },
  //   { label: 'Karachi West', value: 'Karachi West' },
  //   { label: 'Korangi', value: 'Korangi' },
  //   { label: 'Malir', value: 'Malir' },
  // ]);

  const navigation = useNavigation();
  const [registerTeacher] = useRegisterTeachersMutation();


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
  const [isJoiningDatePickerVisible, setJoiningDatePickerVisibility] =
    useState(false);

  const showjoiningDatePicker = () => {
    setJoiningDatePickerVisibility(true);
  };

  const hidejoiningDatePicker = () => {
    setJoiningDatePickerVisibility(false);
  };

  const handleJoiningConfirm = (dateofJoining) => {
    setDataofJoining(moment(dateofJoining).utc().format("YYYY-MM-DD"));
    hidejoiningDatePicker();
  };

  const getJoiningDate = () => {
    let tempDate = moment(dateofJoining).toString().split(" ");
    return dateofJoining !== ""
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : false;
  };
  //=========================END DATE OF JOINING=================================//

  //===========================Contract START DATE===============================//
  const [
    isContractStartDatePickerVisible,
    setContractStartDatePickerVisibility,
  ] = useState(false);

  const showstartcontractDatePicker = () => {
    setContractStartDatePickerVisibility(true);
  };

  const hidestartcontractDatePicker = () => {
    setContractStartDatePickerVisibility(false);
  };

  const handleContractStartConfirm = (contractstart) => {
    setContractStart(moment(contractstart).utc().format("YYYY-MM-DD"));
    hidestartcontractDatePicker();
  };

  const getContractStartDate = () => {
    let tempDate = moment(contractstart).toString().split(" ");
    return contractstart !== ""
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : false;
  };
  //===================CONTRACT START DATE END==================================//

  //===============CONTRACT END DATE=======================================//
  const [isContractEndDatePickerVisible, setContractEndDatePickerVisibility] =
    useState(false);

  const showcontractendDatePicker = () => {
    setContractEndDatePickerVisibility(true);
  };

  const hidecontractendDatePicker = () => {
    setContractEndDatePickerVisibility(false);
  };

  const handleContractEndConfirm = (contractend) => {
    setContractEnd(moment(contractend).utc().format("YYYY-MM-DD"));
    hidecontractendDatePicker();
  };

  const getContractEndDate = () => {
    let tempDate = moment(contractend).toString().split(" ");
    return contractend !== ""
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : false;
  };
  //===================CONTRACT END DATE END====================================//
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
    return lsuTrainingDate !== ""
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : false;
  };
  //===================LSU training DATE END====================================//



  //=====================clear text input================================//
  const clearTextInput = () => {
    setDistricts(" ");
    setSeletctedTehsil("")
    setStaff_Name("");
    setStaffPosition("");
    setFormerProgramm("");
    setSchoolStaff("");
    setGender("");
    setReligion("");
    setMaritalStatus("");
    setDateOfBirth("");
    setDataofJoining("");
    setContractStart("");
    setContractEnd("");
    setTeacherQualification("");
    setTeacherProfessionalQualification("");
    setTeachingClass("");
    setTeachingSubject("");
    setSubjectSpeciality("");
    setSubjectSpec("");
    setTeachingMedium("");
    setTeacherTraining("");
    setTrainingNumber("");
    setTrainInWhichSubject("");
    setMentiontraining("");
    setTeachingExperience("");
    setExperienceDuration("");
    setStartingSalary("");
    setCurrentSalary("");
    setSalaryPaymentMethod("");
    setBankName("");
    setBankDistrict("");
    setBankCity("");
    setAccountTitle("");
    setIbanAccount("");
    setBankAccountNumber("")
    setFather_Name("");
    setEmail("");
    setPassword("");
    setconfirm_password("");
    setContact("");
    setAlt_Contact("");
    setAdress_1("");
    setAdress_2("");
    setcnic("");
    setImage("");
    setVaccinated("");
    setVaccineShots("");
    setVaccinatedStatus("");
  };
  //=====================clear text input================================//

  const handleFormSubmit = async () => {
    if (staff_name && email && password && confirm_password) {
      if (password === confirm_password) {
        const formData = {
          districts,
          selectedTehsil,
          schoolName,
          schoolId,
          staff_name,
          staffPosition,
          formerProgram,
          schoolstaff,
          gender,
          religion,
          maritalStatus,
          dateofbirth,
          dateofJoining,
          contractstart,
          contractend,
          teacherQualification,
          teacherprofessionalqualification,
          teachingClass,
          teachingSubject,
          subjectSpeciality,
          SubjectSpec,
          teachingmedium,
          teacherTraining,
          trainingnumber,
          trainInWhichSubject,
          mentionTraining,
          teachingExperience,
          experienceDuration,
          startingSalary,
          currentSalary,
          salaryPaymentMethod,
          bankname,
          bankdistrict,
          bankcity,
          accounttitle,
          ibanAccount,
          bankaccountnumber,
          father_name,
          email,
          password,
          confirm_password,
          contact,
          image,
          alt_contact,
          address_1,
          address_2,
          cnic,
          vaccinated,
          vaccineshots,
          vacinatedstatus,

        };
        const res = await registerTeacher(formData);
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

        <View style={{ width: "90%", flex: 0.7, fontSize: 14, borderBottomWidth: 1, marginHorizontal: 5, marginVertical: 10 }}>
        <Text>Select Language</Text>
            <Picker
              itemStyle={styleOne.itemStyle}
              mode="dropdown"
              style={styleOne.pickerStyle}
              selectedValue={selectDivision}
              onValueChange={setSelectDivision}
            >
              {division.map((item, index) => (
                <Picker.Item
                  color="gray"
                  label={item.title}
                  value={item.title}
                  index={index}
                />
              ))}
            </Picker>
          </View>


          <View style={{ width: "90%", flex: 0.7, fontSize: 14, borderBottomWidth: 1, marginHorizontal: 5, marginVertical: 10 }}>
            <Picker
              itemStyle={styleOne.itemStyle}
              mode="dropdown"
              style={styleOne.pickerStyle}
              selectedValue={selectedDistricts}
              onValueChange={setSelectedDistricts}
            >
              {districts.map((item, index) => (
                <Picker.Item
                  color="gray"
                  label={item.title}
                  value={item.title}
                  index={index}
                />
              ))}
            </Picker>
          </View>





          <View style={{ width: "90%", flex: 0.7, fontSize: 14, borderBottomWidth: 1, marginHorizontal: 5, marginVertical: 10 }}>
            <Picker
              itemStyle={styleOne.itemStyle}
              mode="dropdown"
              style={styleOne.pickerStyle}
              selectedValue={selectedTehsil}
              onValueChange={setSeletctedTehsil}
            >
              {tehsil.map((item, index) => (
                <Picker.Item
                  color="gray"
                  label={item.title}
                  value={item.title}
                  index={index}
                />
              ))}
            </Picker>
          </View>

          <View>
            <TextInput
              style={styleOne.input}
              placeholder="School Name"
              value={myData.schoolName}
              placeholderTextColor="gray"
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


          <View style={{ width: "90%", flex: 0.7, fontSize: 14, borderBottomWidth: 1, marginHorizontal: 5, marginVertical: 10 }}>
            <Picker
              itemStyle={styleOne.itemStyle}
              placeholder="Select a former Programm"
              mode="dropdown"
              style={styleOne.pickerStyle}
              selectedValue={staffPosition}
              onValueChange={setStaffPosition}
            >
              {items.map((item, index) => (
                <Picker.Item
                  color="gray"
                  label={item.label}
                  value={item.value}
                  index={index}
                />
              ))}
            </Picker>
          </View>
          {/* 

          <View style={{ width: "90%", flex: 0.7, fontSize: 14, borderBottomWidth: 1, marginHorizontal: 5, marginVertical: 10 }}>
            <Picker
              itemStyle={styleOne.itemStyle}
              mode="dropdown"
              style={styleOne.pickerStyle}
              selectedValue={formerProgram}
              onValueChange={setFormerProgramm}
            >
              {programm.map((item, index) => (
                <Picker.Item
                  color="gray"
                  label={item.label}
                  value={item.value}
                  index={index}
                />
              ))}
            </Picker>
          </View> */}
          <View>
            <CustomDropDown
              placeholder="Select Current Teaching Class"
              zIndex={11000}
              open={teachingClassShow}
              value={teachingClass}
              items={currentTeachingClass}
              setOpen={setTeachingClassShow}
              setValue={setTeachingClass}
              setItems={setTeachingClass}
              multiple={true} />
          </View> 


        

          {/* <View>
            <CustomDropDown
              placeholder="Select a former Programm"
              zIndex={10000}
              open={formerProgrammOpen}
              value={formerProgram}
              items={programm}
              setOpen={setFormerProgrammOpen}
              setValue={setFormerProgramm}
              setItems={setProgramm}
              multiple={true} />


          </View> */}

          <View style={{ width: "90%", flex: 0.7, fontSize: 14, borderBottomWidth: 1, marginHorizontal: 5, marginVertical: 10 }}>
            <Picker
              itemStyle={styleOne.itemStyle}
              mode="dropdown"
              style={styleOne.pickerStyle}
              selectedValue={schoolstaff}
              onValueChange={setSchoolStaff}
            >
              {staff.map((item, index) => (
                <Picker.Item
                  color="gray"
                  label={item.label}
                  value={item.value}
                  index={index}
                />
              ))}
            </Picker>
          </View>


          <View>
            <CustomDropDown
              placeholder="Select teaching subject"
              zIndex={10000}
              open={teachingSubjectShow}
              value={teachingSubject}
              items={currentTeachingSubject}
              setOpen={setTeachingSubjectShow}
              setValue={setTeachingSubject}
              setItems={setTeachingSubject}
              multiple={true} />
          </View> 
        

          <View style={{ margin: 20, right: 20 }}>
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

          <View style={{ margin: 20, right: 20 }}>
            <Text style={{ marginBottom: 12, marginLeft: 9 }}>Religion</Text>
            <RadioButton
              gender={religion}
              options={["Muslim", "Non-Muslim"]}
              horizontal={true}
              onChangeSelect={(opt, i) => {
                opt;
                setReligion(i);
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
              onChangeSelect={(opt, i) => {
                opt;
                setMaritalStatus(i);
              }}
            />
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
            />
          </View>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={showjoiningDatePicker}
              style={styleOne.input}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>{getJoiningDate()}</Text>
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
              isVisible={isJoiningDatePickerVisible}
              mode="date"
              onConfirm={handleJoiningConfirm}
              onCancel={hidejoiningDatePicker}
              is24Hour={false}
            />
          </View>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={showstartcontractDatePicker}
              style={styleOne.input}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>{getContractStartDate()}</Text>
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
              isVisible={isContractStartDatePickerVisible}
              mode="date"
              onConfirm={handleContractStartConfirm}
              onCancel={hidestartcontractDatePicker}
              is24Hour={false}
            />
          </View>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={showcontractendDatePicker}
              style={styleOne.input}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>{getContractEndDate()}</Text>
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
              isVisible={isContractEndDatePickerVisible}
              mode="date"
              onConfirm={handleContractEndConfirm}
              onCancel={hidecontractendDatePicker}
              is24Hour={false}
            />
          </View>

          <View style={{ width: "90%", flex: 0.7, fontSize: 14, borderBottomWidth: 1, marginHorizontal: 5, marginVertical: 10 }}>
            <Picker
              itemStyle={styleOne.itemStyle}
              mode="dropdown"
              style={styleOne.pickerStyle}
              selectedValue={teacherQualification}
              onValueChange={setTeacherQualification}
            >
              {qualifications.map((item, index) => (
                <Picker.Item
                  color="gray"
                  label={item.label}
                  value={item.value}
                  index={index}
                />
              ))}
            </Picker>
          </View>

         
          <View>
            <CustomDropDown
              zIndex={10000}
              placeholder="Select a Proffesional Qualification"
              open={teacherprofessionalQualificationshow}
              value={teacherprofessionalqualification}
              items={professionalQualifications}
              setOpen={setTeacherProfessionalQualificationShow}
              setValue={setTeacherProfessionalQualification}
              setItems={setProfessionalQualifications}
              multiple={true} />

          </View> 
         
         

          <View style={{ flex: 1, flexDirection: "row", margin: 10 }}>
            <Checkbox
              value={subjectSpeciality}
              onValueChange={() => setSubjectSpeciality(!subjectSpeciality)}
              color={subjectSpeciality ? "#5062BD" : undefined}
            />
            <Text> if , any Subject Speciality</Text>
          </View>
          <View>
            {subjectSpeciality ? (
              <View >
                <CustomDropDown
                  placeholder="Subject Speciality"
                  zIndex={5000}
                  open={subjectSpecShow}
                  value={SubjectSpec}
                  items={subjectspecial}
                  setOpen={setSubjectSpecShow}
                  setValue={setSubjectSpec}
                  setItems={setSubjectSpecial}
                  multiple={true} />
              </View>

            ) : null}
          </View> 

          <View style={{ margin: 20, right: 20 }}>
            <Text style={{ marginBottom: 12, marginLeft: 9 }}>
              {" "}
              Medium of Teaching
            </Text>
            <RadioButton
              gender={teachingmedium}
              options={["Sindhi", "Urdu"]}
              horizontal={true}
              onChangeSelect={(opt, i) => {
                opt;
                setTeachingMedium(i);
              }}
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

          <View style={{ flex: 1, flexDirection: "row", margin: 10 }}>
            <Checkbox
              value={teachingExperience}
              onValueChange={() => setTeachingExperience(!teachingExperience)}
              color={teachingExperience ? "#5062BD" : undefined}
            />
            <Text> if ,have any teaching experience</Text>
          </View>
          <View>
            {teachingExperience ? (
              <>
                <View style={{ width: "90%", flex: 0.7, fontSize: 14, borderBottomWidth: 1, marginHorizontal: 5, marginVertical: 10 }}>
                  <Picker
                    itemStyle={styleOne.itemStyle}
                    mode="dropdown"
                    style={styleOne.pickerStyle}
                    selectedValue={experienceDuration}
                    onValueChange={setExperienceDuration}
                  >
                    {experienceTime.map((item, index) => (
                      <Picker.Item
                        color="gray"
                        label={item.label}
                        value={item.value}
                        index={index}
                      />
                    ))}
                  </Picker>
                </View>
              </>
            ) : null}
          </View>

          <View>
            <TextInput
              style={styleOne.input}
              value={startingSalary}
              onChangeText={setStartingSalary}
              placeholderTextColor="gray"
              placeholder="Starting salary"
              keyboardType="numeric"
            />

          </View>

          <View>
            <TextInput
              style={styleOne.input}
              value={currentSalary}
              onChangeText={setCurrentSalary}
              placeholderTextColor="gray"
              placeholder="Current salary"
              keyboardType="numeric"
            />
          </View>

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
                <View style={{ width: "90%", flex: 0.7, fontSize: 14, borderBottomWidth: 1, marginHorizontal: 5, marginVertical: 10 }}>
                  <Picker
                    itemStyle={styleOne.itemStyle}
                    mode="dropdown"
                    style={styleOne.pickerStyle}
                    selectedValue={bankname}
                    onValueChange={setBankName}
                  >
                    {banknames.map((item, index) => (
                      <Picker.Item
                        color="gray"
                        label={item.label}
                        value={item.value}
                        index={index}
                      />
                    ))}
                  </Picker>
                </View>

                <View style={{ width: "90%", flex: 0.7, fontSize: 14, borderBottomWidth: 1, marginHorizontal: 5, marginVertical: 10 }}>
                  <Picker
                    itemStyle={styleOne.itemStyle}
                    mode="dropdown"
                    style={styleOne.pickerStyle}
                    onValueChange={setBankDistrict}
                    selectedValue={bankdistrict}
                  >
                    {bankdistricts.map((item, index) => (
                      <Picker.Item
                        color="gray"
                        label={item.label}
                        value={item.value}
                        index={index}
                      />
                    ))}
                  </Picker>
                </View>

                <View style={{ width: "90%", flex: 0.7, fontSize: 14, borderBottomWidth: 1, marginHorizontal: 5, marginVertical: 10 }}>
                  <Picker
                    itemStyle={styleOne.itemStyle}
                    mode= "dropdown"
                    style={styleOne.pickerStyle}
                    selectedValue={bankcity}
                    onValueChange={setBankCity}
                  >
                    {bankCities.map((item, index) => (
                      <Picker.Item
                        color="gray"
                        label={item.name}
                        value={item.name}
                        index={index}
                      />
                    ))}
                  </Picker>
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


          <View style={{ flex: 1, flexDirection: "row", margin: 10 }}>
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
    color: "#007aff"
  },
  pickerStyle: {
    width:  "95%" ,
    height: (Platform.OS === 'ios') ? 20 : 40,
    color: "black",
    borderBottomWidth: (Platform.OS === 'ios') ? 0 : 1,
    fontSize: 14,
  },
  textStyle: {
    fontSize: 14,
    fontFamily: "Roboto-Regular"
  },

 
});

export default TeacherRegister;