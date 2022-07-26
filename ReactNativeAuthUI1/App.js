import { NavigationContainer } from "@react-navigation/native";
import {Button,} from "react-native";
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
import Schools from "./app/screen/Schools";
import Drawer from './app/Components/DrawerComponents/Drawer'
import SelectedSchoolScreen from './app/screen/SelectedSchoolScreen'
import TeachersProfileScreen from './app/screen/Teachers/TeachersProfileScreen'
import TeachersListScreen from './app/screen/Teachers/TeachersListScreen'
import StudentDetail from './app/screen/singleStudentAttendance/StudentDetail'
import SchoolAdminHomePage from './app/screen/schooladmin/SchoolAdminHomePage'
import TeachersListForSchoolAdmin from "./app/screen/schooladmin/TeachersListForSchoolAdmin";
import AddTeacherForm from './app/screen/Teachers/AddTeacherForm'
import ViewFullAttendance from './app/screen/singleStudentAttendance/ViewFullAttendance'
import ClassStudents from './app/screen/singleStudentAttendance/ClassStudents'
import SingleStudentDetail from './app/screen/singleStudentAttendance/SingleStudentDetail'
import SchoolAdmin from './app/screen/schooladmin/SchoolAdmin'
import SignupSchoolAdmin from './app/screen/schooladmin/SignupSchoolAdmin'
import MarkAttendanceScreen from './app/screen/Teachers/MarkAttendanceScreen'
import MarkStudentAttendance from "./app/screen/schooladmin/MarkStudentAttendance";
import CreateSchoolScreen from './app/screen/Schools/CreateSchoolScreen'
import SuperAdminProfileScreen from './app/screen/SupAdminFrontPage/SuperAdminProfileScreen'
import CreateStudent from './app/screen/schooladmin/CreateStudent'
import CreateStudentForm from './app/screen/schooladmin/CreateStudentForm'
import SchoolAdminDrawer from "./app/Components/DrawerComponents/SchoolAdminDrawer";
import TeacherDrawer from "./app/Components/DrawerComponents/TeacherDrawer";
import MarkAttendanceFilter from './app/screen/Teachers/MarkAttendanceFilter'
import SchoolAdminProfile from './app/screen/schooladmin/SchoolAdminProfile'
import SchoolAdminPanelTab from './app/screen/schoolAdminProfile/SchoolAdminPanelTab'
import MarkTeacherAttendance from "./app/screen/schooladmin/MarkStudentAttendance";
import TeacherLoginScreen from "./app/screen/auth/teacherLogin";
import TeacherPannelTab from "./app/screen/teacherProfileDashboard/TeacherPannelTab";
import TeacherLandingPage from "./app/screen/Teachers/TeacherLandingPage";
import TeacherAttendanceDetails from "./app/screen/Teachers/TeacherAttendanceDetails";
import AddTeacherForm2 from "./app/screen/Teachers/AddTeacherFormStep_2";

const Stack = createNativeStackNavigator();

const App = ({navigation}) => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { color: 'black' }, headerTintColor: 'white', headerShown: false }}
        
      >
      <Stack.Screen name="MONITORING APP" component={Home}  options={{ headerShown:false,  headerStyle: { backgroundColor: "#5062BD" }}}/>
        <Stack.Screen name="ShopTab" component={ShopTab}  options={{ headerShown:true,  headerStyle: { backgroundColor: "#5062BD"}}} />
        <Stack.Screen name="AdminLogin" component={AdminLoginScreen} options={{ title: 'User Login', headerShown: false }} />
        <Stack.Screen name="UserLogin" component={UserLoginScreen} options={{ title: 'User Login', headerShown: false }} />
        <Stack.Screen name="TeacherLoginScreen" component={TeacherLoginScreen} options={{ title: 'User Login', headerShown: false }} />
        <Stack.Screen name="Registration" component={RegistrationScreen} options={{ title: 'Registration', headerBackVisible: false }} />
        <Stack.Screen name="SendPasswordResetEmail" component={SendPasswordResetEmailScreen} options={{ title: 'Forgot Password' }} />
        <Stack.Screen name="UserPanelTab" component={UserPanelTab} options={{ headerShown: false }} />
        <Stack.Screen name="Teacherpannel" component={TeacherPannelTab} options={{ headerShown: false }} />
        <Stack.Screen name="SchoolAdminPannel" component={SchoolAdminPanelTab} options={{ headerShown: false }} />
        <Stack.Screen name="Schools" component={Schools}/>
        <Stack.Screen name="DrawerScreen" component={Drawer} options={{ hederaShown: true, headerStyle: {backgroundColor: "white",},}}/>
        <Stack.Screen name="SelectedSchool" component={SelectedSchoolScreen} options = {({route}) => ({title: route.params.title , headerShadowVisible: true, headerShown: true, headerStyle: {backgroundColor: "#5062BD", }})}/>
        <Stack.Screen name="TeachersProfile" component={TeachersProfileScreen} options={{headerShown: true,headerStyle: {backgroundColor: "#5062BD",},}}/> 
        <Stack.Screen name="TeachersList" component={TeachersListScreen} options={{headerShown: true, headerStyle: { backgroundColor: "#5062BD", }, }}  />
        <Stack.Screen name="StudentDetail" component={StudentDetail} options={{ headerShown:true, headerStyle: {  backgroundColor: "#5062BD",   }, }}/>
        <Stack.Screen name="SchoolAdminHomePage" component={SchoolAdminHomePage} options={{  headerShown:true,  headerStyle: { backgroundColor: "white",  },  }}  />
        <Stack.Screen name="TeachersListForSchoolAdmin" component={TeachersListForSchoolAdmin} options={{  headerShown:true,  headerStyle: { backgroundColor: "#5062BD",  },  }}  />
        <Stack.Screen  name="AddTeacherForm"  component={AddTeacherForm} options={{ headerShown:true, headerStyle: { backgroundColor: "#5062BD",  }, }}/>
        
        <Stack.Screen name="ViewFullAttendance" component={ViewFullAttendance} options={{ headerShown:true,  headerStyle: { backgroundColor: "#5062BD", }, }}  />
        <Stack.Screen name="ClassStudents" component={ClassStudents} options={{  headerShown:true,headerStyle: {  backgroundColor: "#5062BD", }, }} />
        <Stack.Screen name="SingleStudentDetail" component={SingleStudentDetail} options={{  headerShown:true,   headerTintColor:'black',  headerStyle: {  backgroundColor: "white",  },   }} />
        <Stack.Screen  name="SchoolAdmin"  component={SchoolAdmin} options={{ headerShown:true, headerStyle: {  backgroundColor: "#5062BD",  }, }}  />
        <Stack.Screen name="SignupSchoolAdmin" component={SignupSchoolAdmin} options={{  headerShown:true,  headerStyle: { backgroundColor: "#5062BD", }, }} />
        <Stack.Screen name="MarkAttendanceScreen" component={MarkAttendanceScreen} options={{ headerShown:true, headerStyle: {backgroundColor: "#5062BD",  },  }}/>
        <Stack.Screen name="CreateSchoolScreen" component={CreateSchoolScreen}options={{ headerShown:true, headerStyle: {backgroundColor: "#5062BD",  },  }}/>
        <Stack.Screen  name="SuperAdminProfileScreen" component={SuperAdminProfileScreen} options={{ headerShown: true, headerStyle: {  backgroundColor: "white",  }}}/>

        <Stack.Screen name="CreateStudent" component={CreateStudent} options={({navigation}) => ({ headerShown:true , headerTintColor:'black', headerRight: () => (
        <Button  onPress={()=> navigation.navigate('CreateStudentForm') } title="Add Student"  color="#5062BD" /> ), headerStyle: {  backgroundColor: "#F5F5F5"} })}/>
         
        <Stack.Screen  name="CreateStudentForm"  component={CreateStudentForm} options={{ headerShown:true,headerTintColor:'white', headerStyle: { backgroundColor: "#5062BD" } }}  />
        <Stack.Screen  name="SchoolAdminDrawer"  component={SchoolAdminDrawer}  options={{ headerShown: true,headerTintColor:'white',  headerShown:true, headerStyle: {  backgroundColor: "#5062BD" }}} />
        <Stack.Screen name="TeacherDrawer" component={TeacherDrawer} options={{  headerShown:true,headerTintColor:'white', headerStyle: { backgroundColor: "#5062BD"}}}/>
        <Stack.Screen name="MarkAttendanceFilter"  component={MarkAttendanceFilter} options={{ headerShown: true,headerTintColor:'white', headerStyle: { backgroundColor: "#5062BD"}}} />
        <Stack.Screen name="SchoolAdminProfile" component={SchoolAdminProfile} options={{ headerShown: true,headerTintColor:'white', headerStyle: { backgroundColor: "#5062BD"}}} />

        <Stack.Screen name="MarkTeacherAttendance" component={MarkTeacherAttendance} options={{ headerShown: true, headerShown:true,headerStyle: { backgroundColor: "#5062BD", },  }} />
        <Stack.Screen name="TeacherLandingPage" component={TeacherLandingPage} options={{ headerShown: true, headerShown:true,headerStyle: { backgroundColor: "#5062BD", },  }} />
        <Stack.Screen name="MarkStudentAttendance" component={MarkStudentAttendance} options={{ headerShown: true, headerShown:true,headerStyle: { backgroundColor: "#5062BD", },  }} />
  
          
        <Stack.Screen name="TeacherAttendanceDetails" component={TeacherAttendanceDetails} options={{ headerShown: true, headerShown:true,headerStyle: { backgroundColor: "#5062BD", },  }} />
        <Stack.Screen  name="AddTeacherFormStep2"  component={AddTeacherForm2} options={{ headerShown:true, headerStyle: { backgroundColor: "#5062BD",  }, }}/>

      </Stack.Navigator>
    </NavigationContainer>
</Provider>
  );

export default App;






