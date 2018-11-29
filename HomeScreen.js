import React, {Component} from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class HomeScreen extends Component {

  onPressVid = () => {
    console.log("Pressed");
    Actions.Videos();
  }
  onPressMoodManager = () => {
    console.log("Pressed");
    Actions.MoodManager();
  }
  onPressResources = () => {
    console.log("Pressed");
    Actions.Resources();
  }

  onPressAboutUs = () => {
    console.log("Pressed");
    Actions.AboutUs();
  }

  render() {
    return (
      <View style={styles.container}>
        
        <TouchableOpacity
         style={styles.button1}
         onPress={this.onPressVid}
       >
       <Text style={styles.buttonText}> Videos </Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.button2}
         onPress={this.onPressMoodManager}
       >
       <Text style={styles.buttonText}> Mood Manager </Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.button3}
         onPress={this.onPressResources}
       >
       <Text style={styles.buttonText}> Resources </Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.button4}
         onPress={this.onPressAboutUs}
       >
       <Text style={styles.buttonText}> About Us </Text>
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
    height: (Dimensions.get('window').height) /4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#379FFB',
  },
  button2: {
    flexDirection: 'row',
    height: (Dimensions.get('window').height) /4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2190FB'
  },
  button3: {
    flexDirection: 'row',
    height: (Dimensions.get('window').height) /4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0E74E3'
  },
  button4: {
    flexDirection: 'row',
    height: (Dimensions.get('window').height) /4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0B5EC8'
  },
  buttonText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    fontFamily: 'notoserif',
    color: 'white'
  }
})
