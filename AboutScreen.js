import React, {Component}  from 'react';
import { Text, View, StyleSheet, Linking, Image } from 'react-native';

export default class AboutScreen extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style= {styles.text}
          onPress={() => Linking.openURL('https://www.voicesofhopelex.org/recovery-resources/treatment')}>
          About Beyond Birth
          </Text>
          <Image style={{width: 300, height: 200}}
          source={require('./Images/BeyondBirth.jpg')} 
            />
          <Text style={styles.smallText}>
          Beyond Birth is the period of time when you have been discharged from OB care but remain in the adjustment period of becoming a new mom.
           Our Beyond Birth program is a holistic approach for women with substance use disorders.
            Our program incorporates educational groups, individual counseling, group counseling, peer support and the medical treatment of substance use and mental health disorders.
             Patients are encouraged to bring their infants and children with them to appointments which allows us to offer guidance on infant and toddler care as the family adjusts to their new roles and routines. 
          </Text>
          
        </View>
      );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
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
    color: 'white',
    textAlign: 'center'
  }
})

