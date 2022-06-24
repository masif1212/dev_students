import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Icons from "react-native-vector-icons/FontAwesome5";
import DropDownSuperAdmin from "../Components/dropdown/DropDownSuperAdmin"
 import { useIsFocused } from "@react-navigation/native"; 

 
// import MultiSelect from 'react-native-multiple-select';


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Schools = ({ navigation }) => {

 


  const [filterData, setFilterData] = useState();
  const [masterDate, setMasterDate] = useState();
  const [search, setSearch] = useState();

 

  const fetchPosts = () => {
    const apiURL = "http://192.168.18.64:8000/schools";
    fetch(apiURL)
      .then((response) => response.json())
      .then((responseJson) => {
        setFilterData(responseJson);
        setMasterDate(responseJson);
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

  const searchFilter = (text) => {
    if (text) {
      const newData = masterDate.filter((item) => {
        const itemData = item.school_name
          ? item.school_name.toUpperCase()
          : " ".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(masterDate);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("SelectedSchool", { title: item.school_name })
        }
      >
        <View style={styles.itemViewStyles}>
          <Icons name="school"
          size={70}
          color='#5062BD'
   
            style={{
              width: Dimensions.get("window").width - 290,
              height: Dimensions.get("window").height -730,
              margin: 4,
            }}
          />
          <View>
            <Text style={[styles.itemStyles, styles.itemStyles2]}>
              {item.school_name.toUpperCase()}
            </Text>
            <Text style={styles.itemStyles}>Address : {item.address_1}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const ItemSeparatorView = ({ navigation }) => {
    return (
      <View
        style={{ height: 0.9, width: "100%", backgroundColor: "#c8c8c8" }}
      />
    );
  };

  return (
    <View>
   <DropDownSuperAdmin />
  
     


    <View style={styles.container}>
  
      <View style={{ height: '100%', paddingBottom: 140}}>
     
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.textInputStyles}
          value={search}
          placeholder="FInd School"
          placeholderTextColor="gray"
          underlineColorAndroid="transparent"
          onChangeText={(text) => searchFilter(text)}
        />
        <Icon style={{marginRight: 12,position: 'absolute',
         right: 10,}} name="search1" color="#c9c9c9" size={14} />
        </View>
     
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filterData}
          keyExtractor={(item, index) => index.toString()}
          itemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
 
      </View>
    </View>


    </View>

  );
};

export default Schools;

const styles = StyleSheet.create({
  MainContainer:{
    
  },
  container: {
    backgroundColor: "#F5F5F5",
    width: windowWidth,
    height: '100%',
    padding: 0,
    paddingHorizontal: 15,
    
  },
  secContainer: {
    justifyContent: "center",
    backgroundColor: "#ffffff",
    width: "100%",
    height: 39,
    borderRadius: 10,
    elevation: 1,
    paddingLeft: 10,
  },
  text: {
    fontWeight: "700",
    color: "#9c9a9a",
  },
  itemStyles: {
    padding: 2,
    fontSize: 14,
    color: "#787878",
    borderRadius: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  itemStyles2: {
    color: "#000",
    fontWeight: "bold",

  },
  textInputStyles: {
    height: 40,
    height: 50,
    // borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: "gray",
    backgroundColor: "white",
    borderRadius: 20,
  },
  itemViewStyles: {
    flexDirection: "row",
    backgroundColor: "white",
    margin: 4,
    borderRadius: 10,
    elevation: 1,

    alignItems:'center'
  },
  searchContainer: {
    justifyContent: 'center'
  }
});

