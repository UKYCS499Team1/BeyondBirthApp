import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text, View, Alert } from 'react-native';
import { Linking, StyleSheet } from 'react-native';
import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel
} from 'react-native-simple-radio-button';

var mood1 = [

    { label: "", value: 1 },
    { label: "", value: 2 },
    { label: "", value: 3 },
    { label: "", value: 4 },
    { label: "", value: 5 },
];

var mood2 = [
    { label: " ", value: 1 },
    { label: " ", value: 2 },
    { label: " ", value: 3 },
    { label: " ", value: 4 },
    { label: " ", value: 5 },
];

var mood3 = [
    { label: " ", value: 1 },
    { label: " ", value: 2 },
    { label: " ", value: 3 },
    { label: " ", value: 4 },
    { label: " ", value: 5 },
];

var mood4 = [
    { label: " ", value: 1 },
    { label: " ", value: 2 },
    { label: " ", value: 3 },
    { label: " ", value: 4 },
    { label: " ", value: 5 },
];

var mood5 = [
    { label: " ", value: 1 },
    { label: " ", value: 2 },
    { label: " ", value: 3 },
    { label: " ", value: 4 },
    { label: " ", value: 5 },
];

var mood1value = 0;
var mood2value = 0;
var mood3value = 0;
var mood4value = 0;
var mood5value = 0;

var showMood1 = 0;
var showMood2 = 0;
var showMood3 = 0;
var showMood4 = 0;
var showMood5 = 0;

export default class MoodScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#0B5EC8" }}>
              <Text style={{color: 'white'}}>Please rank your mood accordingly from 1-5 </Text>
              <Text style={{color: 'white'}}>(Starting from 1 on the left)</Text>
              <Text style={{color: 'white'}}>Sad</Text>             
              <RadioForm
                  radio_props={mood1}
                  intial={-1}
                  onPress={(value) => { mood1value = value, console.log(mood1value) }}
                  formHorizontal={true}
                  labelHorizontal={false}
                  buttonWrapStyle={{ marginLeft: 10 }}
                  buttonColor={'white'}
                  selectedButtonColor={'white'}
              />
              <Text style={{color: 'white'}}>Happy</Text>
              <RadioForm                 
                  radio_props={mood2}
                  intial={-1}
                  onPress={(value) => { mood2value = value, console.log(mood2value) }}
                  formHorizontal={true}
                  labelHorizontal={false}
                  buttonWrapStyle={{ marginLeft: 10 }}
                  buttonColor={'white'}
                  selectedButtonColor={'white'}
              />     
              <Text style={{color: 'white'}}>Angry</Text>
              <RadioForm
                  radio_props={mood3}
                  intial={-1}
                  onPress={(value) => { mood3value = value, console.log(mood3value) }}
                  formHorizontal={true}
                  labelHorizontal={false}
                  buttonWrapStyle={{ marginLeft: 10 }}
                  buttonColor={'white'}
                  selectedButtonColor={'white'}
              />
              <Text style={{color: 'white'}}>Depressed</Text>
              <RadioForm
                  radio_props={mood4}
                  intial={-1}
                  onPress={(value) => { mood4value = value, console.log(mood4value) }}
                  formHorizontal={true}
                  labelHorizontal={false}
                  buttonWrapStyle={{ marginLeft: 10 }}
                  buttonColor={'white'}
                  selectedButtonColor={'white'}
              />
              <Text style={{color: 'white'}}>Calm</Text>
              <RadioForm
                  radio_props={mood5}
                  intial={-1}
                  onPress={(value) => { mood5value = value, console.log(mood5value) }}
                  formHorizontal={true}
                  labelHorizontal={false}
                  buttonWrapStyle={{ marginLeft: 10 }}
                  buttonColor={'white'}
                  selectedButtonColor={'white'}
              /> 
              <TouchableOpacity onPress={this.saveData}>
                  <Text style={{
                          fontSize: 25,
                          fontWeight: 'bold',
                          color: 'white'
                            }}
                    > Submit </Text>
              </TouchableOpacity> 
              <TouchableOpacity onPress={this.viewData}>
              <Text style={{
                          fontSize: 25,
                          fontWeight: 'bold',
                          color: 'white'
                            }}
                    > View </Text>
              </TouchableOpacity>
             
          </View>
      );
    }


    saveData() {

        var moodJSON = {
            sad: mood1value,
            happy: mood2value,
            angry: mood3value,
            depressed: mood4value,
            calm: mood5value,
        };

        showMood1 = moodJSON.sad
        showMood2 = moodJSON.happy
        showMood3 = moodJSON.angry
        showMood4 = moodJSON.depressed
        showMood5 = moodJSON.calm
        
        AsyncStorage.setItem('moodJSON', JSON.stringify(moodJSON), () => {
            AsyncStorage.getItem('moodJSON', (err, result) => {
                console.log(result);
            });
        });

        if (showMood1 == 5) {
           Alert.alert(
                'Message',
                'Saving Mood Values. Here is an article to help lift your spirits',
                [
                    { text: 'Article', onPress: () => Linking.openURL('http://www.uky.edu/nursing/beyond-birth') },
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    
                ],
                { cancelable: false }
            )
            
        }
        else if (showMood2 == 5)
        {
            Alert.alert(
                'Message',
                'Saving Mood Values. Here is an article to help lift your spirits',
                [
                    { text: 'Article', onPress: () => Linking.openURL('http://www.uky.edu/nursing/beyond-birth') },
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },

                ],
                { cancelable: false }
            )
        }
        else if (showMood3 == 5) {
            Alert.alert(
                'Message',
                'Saving Mood Values. Here is an article to help lift your spirits',
                [
                    { text: 'Article', onPress: () => Linking.openURL('http://www.uky.edu/nursing/beyond-birth') },
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },

                ],
                { cancelable: false }
            )
        }
        else if (showMood4 == 5) {
            Alert.alert(
                'Message',
                'Saving Mood Values. Here is an article to help lift your spirits',
                [
                    { text: 'Article', onPress: () => Linking.openURL('http://www.uky.edu/nursing/beyond-birth') },
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },

                ],
                { cancelable: false }
            )
        }
        else if (showMood5 == 5) {
            Alert.alert(
                'Message',
                'Saving Mood Values. Here is an article to help lift your spirits',
                [
                    { text: 'Article', onPress: () => Linking.openURL('http://www.uky.edu/nursing/beyond-birth') },
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },

                ],
                { cancelable: false }
            )
        }
        else {
            alert('Saving Mood Values')
        }
    }

    viewData() {
        alert('Sad: ' + showMood1 + '  Happy: ' + showMood2 + '  Angry: ' + showMood3 + '  Depressed: ' + showMood4 + '  Calm: ' + showMood5)
    }
  }

