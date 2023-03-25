import React from 'react';
import VideoPlayer from '../components/VideoPlayer';

const MyPage = () => {
  const videoUrl = 'https://www850.ff-02.com/token=NUq9-RByk4G0CrFYj-M36g/1679790243/139.194.0.0/186/f/eb/55ce76ba50bfe94bbbd14c65ccda9ebf-1080p.mp4'
  return (
    <div>
      <h1>My Page</h1>
      <VideoPlayer url={videoUrl} />
    </div>
  );
};

export default MyPage;
