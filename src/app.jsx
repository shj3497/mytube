import React, {useEffect, useState} from 'react';
import VideoList from './components/video_list/video_list';
import Loading from './components/loading/loading';
import SearchHeader from './components/search_header/search_header';
import styles from './app.module.css'

function App() {
  const [isLoading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    const myInfo = require('./myInfo.json');
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${myInfo.APIKey}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setVideos(result.items);
        setTimeout(() => {
          setLoading();
        });
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
        <div className={styles.app}>
          <SearchHeader />
          <VideoList videos={videos} />
        </div>
      )
  );
}

export default App;
