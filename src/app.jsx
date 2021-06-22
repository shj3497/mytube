import React, {useEffect, useState} from 'react';
import VideoList from './components/video_list/video_list';
import Loading from './components/loading/loading';
import SearchHeader from './components/search_header/search_header';
import styles from './app.module.css'

function App({ youtube }) {
  const [isLoading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  

  const search = query => {
    youtube.search(query)
      .then(videos => setVideos(videos));
  }


  useEffect(() => {
    youtube.mostPopular() //
      .then(videos => {
        setVideos(videos);
        setTimeout(()=>{
          setLoading(false);
        },1000)
      })
  }, []);
  
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
