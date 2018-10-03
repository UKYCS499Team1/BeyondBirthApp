import React, {Component} from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class HomeScreen extends Component {

  onPressMoodManager = () => {
    console.log("Pressed");
    Actions.MoodManager();
  }
  onPressMood = () => {
    console.log("Pressed"); 
  }
  onPressLocate = () => {
    console.log("Pressed"); 
  }

  render() {
    return (
      <View style={styles.container}>
        
        <TouchableOpacity
         style={styles.button1}
         onPress={this.onPressMoodManager}
       >
       <Text style={styles.buttonText}> Mood Manager </Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.button2}
         onPress={this.onPressMood}
       >
       <Text style={styles.buttonText}>Appointments</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.button3}
         onPress={this.onPressLocate}
       >
       <Text style={styles.buttonText}> Medicine Reminders </Text>
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
    height: (Dimensions.get('window').height) /3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4aa89',
  },
  button2: {
    flexDirection: 'row',
    height: (Dimensions.get('window').height) /3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ef8383'
  },
  button3: {
    flexDirection: 'row',
    height: (Dimensions.get('window').height) /3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f06261'
  },
  buttonText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    fontFamily: 'notoserif'
  }
})