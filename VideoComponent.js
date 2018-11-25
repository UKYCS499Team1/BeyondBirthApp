
import React, {Component}  from 'react';
import { View, Text, Dimensions, StyleSheet,} from 'react-native';
import { Video } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';

export default class VideoComponent extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      mute: false,
      shouldPlay: false,
      source: ''
    }
  }

    //When play button is pressed, run this function to flip play state
    handlePlay = () => {
      this.setState((prevState) => ({
        shouldPlay: !prevState.shouldPlay
      })
      )
    }

    //When mute button is pressed, run this function to flip mute state
    handleMute = () => {
      this.setState((prevState) => ({
        mute: !prevState.mute
      })
      )
    }
  
    render() {
      const { width } = Dimensions.get('window');
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <Text style={styles.title}>
          {this.props.title}
          </Text >
          <Video
          source={{ uri: this.props.newState }}
          shouldPlay= {this.state.shouldPlay}
          isMuted={this.state.mute}
          resizeMode="cover"
          style={{ width, height: 300 }}
          />  

          <View style={styles.controlBar}>

          {/* Mute button */}
          <MaterialIcons 
          name={this.state.mute ? "volume-mute" : "volume-up"}
          size={45} 
          color="white" 
          onPress={this.handleMute} 
          />
           {/* Play button */}
          <MaterialIcons 
          name={this.state.shouldPlay ? "pause" : "play-arrow"} 
          size={45}
          color="white" 
          onPress={this.handlePlay} 
          />

          </View>

          


          </View>

         
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center'
    },

    controlBar: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 45,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(52, 52, 52, 0.9)'
    },

    title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  })