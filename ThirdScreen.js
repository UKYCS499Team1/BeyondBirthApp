import React, {Component}  from 'react';
import { Text, View } from 'react-native';

export default class ThirdScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Third Screen</Text>
        </View>
      );
    }
  }

