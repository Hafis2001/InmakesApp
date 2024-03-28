import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


import Register from "./src/Register";
import OTP from "./src/OTP";
import Student from "./src/Student";
import SchoolBoard from "./src/SchoolBoard";
import Onboard from "./src/Testing/Onboarding";

import DrawerContent from "./src/Drawer/DrawerContent";
import Test from "./src/Testing/Test";
import Biology from "./src/Subjects/Biology";
import Chemistry from "./src/Subjects/Chemistry";
import Physics from "./src/Subjects/Physics";
import Maths from "./src/Subjects/Maths";
import English from "./src/Subjects/English";
import Home from "./src/Home";

import MyBottomTab from "./src/MyBottomTab/MyBottomTab";
import Home1 from "./src/Home";
import MyTab from "./src/TopTab/MyTab";
import BiologyScreen from "./src/Subjects/BiologyPages.js/BiologyScreen";
import BiologyScroll from "./src/Subjects/BiologyScroll";
import Videos1 from "./src/Subjects/BiologyPages.js/Videos";
import MainClass from "./src/Subjects/BiologyPages.js/MainClass";

const Stack=createStackNavigator()
const Drawer=createDrawerNavigator()
const BottomTab=createBottomTabNavigator()
const Tab=createMaterialTopTabNavigator()

function Mystack(){
    return(
        <Stack.Navigator>
          <Stack.Screen
          name='Register'
          component={Register}
          options={{ headerShown:false}}/>
         <Stack.Screen
         name='OTP'
         component={OTP}
         options={{headerShown:false}}/>
         <Stack.Screen
         name='Student'
         component={Student}
         options={{headerShown:false}}/>
         <Stack.Screen
         name='SchoolBoard'
         component={SchoolBoard}
         options={{headerShown:false}}/>
         <Stack.Screen
         name='Onboard'
         component={Onboard}
         options={{headerShown:false}}/>
         <Stack.Screen
         name="Home"
         component={Home}
         options={{headerShown:false}}/>
        
         <Stack.Screen
         name="Test"
         component={Test}
         options={{headerShown:false}}/>
          <Stack.Screen
         name="Biology"
         component={Biology}
         options={{headerShown:false}} />
          <Stack.Screen
         name="Chemistry"
         component={Chemistry}
         />
          <Stack.Screen
         name="Physics"
         component={Physics}
         />
          <Stack.Screen
         name="Maths"
         component={Maths}
         />
          <Stack.Screen
         name="English"
         component={English}
         />
          <Stack.Screen
          name="MyBottomTab"
          component={MyBottomTab}
          options={{headerShown:false}}/>

<Stack.Screen
          name="Home1"
          component={Home1}
          
          options={({navigation}) => ({
            title: "Test"
          })}/>

         <Stack.Screen
          name="DrawerContent"
          component={DrawerContent}
          />
      
          <Stack.Screen
          name="BiologyScroll"
          component={BiologyScroll}
          />

          <Stack.Screen
          name="BiologyScreen"
          component={BiologyScreen}
           options={{
            headerShown:false
           }}/>
          <Stack.Screen
          name="MyTab"
          component={MyTab}
          />
          <Stack.Screen
          name="Videos"
          component={Videos1}/>
         
         
         <Stack.Screen
          name="MainClass"
          component={MainClass}
          options={{
            headerShown:false
          }}/>
        </Stack.Navigator>
        
        
        
    )
}




export default function APP(){
    return(
        <NavigationContainer>
            <Mystack/>
        </NavigationContainer>

    )
    
}

