
import React, {Component}  from 'react';
import { View, Dimensions, StyleSheet,} from 'react-native';
import { Video } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';

export default class VideoComponent extends Component {
    state = {
      mute: false,
      shouldPlay: false,
      source: 'https://s3.us-east-2.amazonaws.com/beyondbirthvideos/Introduction+to+Jin+Shin+Jyutsu%C3%82%C2%AE+Self-Help.mp4'
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
          source={{ uri: this.state.source }}
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