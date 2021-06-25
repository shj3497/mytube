import React from 'react';
import VideoItem from '../video_item/video_item';
import style from './video_list.module.css'
const VideoList = ({videos, onVideoClick, display}) => {

  return (
    <ul className={style.video__list}>
      {
        videos.map(video => (
          // key값 주의
          <VideoItem key={video.id.videoId} video={video} onVideoClick={onVideoClick} display={display} />
          )
        )
      }
    </ul>
    )
};

export default VideoList;