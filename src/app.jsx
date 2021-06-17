import React, {useEffect, useState} from 'react';
import VideoList from './components/video_list/video_list';
import Loading from './components/loading/loading';

function App() {
  const [isLoading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    const myInfo = require('./myInfo.json');
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=${myInfo.APIKey}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setVideos(result.items);
        setTimeout(() => {
          setLoading();
        }, 3000);
      })
      .catch(error => console.log('error', error));
  }, [])
  
  return (
    isLoading ? 
      (
        <Loading />
      )
      :
      (
        <VideoList videos={videos} />
      )
  );
}

export default App;
