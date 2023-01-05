import React from "react";

const RightContent = ({ Reset }) => {
  return (
    <div className="bg-red-200">
      <h1 className="text-2xl capitalize">Hii welcome to my game..</h1>
      <p className="text-base capitalize">Press here to start new game</p>
      <button
        className="rounded-md bordered py-2 px-4 text-center text-xl bg-gray-400 "
        onClick={() => Reset()}
      >
        Start
      </button>
    </div>
  );
};

export default RightContent;
