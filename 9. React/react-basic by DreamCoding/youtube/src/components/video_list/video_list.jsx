import React from "react";
import VideoItem from "../video_item/video_item";

const VideoList = (props) => (
  <ul className="flex flex-wrap pl-0 list-none">
    {props.videos.map((video) => (
      <VideoItem key={video.id} video={video} />
    ))}
  </ul>
);

export default VideoList;
