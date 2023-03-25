import React from 'react';

const VideoPlayer = ({ url }) => {
  return (
    <div>
      <video controls>
        <source src={`/api/video?url=${encodeURIComponent(url)}`} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
