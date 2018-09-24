import React, {Component}  from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { Video } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';

export default class VideoScreen extends Component {
    state = {
      mute: false,
      shouldPlay: false
    }

    handlePlay = () => {
      this.setState((prevState) => ({
        shouldPlay: !prevState.shouldPlay
      })
      )
    }

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
          <Video
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          shouldPlay= {this.state.shouldPlay}
          isMuted={this.state.mute}
          resizeMode="cover"
          style={{ width, height: 300 }}
          />  

          <View style={styles.controlBar}>

          <MaterialIcons 
          name={this.state.mute ? "volume-mute" : "volume-up"}
          size={45} 
          color="white" 
          onPress={this.handleMute} 
          />

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
    }
  })