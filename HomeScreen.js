import React, {Component} from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class HomeScreen extends Component {

  onPress = () => {
    console.log("Pressed");
    Actions.Videos();
  }

  render() {
    return (
      <View style={styles.container}>
        
        <TouchableOpacity
         style={styles.button1}
         onPress={this.onPress}
       >
       <Text style={styles.buttonText}> Videos </Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.button2}
         onPress={this.onPress}
       >
       <Text style={styles.buttonText}> Videos </Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.button3}
         onPress={this.onPress}
       >
       <Text style={styles.buttonText}> Videos </Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.button4}
         onPress={this.onPress}
       >
       <Text style={styles.buttonText}> Videos </Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button1: {
    flexDirection: 'row',
    height: (Dimensions.get('window').height - 50) /4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple'
  },
  button2: {
    flexDirection: 'row',
    height: (Dimensions.get('window').height - 50) /4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey'
  },
  button3: {
    flexDirection: 'row',
    height: (Dimensions.get('window').height - 50) /4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
  button4: {
    flexDirection: 'row',
    height: (Dimensions.get('window').height - 50) /4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  buttonText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40
  }
})
