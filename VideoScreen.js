import React, {Component}  from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import VideoComponent from './VideoComponent';
import VideoListJson from './VideoList.json'

export default class VideoScreen extends Component {

 componentWillMount = () => {

  console.log(VideoListJson.VideoList.Videos)
   /*
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
*/
  }

  
    render() {
      return (
        <ScrollView>
      {/*Generate the and display all the videos listed in the JSON file*/}
      {VideoListJson.VideoList.Videos.map((VideoInfo) => (
      <VideoComponent key={VideoInfo.ID} title={VideoInfo.title} newState={VideoInfo.url}/>
      ))}
        
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
  })