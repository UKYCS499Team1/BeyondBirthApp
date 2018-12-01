import React, {Component}  from 'react';
import {ScrollView} from 'react-native';
import VideoComponent from './VideoComponent';
import VideoListJson from './VideoList.json'

export default class VideoScreen extends Component {

  //When the page is loaded, fetch for the data from the SQL server and save it to a JSON file
  //http://jimwalters.homeip.net:3306
 componentWillMount = () => {

  console.log(VideoListJson.VideoList.Videos)
    console.log("Mounted");
    return fetch('http://facebook.github.io/react-native/movies.json', {
  method: 'POST',
}).then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        movies: responseJson.movies
    })
    .catch((error) => {
      console.error(error);
    });
  });
}

    render() {
      return (
        <ScrollView style={{backgroundColor: '#0B5EC8'}}>
      {/*Generate and display all the videos listed in the JSON file with correct title, url, and ID*/}
      {VideoListJson.VideoList.Videos.map((VideoInfo) => (
      <VideoComponent key={VideoInfo.ID} title={VideoInfo.title} newState={VideoInfo.url}/>
      ))}
        
        </ScrollView>
      );
    }
  }
