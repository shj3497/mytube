import React from 'react';
import styles from './video_detail_title.module.css';

const VideoDetailTitle = (props) => {

  const {video, videoInfo} = props;

  let viewCount = videoInfo[0].statistics.viewCount;
  let publishTime = video.snippet.publishTime.split('T')[0].replaceAll('-','. ');
  viewCount = parseInt(viewCount).toLocaleString('ko-KR');

  const mathCount = (number) => {
    let result;
    if(number >= 10000){
      result = Math.floor(number/10000)+ '만명';
    }else if(number >= 1000){
      result = Math.floor(number/1000) + '천명'
    }else{
      result = number + '명'
    }
    return result;
  }

  let likeCount = mathCount(videoInfo[0].statistics.likeCount);
  let disLikeCount = mathCount(videoInfo[0].statistics.dislikeCount);

  return(
    <div className={styles.container}>
      <h2>{video.snippet.title}</h2>
      <div className={styles.viewCount}>
        <p>조회수 {viewCount}회 <span>• {publishTime}</span> </p>
        <div className={styles.like}>
          <ul>
            <li><span><i className="fas fa-thumbs-up"></i>{likeCount}</span></li>
            <li><span><i className="fas fa-thumbs-down"></i>{disLikeCount}</span></li>
            <li><span><i className="fas fa-share"></i>공유</span></li>
            <li><span><i className="fas fa-save"></i>저장</span></li>
            <li><i className="fas fa-ellipsis-h"></i></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default VideoDetailTitle;