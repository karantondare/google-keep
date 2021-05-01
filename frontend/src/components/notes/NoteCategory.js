import React, { useState } from "react";

const NoteCategory = ({ category, backgroundColor }) => {
  const [categoryColor, setCategoryColor] = useState("");

  if (backgroundColor === "#d7aefb") {
    setCategoryColor("#C6A0E7");
  } else if (backgroundColor === "#CCFF90") {
    setCategoryColor("#BCEB85");
  }

  return (
    <span
      style={{ color: "", backgroundColor: categoryColor }}
      className="mt-16 py-1 px-4 rounded-xl font-mono"
    >
      {category}
    </span>
  );
};

export default NoteCategory;
