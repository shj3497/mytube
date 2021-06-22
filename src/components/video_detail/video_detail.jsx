import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = (props) => {

  const {video} = props;
  return(
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        id="player" 
        type="text/html" 
        width="100%" 
        height="500px"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        frameBorder="0"
        allowFullScreen
        >
      </iframe>
      <h2 className={styles.title}>{video.snippet.title}</h2>
      <h3 className={styles.channelTitle}>{video.snippet.channelTitle}</h3>
      
    </section>
  )
}

export default VideoDetail;