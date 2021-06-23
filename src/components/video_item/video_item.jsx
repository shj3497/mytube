import React, { memo } from 'react';
import styles from './video_item.module.css';

const VideoItem = memo(
  (props) => {
    const {title, channelTitle} = props.video.snippet;
    const thumbnails = props.video.snippet.thumbnails.medium.url
    const onVideoClick = props.onVideoClick;
    const {video, display} = props;
  
    const displayType = display === 'list' ? styles.list : styles.grid;
  
    return(
      <li className={`${styles.video__container} ${displayType}`} onClick={() => {onVideoClick(video)}}>
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
  }
);

export default VideoItem;