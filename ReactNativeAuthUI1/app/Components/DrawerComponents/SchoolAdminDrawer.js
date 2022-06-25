import React, { useRef,useEffect, useState } from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import pic from "../../assets/images/DrawerIcons/pic.jpg";
// Tab ICons...
// import home from "../../assets/images/DrawerIcons/home.png";
// import search from "../../assets/images/DrawerIcons/search.png";
// import bell from "../../assets/images/DrawerIcons/bell.png";
// import settings from "../../assets/images/DrawerIcons/settings.png";
// import logout from "../../assets/images/DrawerIcons/logout.png";
// import logout from "../../../assets/images/DrawerIcons/logout.png"
// // Menu
import menu from '../../../assets/images/DrawerIcons/menu.png'
import close from '../../../assets/images/DrawerIcons/close.png'
import Icon from "react-native-vector-icons/FontAwesome5";
import Iconss from "react-native-vector-icons/MaterialIcons";
import SchoolAdminHomePage from "../../screen/schooladmin/SchoolAdminHomePage";
// import axios from "axios";


// Photo

// let district = [
//   {
//     id: 1,
//     name: "Punjab",
//   },
//   {
//     id: 2,
//     name: "Sindh",
//   },
//   {
//     id: 1,
//     name: "KPK",
//   },
// ];

export default function SchoolAdminDrawer({navigation}) {
  // const [selectedItem, setSelectedItem] = useState(null);


  // const onSelect = (item) => {
  //   setSelectedItem(item);
  // };

  // useEffect(  () => {
  //    axios.get(`http://192.168.18.64:3000/alluser`)
  //       .then(res => {
  //         const persons = res.data
  //         setPersons({ persons })
  //         console.log(persons)
  //       })
       
  // }
  // )

  // const getTask = async () => {
  //   const res = await fetch(`http://192.168.18.64:3000/alluser`);
  //   return await res.json();
  // };

  const [currentTab, setCurrentTab] = useState("Home");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

   
   
// useEffect(() => {
//   axios.get(`http://192.168.18.19:8000/alluser/:id`)
//       .then(res => {
//         const persons = res.data
//         setPersons({ persons })
//       })
//       console.log(persons)
// }
// )


  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "flex-start", padding: 15 }}>
        <Image
          // source={pic}
          style={{
            width: 60,
            height: 60,
            borderRadius: 10,
            marginTop: 40,
          }}
        ></Image>

        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            marginTop: 20,
          }}
        >
          School Admin 
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('SuperAdminProfileScreen')}>
          <Text
            style={{
              marginTop: 6,
              color: "white",
            }}
          >
            View Profile
          </Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            // Tab Bar Buttons....
          }

          
           <View
        style={{
          top:5
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Schools')}
          style={{
           borderRadius:30,
           backgroundColor:'white'
          }}
        >
          <View
            style={{
              flexDirection: "row",
              padding: 5,
              justifyContent:'center',
              alignItems:'center'
            }}
          >
            <Icon
              style={{
                marginRight: 5,
                color: "#5062BD",
              }}
              name="school"
              size={30}
              color="#900"
            />
            <Text
              style={{
                padding: 3,
                fontSize: 20,
                fontWeight: "300",
               
              }}
            >
              Schools
            </Text>
          </View>
        </TouchableOpacity>
        </View>
    
             
        </View>

        <View style={{
         
        }}>
        
            <TouchableOpacity style={{
                borderRadius:20,
                backgroundColor:'white',
                padding:10,
                justifyContent:'center',
                alignItems:'center',
                flexDirection:'row',
                bottom:30
            }}>
               
            <Text style={{
                color:'black',
                fontSize:20,
                margin:5,
                right:3
            }}>Logout</Text>
             <Iconss
              style={{
                marginRight: 5,
                color: "#5062BD",
              }}
              name="logout"
              size={30}
              color="black"
            />
            </TouchableOpacity>
          
            </View>
      </View>

      {
        // Over lay View...
      }

      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: "white",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius: showMenu ? 15 : 0,
          // Transforming View...
          transform: [{ scale: scaleValue }, { translateX: offsetValue }],
        }}
      >
        {
          // Menu Button...
        }

        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}
        >
          <TouchableOpacity
            onPress={() => {
              // Do Actions Here....
              // Scaling the view...
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.88,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(offsetValue, {
                // YOur Random Value...
                toValue: showMenu ? 0 : 250,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(closeButtonOffset, {
                // YOur Random Value...
                toValue: !showMenu ? -30 : 0,
                duration: 300,
                useNativeDriver: true,
              }).start();

              setShowMenu(!showMenu);
            }}
          >
            <Image
              source={showMenu ? close : menu}
              style={{
                width: 20,
                height: 20,
                tintColor: "black",
                marginTop: 40,
              }}
            ></Image>
          </TouchableOpacity>

      <SchoolAdminHomePage />
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
}

// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title, image,navigation) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('SignIn') }
     >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          backgroundColor: currentTab == title ? "white" : "transparent",
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15,
        }}
      >
        <Image
          source={image}
          style={{
            width: 25,
            height: 25,
            tintColor: currentTab == title ? "#5359D1" : "white",
          }}
        ></Image>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            paddingLeft: 15,
            color: currentTab == title ? "#5359D1" : "white",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5062BD",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
