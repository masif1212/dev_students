import React, { Component ,useState,useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Pie from "../../Components/DrawerComponents/Pie";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useIsFocused } from "@react-navigation/native"; 




const data = [
  {
    name: "Mariam Batool",
    email: "MariamBatool@gmail.com",
    position: "Data Entry Clerk",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
  },
  {
    name: "June Cha",
    email: "june.cha@gmail.com",
    position: "Sales Manager",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Iida Niskanen",
    email: "iida.niskanen@gmail.com",
    position: "Sales Manager",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Renee Sims",
    email: "renee.sims@gmail.com",
    position: "Medical Assistant",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Jonathan Nu\u00f1ez",
    email: "jonathan.nu\u00f1ez@gmail.com",
    position: "Clerical",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    name: "Sasha Ho",
    email: "sasha.ho@gmail.com",
    position: "Administrative Assistant",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
  },
  {
    name: "Abdullah Hadley",
    email: "abdullah.hadley@gmail.com",
    position: "Marketing",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a72ca28288878f8404a795f39642a46f",
  },
  {
    name: "Thomas Stock",
    email: "thomas.stock@gmail.com",
    position: "Product Designer",
    photo:
      "https://tinyfac.es/data/avatars/B0298C36-9751-48EF-BE15-80FB9CD11143-500w.jpeg",
  },
  {
    name: "Veeti Seppanen",
    email: "veeti.seppanen@gmail.com",
    position: "Product Designer",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
  },
  {
    name: "Bonnie Riley",
    email: "bonnie.riley@gmail.com",
    position: "Marketing",
    photo: "https://randomuser.me/api/portraits/women/26.jpg",
  },
]



const SchoolAdmin = ({ navigation }) => { 
  const [admin,setAdmin] = useState('');


  const fetchPosts = () => {
    const apiURL = "http://192.168.18.64:8000/getusers";
    fetch(apiURL)
      .then((response) => response.json())
      .then((responseJson) => {
        setAdmin(responseJson);
    
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const focus = useIsFocused();
  useEffect(() => {
    fetchPosts();
    return () => {};
  }, [focus]);
    
  

    return (
      <View style={styles.body}>
         <View style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                 
               
          }}>
          <TouchableOpacity 
          onPress={()=>navigation.navigate('SignupSchoolAdmin')}
          style={{
              borderRadius:10,
              backgroundColor:'#5062BD',
              padding:8,
              flexDirection:'row',
          }}>
              <Icon style={{
                  color:'white',
                  margin:5,
                  justifyContent:'center',
                  alignItems:'center'
                }}
               name="user-plus" />
              <Text style={{
                  color:'white',
                  marginTop:2,
                  justifyContent:'center',
                  alignItems:'center'
              }}>Create Admin</Text>
          </TouchableOpacity>
          </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          enableEmptySections={true}
          data={admin}
          keyExtractor={(item) => item.item}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("SchoolAdminProfile", {
                    first_name: item.first_name,
                    last_name: item.last_name,
                    email: item.email,
                    contact:item.contact,
                    alt_contact:item.alt_contact,
                    CNIC_no:item.CNIC_no,
                    address_1:item.address_1,
                    city:item.city
                  })
                }
              >
                <View style={styles.box}>
                  <View
                    style={{
                      justifyContent: "center",
                      marginTop: 25,
                    }}
                  >
                    <Image style={styles.image} source={{ uri: item.photo }} />
                  </View>
                  <View
                    style={{
                      marginLeft: 60,
                      bottom: 50,
                   
                    }}
                  >
                    <Text style={styles.username}>{item.first_name}</Text>
                  </View>
                  <View
                    style={{
                      marginLeft: 60,
                      bottom: 50,
                    }}
                  >
                    <Text style={styles.email}>{item.last_name}</Text>
                  </View>
                  <View
                    style={{
                      marginLeft: 220,
                      bottom: 150,
                   
                    }}
                  >
                    <Pie outerRadius={'50%'} />
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }


const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 70,
    borderRadius: 40,
    marginLeft: 3,
  },
  body: {
    padding: 20,
    backgroundColor: "#E6E6FA",
  },
  box: {
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
    height: 120,
  },
  username: {
    color: "black",
    fontSize: 22,
    marginLeft: 10,
    bottom:5
  },
  email: {
    color: "black",
    fontSize: 12,
    marginLeft: 10,
    bottom:5
  },
});

export default SchoolAdmin
