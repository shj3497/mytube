import React from 'react';
import styles from './loading.module.css';

const Loading = (props) => (
      
  <div className={styles.container}>
    <div className={styles.loader}><span></span></div>
  </div>
  );

export default Loading;