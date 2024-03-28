import * as React from 'react'; 
import { Text, View } from 'react-native'; 

        import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Videos1 from '../Subjects/BiologyPages.js/Videos';


function Videos() { 
return ( 
	<View style={{ flex: 1, }}> 
		<Videos1/>
	</View> 
); 
} 

function ChapterTest() { 
return ( 
	<View style={{ flex: 1, alignItems: 'center', 
				justifyContent: 'center' }}> 
	<Text>Subcription Page</Text> 
	</View> 
); 
} 

function Resources() { 
return ( 
	<View style={{ flex: 1, alignItems: 'center', 
				justifyContent: 'center' }}> 
	<Text>Analatics Page</Text> 
	</View> 
); 
} 
function QnBank() { 
	return ( 
		<View style={{ flex: 1, alignItems: 'center', 
					justifyContent: 'center' }}> 
		<Text>Download Page</Text> 
		</View> 
	); 
	} 

	

		
const Tab = createMaterialTopTabNavigator(); 

export default function MyTab() { 
return ( 
	 
	
    <Tab.Navigator
    screenOptions={{
        tabBarLabelStyle:{
            color:'#ffffff'
        },
        tabBarStyle:{
            backgroundColor:'#001a33',
            
        }
    }} >
        <Tab.Screen
        name="Videos"
        component={Videos}
        />
        <Tab.Screen
        name="Chapter Test"
        component={ChapterTest}
        />
        <Tab.Screen
        name="Resources"
        component={Resources}
        />
        <Tab.Screen
        name="Qn Bank"
        component={QnBank}
        />
    </Tab.Navigator>
    )
} 
