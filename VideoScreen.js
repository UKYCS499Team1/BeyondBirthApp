import React, {Component}  from 'react';
import { Text, View, Dimensions, StyleSheet, ScrollView } from 'react-native';
import VideoComponent from './VideoComponent';
import VideoListJson from './VideoList.json'

export default class VideoScreen extends Component {

    render() {
      return (
        <ScrollView>
        <Text style={styles.title}>
          {VideoListJson.VideoList.Videos[0].title}
        </Text >
        <VideoComponent />
        <Text style={styles.title}>
          {VideoListJson.VideoList.Videos[1].title}
        </Text>
        <VideoComponent />
        <Text style={styles.title}>
          {VideoListJson.VideoList.Videos[2].title}
        </Text>
        <VideoComponent />
        <Text style={styles.title}>
          {VideoListJson.VideoList.Videos[3].title}
        </Text>
        <VideoComponent />
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

    title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'

    }
  })