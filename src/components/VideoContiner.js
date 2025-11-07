import React, { useEffect, useState } from "react";
import { Video_URL } from "../utils/content";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContiner = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(Video_URL);
    const json = await data.json();
    await setVideos(json.items);
  };

  if (videos.length === 0) return <div>Loading...</div>;

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/Watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContiner;
