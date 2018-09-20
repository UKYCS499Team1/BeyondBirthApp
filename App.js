import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import VideoScreen from './VideoScreen';
import ThirdScreen from './ThirdScreen';
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
//This file will serve only for navigation, import the files for pages above then list them below

export default class app extends Component{
  render () {
    return (
      <Router>
    
          <Scene key="root">
            <Scene key="Home"
              component={HomeScreen}
              title="Home"
              initial
            />
            <Scene
              key="Videos"
              component={VideoScreen}
              title="Videos"
            />
          </Scene>
          
        </Router>
      );
  } 
};