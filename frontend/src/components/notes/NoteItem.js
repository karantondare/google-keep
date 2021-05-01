import React, { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import NoteContext from "../../context/notes/noteContext";
import NoteModal from "../NoteModal";
import { VscSymbolColor } from "react-icons/vsc";
import NoteBackgroundColor from "./NoteBackgroundColor";
import { setCategoryColorFunc } from "../../utlis/setCategoryColorFunc";
import { FaRegBell, FaUserPlus, FaImage } from "react-icons/fa";
import { MdArchive, MdUnarchive } from "react-icons/md";
import { GrExpand } from "react-icons/gr";

const NoteItem = ({ note }) => {
  const noteContext = useContext(NoteContext);
  const { deleteNote } = noteContext;

  const [backgroundColor, setBackgroundColor] = useState("");
  const [categoryColor, setCategoryColor] = useState("");

  const { _id, title, description, category, backgroundColor: bgColor } = note;

  const handleDelete = () => {
    deleteNote(_id);
  };

  useEffect(() => {
    setCategoryColorFunc(bgColor, setCategoryColor);
  }, [bgColor]);

  //modal
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div
      className="w-96 h-full p-4 rounded-lg m-2 "
      style={{ backgroundColor: bgColor }}
    >
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p style={{ color: "#3c4043" }} className="mb-2">
        {description}
      </p>
      <span
        style={{ color: "", backgroundColor: categoryColor }}
        className="mt-16 py-1 px-4 rounded-xl font-mono"
      >
        {category}
      </span>

      <div className="flex justify-between items-center mt-4">
        <div className="flex justify-between">
          <button>
            <FaRegBell
              style={{ color: "#4A4A4A" }}
              className="mr-2"
              size={24}
            />
          </button>
          <button>
            <FaUserPlus
              style={{ color: "#4A4A4A" }}
              className="mr-2"
              size={24}
            />
          </button>

          <div className="relative mr-2 hover-trigger">
            <VscSymbolColor
              size={24}
              color="#172B4D"
              className="cursor-pointer"
              style={{ color: "#4A4A4A" }}
            />
            <div className="absolute bg-white border border-grey-100 px-4  py-2 hover-target">
              <NoteBackgroundColor
                backgroundColor={backgroundColor}
                setBackgroundColor={setBackgroundColor}
              />
            </div>
          </div>

          <button>
            <FaImage style={{ color: "#4A4A4A" }} className="mr-2" size={24} />
          </button>

          <button>
            <MdArchive
              style={{ color: "#4A4A4A" }}
              className="mr-2"
              size={24}
            />
          </button>

          <button>
            <MdUnarchive
              style={{ color: "#4A4A4A" }}
              className="mr-2"
              size={24}
            />
          </button>
        </div>
        <div className="flex justify-center items-center">
          <GrExpand
            size={18}
            color="#172B4D"
            className="cursor-pointer ml-2"
            onClick={toggleModal}
          />
          <MdDelete
            size={24}
            color="#172B4D"
            onClick={handleDelete}
            className="cursor-pointer ml-2"
          />
        </div>
      </div>

      <NoteModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        noteData={note}
        bgColor={bgColor}
        categoryColor={categoryColor}
      />
    </div>
  );
};

export default NoteItem;
