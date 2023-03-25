import React from 'react';
import VideoPlayer from '../components/VideoPlayer';

const MyPage = () => {
  const videoUrl = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
  return (
    <div>
      <h1>My Page</h1>
      <VideoPlayer url={videoUrl} />
    </div>
  );
};

export default MyPage;
