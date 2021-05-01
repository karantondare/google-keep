import React, { useContext, useState } from "react";
import Modal from "react-modal";
import NoteContext from "../context/notes/noteContext";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const EditModal = ({ isOpen, toggleModal, noteData }) => {
  // const { id, title, description, category } = noteData;
  const noteContext = useContext(NoteContext);

  const [note, setNote] = useState({
    title: noteData.title,
    description: noteData.description,
    category: noteData.category,
  });
  const { title, description, category } = note;
  console.log(description);
  const handleChange = (e) => {
    setNote({ ...noteData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    noteContext.updateNote(note);
  };

  //
  const textArea = document.querySelector("textarea");
  const textRowCount = textArea ? textArea.value.split("\n").length : 0;
  const rows = textRowCount + 1;

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Cart Modal"
        ariaHideApp={false}
        style={customStyles}
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full p-2 mb-1"
            name="title"
            value={title}
            placeholder="Title"
            onChange={handleChange}
          />
          <textarea
            type="text"
            className="w-full p-2 mb-1"
            name="description"
            value={description}
            placeholder="Take a note..."
            onChange={handleChange}
            style={{
              minHeight: "15vh",
              height: "unset",
            }}
            rows={rows}
          />

          <input
            type="text"
            className="w-full p-2 mb-1"
            name="category"
            value={category}
            placeholder="Category"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="mt-2 py-1 px-6 rounded-md border-2 border-yellow-400 flex items-center font-bold text-yellow-500 hover:bg-yellow-400 hover:text-white transition duration-500 ease-in-out focus:outline-none"
          >
            Update
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default EditModal;
