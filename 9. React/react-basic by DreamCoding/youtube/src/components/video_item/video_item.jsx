import React from "react";

const VideoItem = ({ video: { snippet } }) => {
  //deconstructing을 활용해서 props.video. 생략
  return (
    <li className="w-1/2 p-1">
      <div className="shadow-md w-full h-full flex items-center border border-gray-300 cursor-pointer transform transition duration-250 hover:scale-105">
        <img
          className="w-2/5"
          src={snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <div className="ml-2">
          <p className="text-base">{snippet.title}</p>
          <p className="text-sm">{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
