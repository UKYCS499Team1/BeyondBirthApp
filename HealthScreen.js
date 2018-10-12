import React, { Component } from 'react';
import { Text, View } from 'react-native';
import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel
} from 'react-native-simple-radio-button';

var mood1 = [
    { label: "1", value: 0 },
    { label: "2", value: 1 },
    { label: "3", value: 2 },
    { label: "4", value: 3 },
    { label: "5", value: 4 },
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

export default class HealthScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Please rank your mood accordingly</Text>
              <Text>Sad</Text>             
              <RadioForm
                  radio_props={mood1}
                  intial={1}
                  onPress={(value) => { }}
                  formHorizontal={true}
                  labelHorizontal={false}
                  buttonWrapStyle={{ marginLeft: 10 }}
                  buttonColor={'#F59BAD'}
                  selectedButtonColor={'#F59BAD'}
              />
              <Text>Happy</Text>
              <RadioForm                 
                  radio_props={mood2}
                  intial={1}
                  onPress={(value) => { }}
                  formHorizontal={true}
                  labelHorizontal={false}
                  buttonWrapStyle={{ marginLeft: 10 }}
                  buttonColor={'#FAD0D5'}
                  selectedButtonColor={'#FAD0D5'}
              />     
              <Text>Angry</Text>
              <RadioForm
                  radio_props={mood3}
                  intial={1}
                  onPress={(value) => { }}
                  formHorizontal={true}
                  labelHorizontal={false}
                  buttonWrapStyle={{ marginLeft: 10 }}
                  buttonColor={'#F8EADC'}
                  selectedButtonColor={'#F8EADC'}
              />
              <Text>Depressed</Text>
              <RadioForm
                  radio_props={mood4}
                  intial={1}
                  onPress={(value) => { }}
                  formHorizontal={true}
                  labelHorizontal={false}
                  buttonWrapStyle={{ marginLeft: 10 }}
                  buttonColor={'#778BBE'}
                  selectedButtonColor={'#778BBE'}
              />
              <Text>Calm</Text>
              <RadioForm
                  radio_props={mood5}
                  intial={1}
                  onPress={(value) => { }}
                  formHorizontal={true}
                  labelHorizontal={false}
                  buttonWrapStyle={{ marginLeft: 10 }}
                  buttonColor={'#9EDEF9'}
                  selectedButtonColor={'#9EDEF9'}
              /> 
          </View>
      );
    }
  }

