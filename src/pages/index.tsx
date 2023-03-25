import React from 'react';
import VideoPlayer from '../components/VideoPlayer';

const MyPage =  ({data}) => {
  //console.log(data)
 //const videoUrl = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
 const videoUrl = data.file
  return (
    <div>
      <h1>My Page</h1>
      <VideoPlayer url={videoUrl} />
    </div>
  );
};

export default MyPage;

export async function getServerSideProps() { const data = await fetch('https://641f5fff60493a000834ba1a--curious-begonia-a488e9.netlify.app/api/bypass?url=https://layarkacaxxi.icu/f/4m54xsz0q125weq/3659879afca2b4f8aab7ec8c84b1d46a').then((res)=> res.json())
//console.log(data)

    return { 

        props: { data}, 

    }; 
}