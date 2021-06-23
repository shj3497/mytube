import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = (props) => {

  const {video, channel, videoInfo} = props;
  const subscriberCount = channel[0].statistics.subscriberCount;
  const hiddenSubscriberCount = channel[0].statistics.hiddenSubscriberCount
  let viewCount = videoInfo[0].statistics.viewCount;
  let publishTime = video.snippet.publishTime.split('T')[0].replaceAll('-','. ');
  
  viewCount = parseInt(viewCount).toLocaleString('ko-KR');
  
  
  let subscriber;
  if(subscriberCount >= 10000){
    subscriber = subscriberCount/10000 + '만명';
  }else if(subscriberCount >= 1000){
    subscriber = subscriberCount/1000 + '천명'
  }else{
    subscriber = subscriberCount + '명'
  }

  const desciption = channel[0].snippet.description;

  return(
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        id="player" 
        type="text/html" 
        title="youtube video player"
        width="100%" 
        height="500px"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        frameBorder="0"
        allowFullScreen
        >
      </iframe>
      <div className="">
        <div className={styles.title}>
          <h2>{video.snippet.title}</h2>
          <p>조회수 {viewCount}회 <span>• {publishTime}</span> </p>
        </div>
        <div className={styles.channel__Container}>
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
                  <p>{subscriber}</p>
                )
              }
            </div>
          </div>
          <div className={styles.description}>
            {
              desciption.split('\n').map((line, i) => {
                return (<span key={i}>{line}<br/></span>)
              })
            }
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default VideoDetail;