import React from 'react';
import VideoItem from './VideoItem.js';


//berfungsi untuk membuat array baru hasil search video list
//handleVideoSelect untuk menampilkan video menjadi tampilan utama
const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
        // console.log(video.id);
    });
    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList;