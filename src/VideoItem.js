import React from "react";
import './video.css';

//fungsi untuk tampilan video utama sehingga dapat menampilkan thumnails,desc dan judul 
const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className='video-item item'>
            <img className='ui image' 
            src={video.snippet.thumbnails.default.url} 
            alt={video.snippet.description}/>
            <div className='content'>
                <div className='header'>{video.snippet.title}</div>
            </div>
        </div>
    )
};
export default VideoItem;