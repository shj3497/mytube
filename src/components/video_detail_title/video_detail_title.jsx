import React, {useState, useEffect, useRef} from 'react';
import styles from './video_detail_title.module.css';

const VideoDetailTitle = ({video, videoInfo}) => {

  const [likeCount, setLikeCount] = useState(0);
  const [disLikeCount, setDisLikeCount] = useState(0);
  const [likeCountChk, setLikeCountChk] = useState(true);
  const [disLikeCountChk, setDisLikeCountChk] = useState(true);

  const likeRef = useRef();
  const disLikeRef = useRef();

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
  
  const countUp = () => {
    if(likeCountChk){
      setLikeCount(parseInt(likeCount) + 1);
      setLikeCountChk(false);
      likeRef.current.style.color = `#3EA6FF`;
      if(!disLikeCountChk){
        setDisLikeCount(parseInt(disLikeCount) - 1);
        setDisLikeCountChk(true);
        disLikeRef.current.style.color = `#aaaaaa`;
      }
    }else{
      setLikeCount(parseInt(likeCount) - 1);
      setLikeCountChk(true);
      likeRef.current.style.color = `#aaaaaa`;
    }
  }
  
  const countDown = () => {
    if(disLikeCountChk){
      setDisLikeCount(parseInt(disLikeCount) + 1);
      setDisLikeCountChk(false);
      disLikeRef.current.style.color = `#3EA6FF`;
      if(!likeCountChk){
        setLikeCount(parseInt(likeCount) - 1);
        setLikeCountChk(true);
        likeRef.current.style.color = `#aaaaaa`;
      }
    }else{
      setDisLikeCount(parseInt(disLikeCount) - 1);
      setDisLikeCountChk(false);
      disLikeRef.current.style.color = `#aaaaaa`;
    }
  }

  useEffect(()=>{
    setLikeCount(videoInfo[0].statistics.likeCount);
    setDisLikeCount(videoInfo[0].statistics.dislikeCount);
  }, [videoInfo])


  return(
    <div className={styles.container}>
      <h2>{video.snippet.title}</h2>
      <div className={styles.viewCount}>
        <p>조회수 {viewCount}회 <span>• {publishTime}</span> </p>
        <div className={styles.like}>
          <ul>
            <li ref={likeRef} onClick={countUp}><span><i className="fas fa-thumbs-up"></i>{mathCount(likeCount)}</span></li>
            <li ref={disLikeRef} onClick={countDown}><span><i className="fas fa-thumbs-down"></i>{mathCount(disLikeCount)}</span></li>
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