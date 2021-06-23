import React, {useEffect, useState} from 'react';
import VideoList from './components/video_list/video_list';
import Loading from './components/loading/loading';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import styles from './app.module.css'

function App({ youtube }) {
  const [isLoading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const mainPageGo = () => {
    //! 함수명은 mainPageGo로 정했지만 사용자에게 영상을 추천하는 알고리즘은 없으므로 최근에 검색했던 리스트 페이지로 이동시켰다.
    setSelectedVideo(null);
  }

  const selectVideo = (video) => {
    setSelectedVideo(video);
  }

  const search = query => {
    youtube.search(query)
      .then(videos => {
        setVideos(videos)
        setSelectedVideo(null);
      });
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
          <SearchHeader onSearch={search} mainPageGo={mainPageGo} />
          <section className={styles.content}>
            {
              selectedVideo && (
                <div className={styles.detail}>
                <VideoDetail video={selectedVideo} />
                </div>
              )
            }
            <div className={styles.list}>
              <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'} />
            </div>
          </section>
          
        </div>
      )
  );
}

export default App;
