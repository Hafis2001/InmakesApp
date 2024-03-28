/**
 * @format
 */

import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import"react-native-gesture-handler";


import {AppRegistry} from 'react-native';

import App from './App';
import Dropdown from './src/studentdrop';
import Student from './src/Student';
import SchoolBoard from './src/SchoolBoard';
import Onboard from './src/Testing/Onboarding';
import Test from './src/Testing/Test';
import Home from './src/Home';
import Subject from './src/Testing/Subjects';
import Analytics from './src/Drawer/Analytics';
import DrawerContent from './src/Drawer/DrawerContent';
import SubjectListScreen from './src/cheking/Check';
import Biology from './src/Subjects/Biology';
import BiologyScroll from './src/Subjects/BiologyScroll';
import BiologyScreen from './src/Subjects/BiologyPages.js/BiologyScreen';
import Videos1 from './src/Subjects/BiologyPages.js/Videos';
import Profile1 from './src/BottomTab/Profile';
import MainClass from './src/Subjects/BiologyPages.js/MainClass';

import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
