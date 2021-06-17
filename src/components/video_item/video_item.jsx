import React from 'react';
import styles from './video_item.module.css';

const VideoItem = (props) => {
  const {title, channelTitle} = props.video.snippet;
  const thumbnails = props.video.snippet.thumbnails.medium.url


  return(
    <li className={styles.video__container}>
      <div className={styles.video__item}>
        <img 
          className={styles.video__thumbnail} 
          src= {thumbnails} 
          alt="video thumbnail" 
        />
        <div className={styles.video__description}>
          <p className={styles.video__title}>{title}</p>
          <p className={styles.video__channel}>{channelTitle}</p>
        </div>
      </div>
    </li>
  )
};

export default VideoItem;