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
import {
Button
} from "react-native";


import Schools from "./app/screen/Schools";
import Drawer from './app/Components/DrawerComponents/Drawer'
import SelectedSchoolScreen from './app/screen/SelectedSchoolScreen'
import TeachersProfileScreen from './app/screen/Teachers/TeachersProfileScreen'
import TeachersListScreen from './app/screen/Teachers/TeachersListScreen'
import StudentDetail from './app/screen/singleStudentAttendance/StudentDetail'
import SchoolAdminHomePage from './app/screen/schooladmin/SchoolAdminHomePage'
import TeachersListForSchoolAdmin from './app/screen/schooladmin/TeachersListForSchoolAdmin'
import AddTeacherForm from './app/screen/Teachers/AddTeacherForm'
import ViewFullAttendance from './app/screen/singleStudentAttendance/ViewFullAttendance'
import ClassStudents from './app/screen/singleStudentAttendance/ClassStudents'
import SingleStudentDetail from './app/screen/singleStudentAttendance/SingleStudentDetail'
import SchoolAdmin from './app/screen/schooladmin/SchoolAdmin'
import SignupSchoolAdmin from './app/screen/schooladmin/SignupSchoolAdmin'
import MarkAttendanceScreen from './app/screen/Teachers/MarkAttendanceScreen'
import CreateSchoolScreen from './app/screen/Schools/CreateSchoolScreen'
import SuperAdminProfileScreen from './app/screen/SupAdminFrontPage/SuperAdminProfileScreen'
import CreateStudent from './app/screen/schooladmin/CreateStudent'
import CreateStudentForm from './app/screen/schooladmin/CreateStudentForm'
import SchoolAdminDrawer from "./app/Components/DrawerComponents/SchoolAdminDrawer";
import TeacherDrawer from "./app/Components/DrawerComponents/TeacherDrawer";
import MarkAttendanceFilter from './app/screen/Teachers/MarkAttendanceFilter'
import SchoolAdminProfile from './app/screen/schooladmin/SchoolAdminProfile'



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


        <Stack.Screen
          name="Schools"
          component={Schools}
          options={({navigation}) => ({
            headerShadowVisible: false,
            headerTintColor:'black',
        
            headerRight: () => (
              <Button
                onPress={()=> navigation.navigate('CreateSchoolScreen') }
                title="Add School"
                color="#5062BD"
                
               
              />
            ),
            headerStyle: {
              backgroundColor: "#F5F5F5",
              
            },
          })}
        />


        <Stack.Screen
          name="DrawerScreen"
          component={Drawer}
          options={{
            hederaShadowVisible: false,
            headerShown: false,
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        />

        <Stack.Screen
          name="SelectedSchool"
          component={SelectedSchoolScreen}
           options = {
             ({route}) => ({title: route.params.title , headerShadowVisible: false,
            headerShown: true,
            headerStyle: {
              backgroundColor: "#F5F5F5",
            }})
          }
         
        />
        

         <Stack.Screen
          name="TeachersProfile"
          component={TeachersProfileScreen}
          options={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        />
           <Stack.Screen
          name="TeachersList"
          component={TeachersListScreen}
          options={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        />
        <Stack.Screen
          name="StudentDetail"
          component={StudentDetail}
          options={{
            headerShadowVisible: false,
            headerTintColor:'black',
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        />

          <Stack.Screen
          name="SchoolAdminHomePage"
          component={SchoolAdminHomePage}
          options={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        />
          <Stack.Screen
          name="TeachersListForSchoolAdmin"
          component={TeachersListForSchoolAdmin}
        
          options={{
            
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#5062BD",
            },
          }}
        />
         <Stack.Screen
          name="AddTeacherForm"
          component={AddTeacherForm}
          options={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#5062BD",
            },
          }}
        />
           <Stack.Screen
          name="ViewFullAttendance"
          component={ViewFullAttendance}
          options={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#5062BD",
            },
          }}
        />
             <Stack.Screen
          name="ClassStudents"
          component={ClassStudents}
          options={{
            headerShadowVisible: false,
            
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        />
               <Stack.Screen
          name="SingleStudentDetail"
          component={SingleStudentDetail}
          options={{
            headerShadowVisible: false,
            headerTintColor:'black',
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        />
                  <Stack.Screen
          name="SchoolAdmin"
          component={SchoolAdmin}
          options={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        />
                  <Stack.Screen
          name="SignupSchoolAdmin"
          component={SignupSchoolAdmin}
          options={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        />

        <Stack.Screen
          name="MarkAttendanceScreen"
          component={MarkAttendanceScreen}/>

            <Stack.Screen
          name="CreateSchoolScreen"
          component={CreateSchoolScreen}
          options={{
            headerShadowVisible: false,
          
            headerStyle: {
              backgroundColor: "#5062BD",
            },
          }}
        />

             <Stack.Screen
          name="SuperAdminProfileScreen"
          component={SuperAdminProfileScreen}
          options={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        />
        <Stack.Screen
          name="CreateStudent"
          component={CreateStudent}
          options={({navigation}) => ({
            headerShadowVisible: false,
            headerTintColor:'black',
            headerRight: () => (
              <Button
                onPress={()=> navigation.navigate('CreateStudentForm') }
                title="Add Student"
                color="#5062BD"
               
              />
            ),
            headerStyle: {
              backgroundColor: "#F5F5F5",
            },
          })}
        />
               <Stack.Screen
          name="CreateStudentForm"
          component={CreateStudentForm}
          options={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#5062BD",
            },
          }}
        />
                  <Stack.Screen
          name="SchoolAdminDrawer"
          component={SchoolAdminDrawer}
          options={{
            headerShadowVisible: false,
            headerShown:true,
            headerStyle: {
              backgroundColor: "#5062BD",
            },
          }}
        />
               <Stack.Screen
          name="TeacherDrawer"
          component={TeacherDrawer}
          options={{
            headerShadowVisible: false,
            headerShown:false,
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        />
         <Stack.Screen
          name="MarkAttendanceFilter"
          component={MarkAttendanceFilter}
          options={{
            headerShadowVisible: false,
            headerShown:false,
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        />
                      <Stack.Screen
          name="SchoolAdminProfile"
          component={SchoolAdminProfile} />
    


      </Stack.Navigator>
    </NavigationContainer>
</Provider>
  );

export default App;






