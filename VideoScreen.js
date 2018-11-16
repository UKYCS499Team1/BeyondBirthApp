import React, {Component}  from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import VideoComponent from './VideoComponent';
import VideoListJson from './VideoList.json'

export default class VideoScreen extends Component {

  componentWillMount = () => {
    console.log("Mounted");
    fetch('http://jimwalters.homeip.net/video_list.php', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  }),
}).then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
  }

    render() {
      return (
        <ScrollView>
        <Text style={styles.title}>
          {VideoListJson.VideoList.Videos[0].title}
        </Text >
        <VideoComponent newState={VideoListJson.VideoList.Videos[0].url} />
        <Text style={styles.title}>
          {VideoListJson.VideoList.Videos[1].title}
        </Text>
        <VideoComponent newState={VideoListJson.VideoList.Videos[1].url}/>
        <Text style={styles.title}>
          {VideoListJson.VideoList.Videos[2].title}
        </Text>
        <VideoComponent newState={VideoListJson.VideoList.Videos[2].url}/>
        <Text style={styles.title}>
          {VideoListJson.VideoList.Videos[3].title}
        </Text>
        <VideoComponent newState={VideoListJson.VideoList.Videos[3].url}/>
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