import React, {Component}  from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class LocateScreen extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style= {styles.text}>
          Nicholasville
          </Text>
          <Text style={styles.smallText}>{`         
          1915 Nicholasville Rd, Lexington, KY, 40503
          Today's Hours  · 10am-8pm 
          In-Store wait: 0min
          Appointments available`}
          </Text>

          <Text style= {styles.text}>
          Richmond Road
          </Text>
          <Text style={styles.smallText}>{`          
          1915 Nicholasville Rd, Lexington, KY, 40503
          Today's Hours  · 10am-8pm 
          In-Store wait: 0min
          Appointments available`}
          </Text>

          <Text style= {styles.text}>
          Fayette Mall
          </Text>
          <Text style={styles.smallText}>{`          
          1915 Nicholasville Rd, Lexington, KY, 40503
          Today's Hours  · 10am-8pm 
          In-Store wait: 0min
          Appointments available`}
          </Text>
          
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
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