import React from 'react';

const VideoDetailIframe = ({video}) => {
  // const {video} = props
  return(
    <iframe
      className=""
      id="player" 
      type="text/html" 
      title="youtube video player"
      width="100%" 
      height="700px"
      src={`https://www.youtube.com/embed/${video.id.videoId}`}
      frameBorder="0"
      allowFullScreen
      >
    </iframe>
  )
};
export default VideoDetailIframe;