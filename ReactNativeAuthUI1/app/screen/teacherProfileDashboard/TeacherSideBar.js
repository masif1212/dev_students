import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useNavigation } from '@react-navigation/native';
import { removeToken } from '../../../services/AsyncStorageService.js';
import { useSelector } from 'react-redux';
import {  unsetTeacherInfo   } from '../../../features/teacherSlice';
import { unsetUserToken } from '../../../features/authSlice.js';


const TeacherSideBar = ({ ...props }) => {

  const handleLogout = async () => {
    unsetTeacherInfo({ email: "", first_name: "", last_name: "", image: '' })
    unsetUserToken({ token: null })
    await removeToken('token')
    navigation.navigate('Home');
  }

  const navigation = useNavigation()
  // Getting User Data from Redux Store
  const myData = useSelector(state => state.teacher)
  // const myToken = useSelector(state => state.auth)
  // console.log(myToken)

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ margin: 15 }}>
     
        <Text style={{ fontSize: 18, marginBottom: 5, fontWeight: 'bold' }}>{myData.first_name}</Text>
        <Text style={{ fontSize: 16, marginBottom: 5 }}>{myData.email}</Text>
        <Text style={{ fontSize: 16, marginBottom: 5 }}>{myData.last_name}</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label='Logout' onPress={handleLogout} />
    </DrawerContentScrollView>
  );
};

export default TeacherSideBar