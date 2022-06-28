import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import SchoolAdminDashboardScreen from './SchoolAdminDashboardScreen';
import SideBar from './SideBar';
import ChangePasswordScreen from '../auth/ChangePasswordScreen';
import SchoolAdminHomePage from '../schooladmin/SchoolAdminHomePage';

const Drawer = createDrawerNavigator();
const SchoolAdminPanel = () => {
  return (
    <Drawer.Navigator drawerContent={props => <SideBar {...props} />} screenOptions={{ headerStyle: { backgroundColor: '#5062BD' }, headerTintColor: 'white' }}>
      <Drawer.Screen name="SchoolAdminHomePage" component={SchoolAdminHomePage} options={{ headerTitle: 'Super Admin' }} />      
      <Drawer.Screen name="Dashboard" component={SchoolAdminDashboardScreen} />
      <Drawer.Screen name="ChangePassword" component={ChangePasswordScreen} options={{ headerTitle: 'Change Password' }} />
    </Drawer.Navigator>
  )
}

export default SchoolAdminPanel