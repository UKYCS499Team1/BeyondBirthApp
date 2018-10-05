import React, {Component}  from 'react';
import { Text, View, Dimensions, StyleSheet, ScrollView } from 'react-native';
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
        <ScrollView>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View>
          <Video
          source={{ uri: 'https://s3.us-east-2.amazonaws.com/beyondbirthvideos/American.Horror.Story.S08E03.Forbidden.Fruit.720p.AMZN.WEB-DL.DDP5.1.H.264-NTb%5Beztv%5D.mkv' }}
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


            <View>
          <Video
          source={{ uri: 'https://s3.us-east-2.amazonaws.com/beyondbirthvideos/American.Horror.Story.S08E03.Forbidden.Fruit.720p.AMZN.WEB-DL.DDP5.1.H.264-NTb%5Beztv%5D.mkv' }}
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


<View>
          <Video
          source={{ uri: 'https://s3.us-east-2.amazonaws.com/beyondbirthvideos/American.Horror.Story.S08E03.Forbidden.Fruit.720p.AMZN.WEB-DL.DDP5.1.H.264-NTb%5Beztv%5D.mkv' }}
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
        </ScrollView>
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