import React from "react";

const TopicVideoBox = ({ url }) => {
  return (
    <div className=" w-full py-5 px-4 bg-gray-300 flex justify-center">
      <video className= "rounded-md shadow-sm" width="850" height="500" controls>
        <source src="..Videos/video1.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default TopicVideoBox;
