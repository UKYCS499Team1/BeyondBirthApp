import React, {Component}  from 'react';
import { Text, View, StyleSheet, Linking } from 'react-native';

export default class AboutScreen extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style= {styles.text}
          onPress={() => Linking.openURL('https://www.voicesofhopelex.org/recovery-resources/treatment')}>
          About Beyond Birth
          </Text>
          <Text style={styles.smallText}>
          Beyond Birth is a health clinic that strives to protect women from drug abuse. We help lead women down the road to recovery for happy and healthy lives.
          </Text>
          
        </View>
      );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0B5EC8'


  },

  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  },

  smallText: {
    fontSize: 15,
    color: 'white'
  }
})

