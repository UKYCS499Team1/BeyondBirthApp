import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './HomeTab';
import SecondScreen from './VideoTab';
import ThirdScreen from './ThirdScreen';

//This file will serve only for navigation, import the files for pages above then list them below
export default createBottomTabNavigator({
  Home: HomeScreen,
  Second: SecondScreen,
  Third: ThirdScreen
});