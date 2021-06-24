import React from 'react';
import styles from './video_detail_channel.module.css'

const VideoDetailChannel = (props) => {
  
  const {video, channel} = props

  const subscriberCount = channel[0].statistics.subscriberCount;
  const hiddenSubscriberCount = channel[0].statistics.hiddenSubscriberCount
  let subscriber;
  if(subscriberCount >= 10000){
    subscriber = subscriberCount/10000 + '만명';
  }else if(subscriberCount >= 1000){
    subscriber = subscriberCount/1000 + '천명'
  }else{
    subscriber = subscriberCount + '명'
  }

  const description = channel[0].snippet.description;

  return(
    <div className={styles.container}>
      <div className={styles.channel_Container}>
        <div className={styles.channel}>
          <div className={styles.thumbnails}>
            <img src={channel[0].snippet.thumbnails.default.url} alt="" />
          </div>
          <div className={styles.channelInfo}>
            <h3 className={styles.channelTitle}>{video.snippet.channelTitle}</h3>
            {
              hiddenSubscriberCount ?
              (
                <span></span>
              ):(
                <p>구독자 {subscriber}</p>
              )
            }
          </div>
        </div>
        <div className={styles.subscribe}>
          <span>구독</span>
        </div>
      </div>
      <div className={styles.description}>
        {
          description.split('\n').map((line, i) => {
            return (<span key={i}>{line}<br/></span>)
          })
        }
      </div>
    </div>
  )
}

export default VideoDetailChannel;