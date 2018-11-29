import HomeScreen from './HomeScreen';
import VideoScreen from './VideoScreen';
import MoodScreen from './MoodScreen';
import AboutScreen from './AboutScreen';
import ResourceScreen from './ResourceScreen';
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
//This file will serve only for navigation, import the files for pages above then list them below

export default class app extends Component{
  render () {
    return (
      <Router >
    
          <Scene key="root">
            <Scene key="Home"
              component={HomeScreen}
              hideNavBar={true}
              initial
            />
            <Scene
              key="Videos"
              component={VideoScreen}
              title="Videos"
            />
            
            <Scene
              key="Resources"
              component={ResourceScreen}
              title="Resources"
            />
            <Scene
              key="AboutUs"
              component={AboutScreen}
              title="About Us"
            />
             <Scene
              key="MoodManager"
              component={MoodScreen}
              title="Mood Manager"
            />
              
          </Scene>

        </Router>
      );
  } 
};