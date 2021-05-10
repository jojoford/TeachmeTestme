import React from "react";

const VideoItem = ({video, onVideoSelec}) =>{
    return (
        <div onClick={()=> onVideoSelec(video)} className="video-item item">
        <img className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url}/>
        <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;