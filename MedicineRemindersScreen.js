import React, {Component}  from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class LocateScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Text> Medicine Reminders </Text>
          <TouchableOpacity
         style={styles.button}
         
       >
       <Text > ON </Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.button}
         
       >
       <Text > OFF </Text>
        </TouchableOpacity>

        <Text> Sends a daily reminder to take medicines </Text>
        </View>
      );
    }
  }

  const styles= StyleSheet.create({
      button: {
        flexDirection: 'column',
        height: 20,
        justifyContent: 'center',
        backgroundColor: '#f4aa89',
      }
  })