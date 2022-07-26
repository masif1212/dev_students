

import { StyleSheet, Text, View, TextInput,ScrollView, TouchableOpacity,Picker } from 'react-native'
import React,{ useState, useEffect } from 'react'
import { useSchoolRegisterMutation } from '../../../services/userAuthApi.js'
import RadioButton from '../../Components/RadioButton'
import Toast from "react-native-toast-message";



const CreateSchoolScreen = ({navigation}) => {

   //=========================div district tehsil=============================================//
  const [districts, setDistricts] = useState([]);
  const [selectedDistricts, setSelectedDistricts] = useState("")
  useEffect(() => {
    setTimeout(() => {
      setDistricts([
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
    }, 1000);
  }, []);
  //=========================div district tehsil end=============================================//

  //=====================================Tehsil Start ====================================//
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

  //=====================================Tehsil end ====================================//




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
        console.log(formData)
        console.log(res)
        if (res.data.status === "success") {
          await setInputFieldClear();
          navigation.navigate("UserPanelTab");
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
          
        <View style={{ justifyContent: "center", }}>
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