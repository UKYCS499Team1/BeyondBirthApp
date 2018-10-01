import React, { Component } from 'react';
import { Text, View } from 'react-native';
import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel
} from 'react-native-simple-radio-button';

var moods = [
    { label: "Happy", value: 0 },
    { label: "Average", value: 1 },
    { label: "Sad", value: 2 },
    { label: "Depressed", value: 3 },
    { label: "Stressed", value: 4 },
];

export default class HealthScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Welcome to your moodlet manager</Text>
              <RadioForm
                  radio_props={moods}
                  intial={2}
                  onPress={(value) => {}}
              />
          </View>
      );
    }
  }

