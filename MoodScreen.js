import React, { Component } from 'react';
import { Text, View } from 'react-native';
import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel
} from 'react-native-simple-radio-button';

var mood1 = [
    { label: " ", value: 0 },
    { label: " ", value: 1 },
    { label: " ", value: 2 },
    { label: " ", value: 3 },
    { label: " ", value: 4 },
];

var mood2 = [
    { label: " ", value: 0 },
    { label: " ", value: 1 },
    { label: " ", value: 2 },
    { label: " ", value: 3 },
    { label: " ", value: 4 },
];
var mood3 = [
    { label: " ", value: 0 },
    { label: " ", value: 1 },
    { label: " ", value: 2 },
    { label: " ", value: 3 },
    { label: " ", value: 4 },
];
var mood4 = [
    { label: " ", value: 0 },
    { label: " ", value: 1 },
    { label: " ", value: 2 },
    { label: " ", value: 3 },
    { label: " ", value: 4 },
];

var mood5 = [
    { label: " ", value: 0 },
    { label: " ", value: 1 },
    { label: " ", value: 2 },
    { label: " ", value: 3 },
    { label: " ", value: 4 },
];

export default class MoodScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#0B5EC8" }}>
              <Text style={{color: 'white'}}>Please rank your mood accordingly from 1-5 </Text>
              <Text style={{color: 'white'}}>(Starting from 1 on the left)</Text>
              <Text style={{color: 'white'}}>Sad</Text>             
              <RadioForm
                  radio_props={mood1}
                  intial={1}
                  onPress={(value) => { }}
                  formHorizontal={true}
                  labelHorizontal={false}
                  buttonWrapStyle={{ marginLeft: 10 }}
                  buttonColor={'white'}
                  selectedButtonColor={'white'}
              />
              <Text style={{color: 'white'}}>Happy</Text>
              <RadioForm                 
                  radio_props={mood2}
                  intial={1}
                  onPress={(value) => { }}
                  formHorizontal={true}
                  labelHorizontal={false}
                  buttonWrapStyle={{ marginLeft: 10 }}
                  buttonColor={'white'}
                  selectedButtonColor={'white'}
              />     
              <Text style={{color: 'white'}}>Angry</Text>
              <RadioForm
                  radio_props={mood3}
                  intial={1}
                  onPress={(value) => { }}
                  formHorizontal={true}
                  labelHorizontal={false}
                  buttonWrapStyle={{ marginLeft: 10 }}
                  buttonColor={'white'}
                  selectedButtonColor={'white'}
              />
              <Text style={{color: 'white'}}>Depressed</Text>
              <RadioForm
                  radio_props={mood4}
                  intial={1}
                  onPress={(value) => { }}
                  formHorizontal={true}
                  labelHorizontal={false}
                  buttonWrapStyle={{ marginLeft: 10 }}
                  buttonColor={'white'}
                  selectedButtonColor={'white'}
              />
              <Text style={{color: 'white'}}>Calm</Text>
              <RadioForm
                  radio_props={mood5}
                  intial={1}
                  onPress={(value) => { }}
                  formHorizontal={true}
                  labelHorizontal={false}
                  buttonWrapStyle={{ marginLeft: 10 }}
                  buttonColor={'white'}
                  selectedButtonColor={'white'}
              /> 
          </View>
      );
    }
  }

