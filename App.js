import HomeScreen from './HomeScreen';
import VideoScreen from './VideoScreen';
import HealthScreen from './HealthScreen';
import SettingsScreen from './Settings';
import LocateScreen from './LocateScreen';
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
              key="Health"
              component={HealthScreen}
              title="Health"
            />
            <Scene
              key="Locate"
              component={LocateScreen}
              title="Locate"
            />
            <Scene
              key="Settings"
              component={SettingsScreen}
              title="Settings"
            />
          </Scene>

        </Router>
      );
  } 
};