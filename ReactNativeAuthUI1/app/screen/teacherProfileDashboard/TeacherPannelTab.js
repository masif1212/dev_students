import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import TeacherDashboardScreen from './TeacherDashboardScreen.js';
import SideBar from './TeacherSideBar';
import ChangePasswordScreen from '../auth/ChangePasswordScreen.js';

const Drawer = createDrawerNavigator();
const TeacherPannelTab = () => {
  return (
    <Drawer.Navigator drawerContent={props => <SideBar {...props} />} screenOptions={{ headerStyle: { backgroundColor: '#5062BD' }, headerTintColor: 'white' }}>
      <Drawer.Screen name="TeacherDashboardScreen" component={TeacherDashboardScreen} />  
      
      <Drawer.Screen name="ChangePassword" component={ChangePasswordScreen} options={{ headerTitle: 'Change Password' }} />
    </Drawer.Navigator>
  )
}

export default TeacherPannelTab