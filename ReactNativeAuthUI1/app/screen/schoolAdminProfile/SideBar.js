import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useNavigation } from '@react-navigation/native';
import { removeToken } from '../../../services/AsyncStorageService.js';
import { useSelector } from 'react-redux';
import { unSetSchoolAdminInfo } from '../../../features/schoolAdminSlice.js';
import { unsetUserToken } from '../../../features/authSlice.js';


const SideBar = ({ ...props }) => {

  const handleLogout = async () => {
    unSetSchoolAdminInfo({ email: "", first_name: "", last_name: "", image: '' })
    unsetUserToken({ token: null })
    await removeToken('token')
    navigation.navigate('MONITORING APP');
  }

  const navigation = useNavigation()
  // Getting User Data from Redux Store
  const myData = useSelector(state => state.schoolAdmin)
  // const myToken = useSelector(state => state.auth)
  // console.log(myToken)



  return (
    <DrawerContentScrollView {...props}>
      <View style={{ 
        margin:4, 
        backgroundColor:'#5062BD', 
        borderRadius:16,
        alignItems:'center',
        justifyContent:'center',
        bottom:10
        }}>
        <Image style={{ height: 100,width:100,borderRadius:80,top:1}} source={{ uri : myData.image}} />
        <Text style={{ fontSize: 18, marginBottom: 5, fontWeight: 'bold',color:"white",}}>{myData.first_name + " "+myData.last_name}</Text>
        <Text style={{ fontSize: 16, marginBottom: 5,color:"white" ,}}>{myData.email}</Text>

      </View>
      <DrawerItemList {...props} />
      <DrawerItem label='Logout' onPress={handleLogout} />
    </DrawerContentScrollView>
  );
};

export default SideBar