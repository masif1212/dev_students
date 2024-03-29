import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "./DashboardScreen";
import SideBar from "./SideBar";
import ChangePasswordScreen from "./auth/ChangePasswordScreen";
import Schools from "./Schools";
import { ScrollView } from "react-native-gesture-handler";
// import { styles } from '../../style';
// import SelectedSchoolScreen from './SelectedSchoolScreen';

const Drawer = createDrawerNavigator();
const UserPanelTab = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <SideBar {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: "#5062BD" },
        headerTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={({ navigation }) => ({
          headerShadowVisible: true,
          headerTintColor: "white",
          
          headerRight: () => (
            <TouchableOpacity
            onPress={()=> navigation.navigate('Registration')}
              style={{
                backgroundColor: 'white',
                marginRight: 15,
                padding: 10,
                borderRadius: 10
              }}
            ><Text style={{ fontWeight: 'bold'}}>Create Super Admin</Text></TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#5062BD",
            
          },
        })}
      />
      <Drawer.Screen
        name="Schools"
        component={Schools}
        options={({ navigation }) => ({
          headerShadowVisible: true,
          headerTintColor: "black",
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate("CreateSchoolScreen")}
              title="Add School"
              color="#5062BD"
            />
          ),
          headerStyle: {
            backgroundColor: "#F5F5F5",
          },
        })}
      />
      {/* <Drawer.Screen name="Dashboard" component={DashboardScreen} /> */}
      <Drawer.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={{ title: 'Change Password', headerTitle: "Change Password" }}
      />
    </Drawer.Navigator>
  );
};

export default UserPanelTab;
