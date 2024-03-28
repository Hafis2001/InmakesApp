import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Exam from "./Exam";
import Recent from "./Recent";
import Profile from "./Profile";
import Contact from "./Contacts";
import Home from "../Home";

const Tab=createBottomTabNavigator();

const Tabs=()=>{
    return(
<Tab.Navigator screenOptions={{
    headerShown:false
}}>
    <Tab.Screen name="HomeBottom" component={Home}/>
    <Tab.Screen name="Exam" component={Exam}/>
    <Tab.Screen name="Recent" component={Recent}/>
    <Tab.Screen name="Profile" component={Profile}/>
    <Tab.Screen name="Contact" component={Contact}/>
</Tab.Navigator>
    );
}

export default Tabs;