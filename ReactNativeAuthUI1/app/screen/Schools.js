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
import { Dimensions, RefreshControl} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Icons from "react-native-vector-icons/FontAwesome5";
 import { useIsFocused } from "@react-navigation/native"; 

 


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Schools = ({ navigation }) => {

  const [filterData, setFilterData] = useState();
  const [masterDate, setMasterDate] = useState();
  const [search, setSearch] = useState();
 



  const focus = useIsFocused();
  const fetchData = async () => {
    const resp = await fetch("http://192.168.18.14:8000/api/user/getschools");
    const data = await resp.json();
    setMasterDate(data);
    setFilterData(data);
  };

  useEffect(() => {
     fetchData();
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
          navigation.navigate("SelectedSchool", { title: item.school_name, schoolid: item._id  })
        }
      >
        
        <View style={styles.itemViewStyles}>
          <Icons name="school"
          size={30}
          color='#5062BD'
          />
          <View style={{justifyContent:'center',left:10}}>
            <Text style={[ styles.itemStyles2]}>
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
   {/* <DropDownSuperAdmin /> */}
  
     


    <View style={styles.container}>
  
      <View style={{ height: '120%', paddingBottom: 140}}>
     
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
    height: windowHeight,
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
    fontSize: 12,
    color: "#787878",
   
    
    // justifyContent:'center',
    // alignItems:'center'

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
    padding: 11,

 
    
  },
  searchContainer: {
    justifyContent: 'center'
  }
});

