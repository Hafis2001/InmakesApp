import * as React from 'react'; 
import { ScrollView, Text, View } from 'react-native'; 

        import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

        import AntDesign from 'react-native-vector-icons/AntDesign'
        import Home1 from '../Home';




import Profile1 from '../BottomTab/Profile';


function Home() { 
return ( 
	<View style={{ flex: 1, }}> 
		<Home1/> 
	</View> 
); 
} 

function Recent() { 
return ( 
	<View style={{ flex: 1, alignItems: 'center', 
				justifyContent: 'center' }}> 
	<Text>Subcription Page</Text> 
	</View> 
); 
} 

function Exam() { 
return ( 
	<View style={{ flex: 1, alignItems: 'center', 
				justifyContent: 'center' }}> 
	<Text>Analatics Page</Text> 
	</View> 
); 
} 
function Profile() { 
	return ( 
		
		<Profile1/>
       
		
	); 
	} 

	function Contact() { 
		return ( 
			<View style={{ flex: 1, alignItems: 'center', 
						justifyContent: 'center' }}> 
			<Text>Notification Page</Text> 
			</View> 
		); 
		} 

		
const BottomTab = createBottomTabNavigator(); 

export default function MyBottomTab() { 
return ( 
	 
	<BottomTab.Navigator
        screenOptions={{
            tabBarLabelStyle:{fontSize:12},
            tabBarItemStyle:{width:100},
            tabBarStyle:{backgroundColor:'#ffffff',
        position:'absolute',
        bottom:25,
        left:20,
         right:20,
        elevation:0,
        borderRadius:15,
        height:80},
            tabBarShowLabel:false,
            
        }}>
            <BottomTab.Screen
            name="Home"
            component={Home}
            options={{
                headerShown:false,
                tabBarActiveTintColor:'green',
                tabBarInactiveTintColor:'grey',
                tabBarIcon:({focused})=>
                focused ? <AntDesign name='home'  size={24} color='green'/>:<AntDesign name='home' size={24} color='grey'/>
            }}
            />

<BottomTab.Screen
            name="Recent"
            component={Recent}
            options={{
                headerShown:false,
                tabBarActiveTintColor:'green',
                tabBarInactiveTintColor:'grey',
                tabBarIcon:({focused})=>
                focused ? <AntDesign name='caretright'  size={24} color='green'/>:<AntDesign name='caretright' size={24} color='grey'/>
            }}
            />

<BottomTab.Screen
            name="Exam"
            component={Exam}
            options={{
                headerShown:false,
                tabBarActiveTintColor:'green',
                tabBarInactiveTintColor:'grey',
                tabBarIcon:({focused})=>
                focused ? <AntDesign name='filetext1' size={24} color='green'/>:<AntDesign name='filetext1' size={24} color='grey'/>
            }}
            />

<BottomTab.Screen
            name="Profile"
            component={Profile}
            options={{
                headerShown:false,
                tabBarActiveTintColor:'green',
                tabBarInactiveTintColor:'grey',
                tabBarIcon:({focused})=>
                focused ? <AntDesign name='user'  size={24} color='green'/>:<AntDesign name='user' size={24} color='grey'/>
            }}
            />

<BottomTab.Screen
            name="Contact"
            component={Contact}
            options={{
                headerShown:false,
                tabBarActiveTintColor:'green',
                tabBarInactiveTintColor:'grey',
                tabBarIcon:({focused})=>
                focused ? <AntDesign name='mail'  size={24} color='green'/>:<AntDesign name='mail' size={24} color='grey'/>
            }}
            />


        </BottomTab.Navigator>
    )
} 
