import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="flex flex-wrap m-3 p-2 rounded-lg shadow-lg w-80">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <h3 className="font-bold">{title}</h3>
      <h4>{channelTitle}</h4>
      <p>
        Views: {statistics.viewCount} Likes: {statistics.likeCount}
      </p>
    </div>
  );
};
export default VideoCard;
