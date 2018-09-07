import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './HomeTab';
import SecondScreen from './SecondTab';
import ThirdScreen from './ThirdScreen';


//This file will serve only for navigation
export default createBottomTabNavigator({
  Home: HomeScreen,
  Second: SecondScreen,
  Third: ThirdScreen
});