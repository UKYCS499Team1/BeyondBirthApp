import React, {Component}  from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { Video } from 'expo';

export default class VideoScreen extends Component {
    render() {
      const { width } = Dimensions.get('window');
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Anything could go here!</Text>

          <Video
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          shouldPlay
          resizeMode="cover"
          style={{ width, height: 300 }}
/>

        </View>
      );
    }
  }