import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className=" pt- 0 px-2 py-1 m-2 mt-0 bg-gray-200 rounded-lg">
        {name}
      </button>
    </div>
  );
};

export default Button;
