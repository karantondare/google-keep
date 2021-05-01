import React, { useContext, useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import NoteContext from "../../context/notes/noteContext";
import NoteModal from "../NoteModal";
import { VscSymbolColor } from "react-icons/vsc";
import NoteBackgroundColor from "./NoteBackgroundColor";

const NoteItem = ({ note }) => {
  const noteContext = useContext(NoteContext);
  const { deleteNote } = noteContext;

  const [backgroundColor, setBackgroundColor] = useState("");

  const { _id, title, description, category } = note;

  const handleDelete = () => {
    deleteNote(_id);
  };

  //modal
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  // var myArray = [
  //   "#d7aefb",
  //   "#CCFF90",
  //   "#AECBFA",
  //   "#CBF0F8",
  //   "#FDCFE8",
  //   "#A7FFEB",
  // ];
  // var ramdomColor = myArray[Math.floor(Math.random() * myArray.length)];

  return (
    <div
      className="w-96 p-4 rounded-lg m-2"
      style={{ backgroundColor: backgroundColor }}
    >
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p style={{ color: "#9c9a9a" }} className="mb-2">
        {description}
      </p>
      <span
        style={{ color: "plum" }}
        className="mt-16 py-1 px-4 rounded-xl bg-gray-200 font-mono"
      >
        {category}
      </span>
      <div className="flex flex-row-reverse">
        <MdDelete
          size={20}
          color="#172B4D"
          onClick={handleDelete}
          className="cursor-pointer ml-2"
        />
        <MdEdit
          size={20}
          color="#172B4D"
          className="cursor-pointer ml-2"
          onClick={toggleModal}
        />

        <div className="relative hover-trigger">
          <VscSymbolColor
            size={20}
            color="#172B4D"
            className="cursor-pointer ml-2"
          />
          <div className="absolute bg-white border border-grey-100 px-4 py-2 hover-target">
            <NoteBackgroundColor
              backgroundColor={backgroundColor}
              setBackgroundColor={setBackgroundColor}
            />
          </div>
        </div>
      </div>

      <NoteModal isOpen={isOpen} toggleModal={toggleModal} noteData={note} />
    </div>
  );
};

export default NoteItem;
