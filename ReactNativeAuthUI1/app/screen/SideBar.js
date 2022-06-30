import { View, Text, Image,StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useNavigation } from '@react-navigation/native';
import { removeToken } from '../../services/AsyncStorageService';
import { useSelector } from 'react-redux';
import { unSetUserInfo } from '../../features/userSlice';
import { unsetUserToken } from '../../features/authSlice';

const SideBar = ({ ...props }) => {

  const handleLogout = async () => {
    unSetUserInfo({ email: "", firstName: "", lastName: "", image: '' })
    unsetUserToken({ token: null })
    await removeToken('token')
    navigation.navigate('MONITORING APP');
  }
 
  const navigation = useNavigation()
  // Getting User Data from Redux Store
  const myData = useSelector(state => state.user)
  // const myToken = useSelector(state => state.auth)
  // console.log(myToken)
  useEffect(()=>{
    console.log(myData.image)
  })
  return (
    <DrawerContentScrollView {...props} style={styles.mainContainer}>
      <View style={{ margin: 15, }}>
        <Text style={{ fontSize: 18, marginBottom: 5, fontWeight: 'bold',color:"white"}}>{myData.firstName}</Text>
        <Text style={{ fontSize: 16, marginBottom: 5,color:"white" }}>{myData.email}</Text>
        <Text style={{ fontSize: 16, marginBottom: 5,color:"white" }}>{myData.lastName}</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label='Logout' onPress={handleLogout} />
    </DrawerContentScrollView>
  );

};
const styles = StyleSheet.create({
  mainContainer:{
    // backgroundColor:'#5062BD',
    color:'white'
  }
})
export default SideBar