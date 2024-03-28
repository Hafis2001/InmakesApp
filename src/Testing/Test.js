


import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from '../Drawer/DrawerContent';
import ExamCorner from '../Drawer/ExamCorner';
import Subscription from '../Drawer/Subscription';
import Analytics from '../Drawer/Analytics';
import Download from '../Drawer/Downloads';
import Notification from '../Drawer/Notification';
import Referral from '../Drawer/Referrals';
import ShareApp from '../Drawer/ShareApp';




const Drawer = createDrawerNavigator();

export default function Test() {
  return (

      <Drawer.Navigator  drawerContent={props=><DrawerContent{...props}/>} >
        
        <Drawer.Screen name="DrawerContent" component={DrawerContent} 
        options={{
          headerShown:false
        }}/>
        
        <Drawer.Screen name="ExamCorner" component={ExamCorner} />
        <Drawer.Screen name="Subscription" component={Subscription} />
        <Drawer.Screen name="Analytics" component={Analytics} />
        <Drawer.Screen name="Download" component={Download} />
        <Drawer.Screen name="Notification" component={Notification} />
        <Drawer.Screen name="Referrals" component={Referral} />
        <Drawer.Screen name="ShareApp" component={ShareApp} />
        
      </Drawer.Navigator>
 
  );
}