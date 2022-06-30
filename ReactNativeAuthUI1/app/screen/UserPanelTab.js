import { View, Text, Button } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from './DashboardScreen';
import SideBar from './SideBar';
import ChangePasswordScreen from './auth/ChangePasswordScreen';
import Schools from './Schools'
import SelectedSchoolScreen from '../screen/SelectedSchoolScreen'


const Drawer = createDrawerNavigator();
const UserPanelTab = () => {
  return (
    <Drawer.Navigator drawerContent={props => <SideBar {...props} />} screenOptions={{ headerStyle: { backgroundColor: '#5062BD' }, headerTintColor: 'white' }}>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="Schools" component={Schools} options={({navigation}) => ({ headerShadowVisible: true,headerTintColor:'black',headerRight: () => (
              <Button
                onPress={()=> navigation.navigate('CreateSchoolScreen') }
                title="Add School"
                color="blue"
              />
            ),
            headerStyle: {
              backgroundColor: "#F5F5F5",
            },
          })}  />      
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="ChangePassword" component={ChangePasswordScreen} options={{ headerTitle: 'Change Password' }} />
    </Drawer.Navigator>
  )
}

export default UserPanelTab