import React, {useEffect, useState} from 'react';
import VideoList from './components/video_list/video_list';
import Loading from './components/loading/loading';
import SearchHeader from './components/search_header/search_header';
import styles from './app.module.css'
import myInfo from './myInfo.json';

function App() {
  const [isLoading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  

  const search = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${myInfo.APIKey}`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id: item.id.videoId})))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  }


  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=${myInfo.APIKey}`, requestOptions)
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
          <SearchHeader onSearch={search} />
          <VideoList videos={videos} />
        </div>
      )
  );
}

export default App;
