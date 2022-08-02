

import { StyleSheet, Text, View, TextInput,ScrollView, TouchableOpacity,Picker } from 'react-native'
import React,{ useState, useEffect } from 'react'
import { useSchoolRegisterMutation } from '../../../services/userAuthApi.js'
import RadioButton from '../../Components/RadioButton'
import Toast from "react-native-toast-message";
import CustomDropDown from "../../Components/CustomDropdown";




const CreateSchoolScreen = ({navigation}) => {

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



  const [schoolcode, setSchoolCode] = useState('')
  const [level, setLevel] = useState("")
  const [categories, setCategories] = useState("")
  const [school_name, setSchoolname] = useState('')
  const [partnername , setpartnerName] = useState('')
  const [uc , setUC] = useState('')
  const [address_1, setAddress_1] = useState('')
  const [address_2, setAddress_2] = useState('')
  const [village, setVillage] = useState('')
  

  setInputFieldClear = ()=>{
    setSchoolname("")
    setSchoolCode("")
    setLevel("")
    setCategories("")
    setpartnerName("")
    setUC("")
    setVillage("")
    setAddress_1("")
    setAddress_2("")
    setSelectedDistricts("")
    setSeletctedTehsil("")
   
  }

  const [ schoolRegister]  = useSchoolRegisterMutation();
  const handleFormSubmit = async () => {
    if (school_name ) {
        const formData = {
          school_name,
          address_1,
          address_2,
          schoolcode,
          level,
          categories,
          partnername,
          uc,
          village,
          selectedDistricts,
          selectedTehsil
        
        };
        const res = await schoolRegister(formData);
        if (res.data.type === "success") {
          await setInputFieldClear();
          navigation.navigate("UserPanelTab");
        }
        if (res.data.type === "failed") {
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
  

  return (
    <ScrollView style={{
      top:10
    }}>
          <View>
            <TextInput
              style={styleOne.input}
              value={schoolcode}
              onChangeText={setSchoolCode}
              placeholder="School Code" 
              placeholderTextColor='gray'
              keyboardType='numeric'
            />
          </View>

          <View style={{ margin: 20, right: 20 }}>
            <Text style={{ marginBottom: 10, marginLeft: 9 }}>
              Select Level
            </Text>
            <RadioButton
              gender={level}
              options={["Primary", "Elementary", "High"]}
              horizontal={true}
              onChangeSelect={(opt) => {
                opt;
                setLevel(opt);
              }}
            />
          </View>

          <View style={{ margin: 20, right: 20 }}>
            <Text style={{ marginBottom: 12, marginLeft: 9 }}>
              Select Categories
            </Text>
            <RadioButton
              gender={categories}
              options={["Weak", "Strong"]}
              horizontal={true}
              onChangeSelect={(opt) => {
                opt;
                setCategories(opt);
              }}
            />
          </View>
      <View>
            <TextInput
              style={styleOne.input}
              value={school_name}
              onChangeText={setSchoolname}
              placeholder="School Name" 
              placeholderTextColor='gray'
            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={partnername}
              onChangeText={setpartnerName}
              placeholder="Partner Name" 
              placeholderTextColor='gray'
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
              value={address_1}
              onChangeText={setAddress_1}
              placeholder="Address 1"
              placeholderTextColor='gray'

            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={address_2}
              onChangeText={setAddress_2}
              placeholder="Address 2"
              placeholderTextColor='gray'

            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={uc}
              onChangeText={setUC}
              placeholder="Union Council (UC)"
              placeholderTextColor='gray'

            />
          </View>
          <View>
            <TextInput
              style={styleOne.input}
              value={village}
              onChangeText={setVillage}
              placeholder="Village Name"
              placeholderTextColor='gray'

            />
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
              Register
            </Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

export default CreateSchoolScreen

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