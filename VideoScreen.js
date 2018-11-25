import React, {Component}  from 'react';
import {ScrollView} from 'react-native';
import VideoComponent from './VideoComponent';
import VideoListJson from './VideoList.json'

export default class VideoScreen extends Component {

  //When the page is loaded, fetch for the data from the SQL server and save it to a JSON file
/*
 componentWillMount = () => {

  console.log(VideoListJson.VideoList.Videos)

    console.log("Mounted");
    fetch('http://jimwalters.homeip.net:3306', {
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
  */
  
    render() {
      return (
        <ScrollView>
      {/*Generate and display all the videos listed in the JSON file with correct title, url, and ID*/}
      {VideoListJson.VideoList.Videos.map((VideoInfo) => (
      <VideoComponent key={VideoInfo.ID} title={VideoInfo.title} newState={VideoInfo.url}/>
      ))}
        
        </ScrollView>
      );
    }
  }
