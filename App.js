import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import VideoScreen from './VideoScreen';
import ThirdScreen from './ThirdScreen';
//This file will serve only for navigation, import the files for pages above then list them below

export default createBottomTabNavigator({
  Home: HomeScreen,
  Videos: VideoScreen,
  Third: ThirdScreen
});