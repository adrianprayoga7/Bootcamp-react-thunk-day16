import React from 'react';


//untuk menampilkan detail video hasil search by id
const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading ...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof(video));
    return (
        <div>
            <div className='ui embed' style={{marginLeft: 10}}>
                <iframe src={videoSrc} allowFullScreen title='Video player'></iframe>
            </div>
            <div className='ui segment' style={{marginLeft: 10}} >
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;