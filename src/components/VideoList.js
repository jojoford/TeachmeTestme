import React from "react";
import VideoItem from "./VideoItem";
import "./VideoItem.css";

const VideoList = ({videos, onVideoSelex}) =>{
    const renderVideos = videos.map((video) => {
       return( 
       <VideoItem key={video.id.videoId} video={video} onVideoSelec={onVideoSelex} />
       );
    });
    return <div className="ui relazed divided list">{renderVideos}</div>
};

export default VideoList;