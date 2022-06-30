

import { StyleSheet, Text, View, TextInput,ScrollView, TouchableOpacity } from 'react-native'
import React,{ useState, useEffect } from 'react'
import { useSchoolRegisterMutation } from '../../../services/userAuthApi'


const CreateSchoolScreen = ({navigation}) => {

  const [school_name, setSchoolname] = useState('')
  const [contact_no , setContact_no] = useState('')
  const [address_1, setAddress_1] = useState('')
  const [address_2, setAddress_2] = useState('')
  const [district, setDistrict] = useState('')
  const [province, setProvince] = useState('')
  const [city, setCity] = useState('')



  setInputFieldClear = ()=>{
    setSchoolname("")
    setContact_no("")
    setAddress_1("")
    setAddress_2("")
    setDistrict("")
    setProvince("")
    setCity("")
  }

  const [ registerSchool]  = useSchoolRegisterMutation();
  const handleFormSubmit = async () => {
    if (school_name ) {
        const formData = {
          school_name,
          contact_no,
          address_1,
          address_2,
          province,
          district,
          city,
        };
        const res = await registerSchool(formData);
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
    <ScrollView>
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
              value={contact_no}
              onChangeText={setContact_no}
              placeholder="Contact_no"
              keyboardType="numeric"
              placeholderTextColor='gray'

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
              value={district}
              onChangeText={setDistrict}
              placeholder="Distrct"
              placeholderTextColor='gray'

            />
          </View>

          <View>
            <TextInput
              style={styleOne.input}
              value={province}
              onChangeText={setProvince}
              placeholder="Province"
              placeholderTextColor='gray'

            />
          </View>

          <View>
            <TextInput
              style={styleOne.input}
              value={city}
              onChangeText={setCity}
              placeholder="City"
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