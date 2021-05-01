import React from "react";

const NoteBackgroundColor = ({
  backgroundColor,
  setBackgroundColor,
  categoryColor,
  setCategoryColor,
}) => {
  return (
    <div className="flex flex-col justify-center align-center">
      <div className="flex justify-between items-center ">
        <div
          style={{ backgroundColor: "#FFFFFF" }}
          className="p-4 rounded-full border-2	inline-block m-1 cursor-pointer"
          onClick={() => setBackgroundColor("#FFFFFF")}
        ></div>
        <div
          style={{ backgroundColor: "#F28B82" }}
          className="p-4 rounded-full border-2	inline-block m-1 cursor-pointer"
          onClick={() => setBackgroundColor("#F28B82")}
        ></div>
        <div
          style={{ backgroundColor: "#F28B82" }}
          className="p-4 rounded-full border-2	inline-block m-1 cursor-pointer"
          onClick={() => setBackgroundColor("#F28B82")}
        ></div>
        <div
          style={{ backgroundColor: "#FFF475" }}
          className="p-4 rounded-full border-2	inline-block m-1 cursor-pointer"
          onClick={() => setBackgroundColor("#FFF475")}
        ></div>
      </div>
      <div className="flex justify-between items-center ">
        <div
          style={{ backgroundColor: "#CCFF90" }}
          className="p-4 rounded-full border-2	inline-block m-1 cursor-pointer"
          onClick={() => setBackgroundColor("#CCFF90")}
        ></div>
        <div
          style={{ backgroundColor: "#A7FFEB" }}
          className="p-4 rounded-full border-2	inline-block m-1 cursor-pointer"
          onClick={() => setBackgroundColor("#A7FFEB")}
        ></div>
        <div
          style={{ backgroundColor: "#CBF0F8" }}
          className="p-4 rounded-full border-2	inline-block m-1 cursor-pointer"
          onClick={() => setBackgroundColor("#CBF0F8")}
        ></div>
        <div
          style={{ backgroundColor: "#AECBFA" }}
          className="p-4 rounded-full border-2	inline-block m-1 cursor-pointer"
          onClick={() => setBackgroundColor("#AECBFA")}
        ></div>
      </div>
      <div className="flex justify-between items-center ">
        <div
          style={{ backgroundColor: "#D7AEFB" }}
          className="p-4 rounded-full border-2	inline-block m-1 cursor-pointer"
          onClick={() => setBackgroundColor("#D7AEFB")}
        ></div>
        <div
          style={{ backgroundColor: "#FDCFE8" }}
          className="p-4 rounded-full border-2	inline-block m-1 cursor-pointer"
          onClick={() => setBackgroundColor("#FDCFE8")}
        ></div>
        <div
          style={{ backgroundColor: "#E6C9A8" }}
          className="p-4 rounded-full border-2	inline-block m-1 cursor-pointer"
          onClick={() => setBackgroundColor("#E6C9A8")}
        ></div>
        <div
          style={{ backgroundColor: "#E8EAED" }}
          className="p-4 rounded-full border-2	inline-block m-1 cursor-pointer"
          onClick={() => setBackgroundColor("#E8EAED")}
        ></div>
      </div>
    </div>
  );
};

export default NoteBackgroundColor;
