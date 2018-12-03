import React, {Component}  from 'react';
import {ScrollView} from 'react-native';
import VideoComponent from './VideoComponent';
import VideoListJson from './VideoList.json'

export default class VideoScreen extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      jsonFile: []
    }
  }
  //When the page is loaded, fetch for the data from the SQL server and save it to a JSON file
  
 componentWillMount = () => {
    console.log("Mounted");
    return fetch('http://jimwalters.homeip.net/video_list_json.php', {
  method: 'POST',
}).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({
        jsonFile: responseJson
      });
  });
    
}

    render() {
      return (
        <ScrollView style={{backgroundColor: '#0B5EC8'}}>
      {/*Generate and display all the videos listed in the JSON file with correct title, url, and ID*/}
      {console.log('STATE:' + this.state.jsonFile)}
      {this.state.jsonFile.map((VideoInfo) => (
      <VideoComponent key={VideoInfo[0]} title={VideoInfo[1]} newState={VideoInfo[2]}/>
      ))}
        
        </ScrollView>
      );
    }
  }
