import React, {Component} from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class HomeScreen extends Component {

  onPressMoodManager = () => {
    console.log("Pressed");
    Actions.MoodManager();
  }
  onPressAppointments = () => {
    console.log("Pressed"); 
    
  }
  onPressReminders = () => {
    Actions.MedicineReminders();
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
         onPress={this.onPressAppointments}
       >
       <Text style={styles.buttonText}>Appointments</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.button3}
         onPress={this.onPressReminders}
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
    height: ((Dimensions.get('window').height) -80) /3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#379FFB',
  },
  button2: {
    flexDirection: 'row',
    height: ((Dimensions.get('window').height) -80) /3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2190FB'
  },
  button3: {
    flexDirection: 'row',
    height: ((Dimensions.get('window').height) -80) /3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0E74E3'
  },
  buttonText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    fontFamily: 'notoserif',
    color: 'white'
  }
})