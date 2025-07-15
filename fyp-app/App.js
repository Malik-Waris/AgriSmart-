// In App.js in a new project

import * as React from 'react';
import { StyleSheet, Text, ImageBackground,View,Image,TextInput,
  TouchableOpacity,Pressable,ScrollView,onPressFunction} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Stack from '@react-navigation/stack'
import Profile1 from './src/Profile1';
import { firebase } from './config';
import Splash from './src/Splash';
import SignUp from './src/SignUp';
import Login from './src/Login';
import HomeScreen from './src/Home';
import Profile from './src/Profile';
import Help from './src/Help';
import AQI from './src/AQI';
import CropCycle from './src/CropCycle';
import ForgetPassword from './src/ForgetPassword';
import Weather from './src/Weather';
import { HeaderRight } from '@react-navigation/stack';
import Ionic from "react-native-vector-icons/Ionicons";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ResetPassword from './src/ResetPassword';
import Main from './src/Main';
import { Header } from 'react-native/Libraries/NewAppScreen';




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function Home() {
  return (
    <Tab.Navigator screenOptions={({route})=> ({
      tabBarIcon: ({focus,size,color}) => {
        let IconName;
        if(route.name === "HomeScreen"){
          IconName = focus ? "ios-home" : "ios-home-outline";
          size =  focus ? size + 8 : size + 5;
        }else if(route.name === "CropCycle"){
          IconName = focus ? "person-circle-sharp" : "sync-outline";
          size =  focus ? size + 8 : size + 5;
        }else if(route.name === "Profile"){
          IconName = focus ? "person-circle-sharp" : "person-circle-outline";
          size =  focus ? size + 8 : size + 5;
        }
        return <Ionic name={IconName} size={size} color={color}/>
      },
      tabBarActiveBackgroundColor:"#72CA6B",
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'gray',
    })} >
      <Tab.Screen name="HomeScreen" component={HomeScreen}/>
      <Tab.Screen name="CropCycle" component={CropCycle} />
      <Tab.Screen name="Profile" component={Profile} />
      
    </Tab.Navigator>
  );
}

function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword}/>
        <Stack.Screen name="Help" component={Help}/>
        <Stack.Screen name="WeatherAPI" component={Weather}/>
        <Stack.Screen name="AQI" component={AQI}/>

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}

export default App;