import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Trending",
  "Music",
  "Gaming",
  "Live",
  "Study",
  "Songs",
  "cricket",
  "News",
  "cooking",
  "valanties",
  "Songs",
  "cricket",
  "News",
  "cooking",
  "valanties",
  "Theory",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
