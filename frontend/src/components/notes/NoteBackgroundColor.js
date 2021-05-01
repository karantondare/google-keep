import React from "react";

const NoteBackgroundColor = ({ backgroundColor, setBackgroundColor }) => {
  return (
    <div className="flex justify-center align-center p-1">
      <div
        style={{ backgroundColor: "#d7aefb" }}
        className="p-2 rounded-full border-2	inline-block cursor-pointer"
        onClick={() => setBackgroundColor("#d7aefb")}
      ></div>
      <div
        style={{ backgroundColor: "#CCFF90" }}
        className="p-2 rounded-full border-2	inline-block ml-1 cursor-pointer"
        onClick={() => setBackgroundColor("#CCFF90")}
      ></div>
      <div
        style={{ backgroundColor: "#AECBFA" }}
        className="p-2 rounded-full border-2	inline-block ml-1 cursor-pointer"
        onClick={() => setBackgroundColor("#AECBFA")}
      ></div>
      <div
        style={{ backgroundColor: "#CBF0F8" }}
        className="p-2 rounded-full border-2	inline-block ml-1 cursor-pointer"
        onClick={() => setBackgroundColor("#CBF0F8")}
      ></div>
      <div
        style={{ backgroundColor: "#FDCFE8" }}
        className="p-2 rounded-full border-2	inline-block ml-1 cursor-pointer"
        onClick={() => setBackgroundColor("#FDCFE8")}
      ></div>
      <div
        style={{ backgroundColor: "#A7FFEB" }}
        className="p-2 rounded-full border-2	inline-block ml-1 cursor-pointer"
        onClick={() => setBackgroundColor("#A7FFEB")}
      ></div>
    </div>
  );
};

export default NoteBackgroundColor;
