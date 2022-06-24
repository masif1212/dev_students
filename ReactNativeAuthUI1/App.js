import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserLoginScreen from "./app/screen/auth/UserLoginScreen";
import ShopTab from './app/screen/shop/ShopTab'
import RegistrationScreen from "./app/screen/auth/RegistrationScreen";
import SendPasswordResetEmailScreen from './app/screen/auth/SendPasswordResetEmailScreen';
import AdminLoginScreen from './app/screen/auth/AdminLoginScreen';
import UserPanelTab from "./app/screen/UserPanelTab"
import Home from "./app/Components/Home.js";
import React from "react";
import { Provider } from "react-redux";
import { store } from './app/store'

const Stack = createNativeStackNavigator();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '5062BD' }, headerTintColor: 'white' }}>
      <Stack.Screen name="Welcome" component={Home} options={{headerShown: false,headerStyle: {backgroundColor: "white",}}}/>
        <Stack.Screen name="ShopTab" component={ShopTab} options={{ headerShown: false }} />
        <Stack.Screen name="AdminLogin" component={AdminLoginScreen} options={{ title: 'User Login', headerShown: false }} />
        <Stack.Screen name="UserLogin" component={UserLoginScreen} options={{ title: 'User Login', headerShown: false }} />
        <Stack.Screen name="Registration" component={RegistrationScreen} options={{ title: 'Registration', headerBackVisible: false }} />
        <Stack.Screen name="SendPasswordResetEmail" component={SendPasswordResetEmailScreen} options={{ title: 'Forgot Password' }} />
        <Stack.Screen name="UserPanelTab" component={UserPanelTab} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
</Provider>
  );

export default App;






