import React, {Component}  from 'react';
import { Text, View, Dimensions, StyleSheet, ScrollView } from 'react-native';
import VideoComponent from './VideoComponent';

export default class VideoScreen extends Component {

    render() {
      return (
        <ScrollView>
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center'
    },

    controlBar: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 45,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(52, 52, 52, 0.9)'
    }
  })