// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import UserLoginScreen from "../screen/auth/UserLoginScreen";
// import ShopTab from "../screen/shop/ShopTab";
// import RegistrationScreen from "../screen/auth/RegistrationScreen";
// import SendPasswordResetEmailScreen from "../screen/auth/SendPasswordResetEmailScreen";
// import UserPanelTab from "../screen/UserPanelTab";


// import Schools from '../screen/Schools'
// import Drawer from '../Components/DrawerComponents/Drawer'
// import SelectedSchoolScreen from '../screen/SelectedSchoolScreen'
// import TeachersProfileScreen from '../screen/Teachers/TeachersProfileScreen'
// import TeachersListScreen from '../screen/Teachers/TeachersListScreen'
// import StudentDetail from '../screen/singleStudentAttendance/StudentDetail'
// import SchoolAdminHomePage from '../screen/schooladmin/SchoolAdminHomePage'
// import TeachersListForSchoolAdmin from '../screen/schooladmin/TeachersListForSchoolAdmin'
// import AddTeacherForm from '../screen/Teachers/AddTeacherForm'
// import ViewFullAttendance from '../screen/singleStudentAttendance/ViewFullAttendance'
// import ClassStudents from '../screen/singleStudentAttendance/ClassStudents'
// import SingleStudentDetail from '../screen/singleStudentAttendance/SingleStudentDetail'
// import SchoolAdmin from '../screen/schooladmin/SchoolAdmin'
// import SignupSchoolAdmin from '../screen/schooladmin/SignupSchoolAdmin'
// import MarkAttendanceScreen from '../screen/Teachers/MarkAttendanceScreen'
// import CreateSchoolScreen from '../screen/Schools/CreateSchoolScreen'
// import SuperAdminProfileScreen from '../screen/SupAdminFrontPage/SuperAdminProfileScreen'
// import CreateStudent from '../screen/schooladmin/CreateStudent'
// import CreateStudentForm from '../screen/schooladmin/CreateStudentForm'
// import SchoolAdminDrawer from "../Components/DrawerComponents/SchoolAdminDrawer";
// import TeacherDrawer from "../Components/DrawerComponents/TeacherDrawer";
// import MarkAttendanceFilter from '../screen/Teachers/MarkAttendanceFilter'
// import SchoolAdminProfile from '../screen/schooladmin/SchoolAdminProfile'



// import Home from "./Home";
// import React from "react";

// const Stack = createNativeStackNavigator();

// const StackNavigator=()=>(
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '5062BD' }, headerTintColor: 'white' }}>
//       <Stack.Screen name="Welcome" component={Home} options={{headerShown: false,headerStyle: {backgroundColor: "white",}}}/>
//         <Stack.Screen name="ShopTab" component={ShopTab} options={{ headerShown: false }} />
//         <Stack.Screen name="UserLogin" component={UserLoginScreen} options={{ title: 'User Login', headerShown: false }} />
//         <Stack.Screen name="Registration" component={RegistrationScreen} options={{ title: 'Registration', headerBackVisible: false }} />
//         <Stack.Screen name="SendPasswordResetEmail" component={SendPasswordResetEmailScreen} options={{ title: 'Forgot Password' }} />
//         <Stack.Screen name="UserPanelTab" component={UserPanelTab} options={{ headerShown: false }} />

// {/* 
//         <Stack.Screen
//           name="Welcome"
//           component={Home}
//           options={{
//             headerShown: false,
//             headerStyle: {
//               backgroundColor: "white",

//             },
//           }}
//         /> */}
//         <Stack.Screen
//           name="Schools"
//           component={Schools}
//           options={({navigation}) => ({
//             headerShadowVisible: false,
        
//             headerRight: () => (
//               <Button
//                 onPress={()=> navigation.navigate('CreateSchoolScreen') }
//                 title="Add School"
//                 color="#5062BD"
               
//               />
//             ),
//             headerStyle: {
//               backgroundColor: "#F5F5F5",
//             },
//           })}
//         />


//         <Stack.Screen
//           name="DrawerScreen"
//           component={Drawer}
//           options={{
//             hederaShadowVisible: false,
//             headerShown: false,
//             headerStyle: {
//               backgroundColor: "white",
//             },
//           }}
//         />

//         <Stack.Screen
//           name="SelectedSchool"
//           component={SelectedSchoolScreen}
//            options = {
//              ({route}) => ({title: route.params.title , headerShadowVisible: false,
//             headerShown: true})
//     
//           }
         
//         />
        

//          <Stack.Screen
//           name="TeachersProfile"
//           component={TeachersProfileScreen}
//           options={{
//             headerShadowVisible: false,
//             headerStyle: {
//               backgroundColor: "white",
//             },
//           }}
//         />
//            <Stack.Screen
//           name="TeachersList"
//           component={TeachersListScreen}
//           options={{
//             headerShadowVisible: false,
//             headerStyle: {
//               backgroundColor: "white",
//             },
//           }}
//         />
//         <Stack.Screen
//           name="StudentDetail"
//           component={StudentDetail}
//           options={{
//             headerShadowVisible: false,
//             headerStyle: {
//               backgroundColor: "white",
//             },
//           }}
//         />

//           <Stack.Screen
//           name="SchoolAdminHomePage"
//           component={SchoolAdminHomePage}
//           options={{
//             headerShadowVisible: false,
//             headerStyle: {
//               backgroundColor: "white",
//             },
//           }}
//         />
//           <Stack.Screen
//           name="TeachersListForSchoolAdmin"
//           component={TeachersListForSchoolAdmin}
//           options={{
//             headerShadowVisible: false,
//             headerStyle: {
//               backgroundColor: "white",
//             },
//           }}
//         />
//          <Stack.Screen
//           name="AddTeacherForm"
//           component={AddTeacherForm}
//           options={{
//             headerShadowVisible: false,
//             headerStyle: {
//               backgroundColor: "white",
//             },
//           }}
//         />
//            <Stack.Screen
//           name="ViewFullAttendance"
//           component={ViewFullAttendance}
//           options={{
//             headerShadowVisible: false,
//             headerStyle: {
//               backgroundColor: "white",
//             },
//           }}
//         />
//              <Stack.Screen
//           name="ClassStudents"
//           component={ClassStudents}
//           options={{
//             headerShadowVisible: false,
//             headerStyle: {
//               backgroundColor: "white",
//             },
//           }}
//         />
//                <Stack.Screen
//           name="SingleStudentDetail"
//           component={SingleStudentDetail}
//           options={{
//             headerShadowVisible: false,
//             headerStyle: {
//               backgroundColor: "white",
//             },
//           }}
//         />
//                   <Stack.Screen
//           name="SchoolAdmin"
//           component={SchoolAdmin}
//           options={{
//             headerShadowVisible: false,
//             headerStyle: {
//               backgroundColor: "white",
//             },
//           }}
//         />
//                   <Stack.Screen
//           name="SignupSchoolAdmin"
//           component={SignupSchoolAdmin}
//           options={{
//             headerShadowVisible: false,
//             headerStyle: {
//               backgroundColor: "white",
//             },
//           }}
//         />

//         <Stack.Screen
//           name="MarkAttendanceScreen"
//           component={MarkAttendanceScreen}/>

//             <Stack.Screen
//           name="CreateSchoolScreen"
//           component={CreateSchoolScreen}
//           options={{
//             headerShadowVisible: false,
//             headerStyle: {
//               backgroundColor: "white",
//             },
//           }}
//         />

//              <Stack.Screen
//           name="SuperAdminProfileScreen"
//           component={SuperAdminProfileScreen}
//           options={{
//             headerShadowVisible: false,
//             headerStyle: {
//               backgroundColor: "white",
//             },
//           }}
//         />
//         <Stack.Screen
//           name="CreateStudent"
//           component={CreateStudent}
//           options={({navigation}) => ({
//             headerShadowVisible: false,
        
//             headerRight: () => (
//               <Button
//                 onPress={()=> navigation.navigate('CreateStudentForm') }
//                 title="Add Student"
//                 color="#5062BD"
               
//               />
//             ),
//             headerStyle: {
//               backgroundColor: "#F5F5F5",
//             },
//           })}
//         />
//                <Stack.Screen
//           name="CreateStudentForm"
//           component={CreateStudentForm}
//           options={{
//             headerShadowVisible: false,
//             headerStyle: {
//               backgroundColor: "white",
//             },
//           }}
//         />
//                   <Stack.Screen
//           name="SchoolAdminDrawer"
//           component={SchoolAdminDrawer}
//           options={{
//             headerShadowVisible: false,
//             headerShown:false,
//             headerStyle: {
//               backgroundColor: "white",
//             },
//           }}
//         />
//                <Stack.Screen
//           name="TeacherDrawer"
//           component={TeacherDrawer}
//           options={{
//             headerShadowVisible: false,
//             headerShown:false,
//             headerStyle: {
//               backgroundColor: "white",
//             },
//           }}
//         />
//          <Stack.Screen
//           name="MarkAttendanceFilter"
//           component={MarkAttendanceFilter}
//           options={{
//             headerShadowVisible: false,
//             headerShown:false,
//             headerStyle: {
//               backgroundColor: "white",
//             },
//           }}
//         />
//                       <Stack.Screen
//           name="SchoolAdminProfile"
//           component={SchoolAdminProfile} />
    


//       </Stack.Navigator>
//     </NavigationContainer>

//   );

// export default StackNavigator;