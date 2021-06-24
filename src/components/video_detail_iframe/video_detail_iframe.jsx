import React from 'react';
import styles from './video_detail_iframe.module.css'

const VideoDetailIframe = (props) => {
  const {video} = props
  return(
    <iframe
      className=""
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
  )
};
export default VideoDetailIframe;