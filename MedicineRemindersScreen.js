import React, {Component}  from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class LocateScreen extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      remindersStatus: false
    }
  }

  handleStatusOn = () => {
    this.setState(() => ({
      remindersStatus: true
    })
    )
    console.log(this.state.remindersStatus)
  }
  handleStatusOff = () => {
    this.setState(() => ({
      remindersStatus: false
    })
    )
    console.log(this.state.remindersStatus)
  }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Text style={styles.text}> Medicine Reminders </Text>
        <View style={styles.container} >
          <TouchableOpacity
         style={styles.button}
         onPress={this.handleStatusOn} 
         
       >
       <Text style={styles.buttonText}> ON </Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.button}
         onPress={this.handleStatusOff} 
         
       >
       <Text style={styles.buttonText} > OFF </Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.smallText}> Sends a daily reminder to take medicines </Text>
        </View>
      );
    }
  }

  const styles= StyleSheet.create({
      container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
  

      },

      text: {
        fontSize: 25,
        fontWeight: 'bold'
      },

      smallText: {
        fontSize: 15
      },

      buttonText: {
        fontWeight: 'bold',
        color: 'white'
      },

      button: {
        flexDirection: 'row',
        height: 30,
        justifyContent: 'space-between',
        padding: 25,
        alignItems: 'center',
        backgroundColor: '#0B5EC8',
      }

  })