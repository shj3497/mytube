import React from 'react';
import styles from './comment_item.module.css'

const CommentItem = (props) => {

  const {comment, today} = props
  const userImg = comment.snippet.topLevelComment.snippet.authorProfileImageUrl;
  const userId = comment.snippet.topLevelComment.snippet.authorDisplayName;
  const userComment = comment.snippet.topLevelComment.snippet.textOriginal
  const commentDate = comment.snippet.topLevelComment.snippet.publishedAt.split('T')[0].split('-').map(item=>parseInt(item));
  let result_arr = [];
  let date;
  for(let i=0; i<commentDate.length; i++){
    result_arr.push(today[i]-commentDate[i]);
  }
  if(result_arr[0] > 1){
    date = result_arr[0] - 1 + '년 전' ;
  }else if(result_arr[0] === 1){
    date = result_arr[0] * 12 + result_arr[1] + '개월 전';
  }else if(result_arr[0] === 0){
    if(result_arr[1] > 0){
      date = result_arr[1] + '개월 전';
    }else if(result_arr[1] === 0){
      date = result_arr[2] + '일 전'
    }
  }
  
  return(
    <li>
      <div class={styles.container}>
        <div className={styles.userImg}>
          <img src={userImg} alt="" />
        </div>
        <div className={styles.userInfo}>
          <p className={styles.userId}>{userId} <span>{date}</span></p>
          <p className={styles.userComment}>{userComment}</p>
        </div>
      </div>
    </li>
  )
}

export default CommentItem;