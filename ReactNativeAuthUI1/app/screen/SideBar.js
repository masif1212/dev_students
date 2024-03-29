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

  return (
    <DrawerContentScrollView {...props} style={styles.mainContainer}>
      <View
       style={{ 
        margin:4, 
        backgroundColor:'#5062BD', 
        borderRadius:16,
        alignItems:'center',
        justifyContent:'center',
        bottom:10
        }}>
     <Image style={{ height: 100,width:100,borderRadius:80,top:1}} source={{ uri : `https://${myData.image}`}}/>
        <Text style={{ fontSize: 18, marginBottom: 5, fontWeight: 'bold',color:"white",}}>{myData.firstName + " "+myData.lastName}</Text>
        <Text style={{ fontSize: 16, marginBottom: 5,color:"white" ,}}>{myData.email}</Text>
        
        
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