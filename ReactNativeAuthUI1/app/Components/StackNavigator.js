import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserLoginScreen from "../screen/auth/UserLoginScreen";
import ShopTab from "../screen/shop/ShopTab";
import RegistrationScreen from "../screen/auth/RegistrationScreen";
import SendPasswordResetEmailScreen from "../screen/auth/SendPasswordResetEmailScreen";
import UserPanelTab from "../screen/UserPanelTab";

import Home from "./Home";
import React from "react";

const Stack = createNativeStackNavigator();

const StackNavigator=()=>(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '5062BD' }, headerTintColor: 'white' }}>
      <Stack.Screen name="Welcome" component={Home} options={{headerShown: false,headerStyle: {backgroundColor: "white",}}}/>
        <Stack.Screen name="ShopTab" component={ShopTab} options={{ headerShown: false }} />
        <Stack.Screen name="UserLogin" component={UserLoginScreen} options={{ title: 'User Login', headerShown: false }} />
        <Stack.Screen name="Registration" component={RegistrationScreen} options={{ title: 'Registration', headerBackVisible: false }} />
        <Stack.Screen name="SendPasswordResetEmail" component={SendPasswordResetEmailScreen} options={{ title: 'Forgot Password' }} />
        <Stack.Screen name="UserPanelTab" component={UserPanelTab} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );

export default StackNavigator;