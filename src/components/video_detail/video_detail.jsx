import React from 'react';
import styles from './video_detail.module.css';
import VideoDetailIframe from '../video_detail_iframe/video_detail_iframe';
import VideoDetailTitle from '../video_detail_title/video_detail_title';
import VideoDetailChannel from '../video_detail_channel/video_detail_channel';

const VideoDetail = (props) => {

  const {video, channel, videoInfo} = props;

  return(
    <section className={styles.detail}>
      <VideoDetailIframe video={video} />
      <div className="">
        <VideoDetailTitle video={video} videoInfo={videoInfo}  />
        <VideoDetailChannel video={video} channel={channel} />
      </div>
    </section>
  )
}

export default VideoDetail;