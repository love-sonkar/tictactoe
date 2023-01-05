import React from "react";

function Square({ value, SelectBox }) {
  return (
    <div
      onClick={SelectBox}
      className="h-16 w-16 grid place-content-center cursor-pointer border"
    >
      <h1 className="text-3xl text-white">{value}</h1>
    </div>
  );
}

export default Square;
