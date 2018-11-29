import React, {Component}  from 'react';
import { Text, View, StyleSheet, Linking, Dimensions } from 'react-native';

export default class ResourceScreen extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style= {styles.text}
          onPress={() => Linking.openURL('https://www.voicesofhopelex.org/recovery-resources/treatment')}>
          Treatment
          </Text>
          <Text style={styles.smallText}>
          Recovery happens - find resources now.
          </Text>

          <Text style= {styles.text}
          onPress={() => Linking.openURL('https://www.voicesofhopelex.org/recovery-resources/recovery')}>
          Recovery
          </Text>
          <Text style={styles.smallText}>
          Recovery can be tough - find support.
          </Text>

          <Text style= {styles.text}
          onPress={() => Linking.openURL('https://www.voicesofhopelex.org/recovery-resources/friends-family')}>
          Friends and Family
          </Text>
          <Text style={styles.smallText}>
          Friends and family need recovery too
          </Text>
          
        </View>
      );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
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