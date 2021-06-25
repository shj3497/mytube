import React from 'react';
import styles from './comment_list.module.css'
import CommentItem from '../comment_item/comment_item';

const CommentList = (props) => {
  
  const {comments} = props
  
  const day = new Date();
  const year = day.getFullYear();
  const month = day.getMonth() + 1;
  const date = day.getDate();
  let today = [];
  today.push(year)
  today.push(month)
  today.push(date);

  return (
    <ul className={styles.commentList}>
      {
        comments.map(comment => (<CommentItem key={comment.id} comment={comment} today={today} />))
      }
    </ul>
  )
}

export default CommentList
