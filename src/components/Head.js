import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="Menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
        ></img>

        <img
          className="h-8 mx-2"
          alt="yt-logo"
          src="https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg"
        ></img>
      </div>

      <div className="col-span-10 text-center ">
        <input
          className="  w-1/2 border border-gray-500 p-2 rounded-l-full    "
          type="text"
        />
        <button className="border border-gray-500 p-2 rounded-r-full bg-gray-200 ">
          Search
        </button>
      </div>

      <div className="col-span-1">
        <img
          className="h-8 "
          alt="user "
          src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
        ></img>
      </div>
    </div>
  );
};

export default Head;
