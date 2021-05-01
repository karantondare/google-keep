import React, { useState } from "react";
import Modal from "react-modal";

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

const NoteModal = ({
  isOpen,
  toggleModal,
  noteData,
  bgColor,
  categoryColor,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [note, setNote] = useState({
    title: noteData.title,
    description: noteData.description,
    category: noteData.category,
  });
  const { title, description, category } = note;

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Cart Modal"
        ariaHideApp={false}
        style={customStyles}
      >
        <div style={{ backgroundColor: bgColor }} className="w-96 p-16 rounded">
          <h3 className="text-lg font-medium mb-2">{title}</h3>
          <p className="mb-2">{description}</p>
          <span
            style={{ color: "", backgroundColor: categoryColor }}
            className="mt-16 py-1 px-4 rounded-xl font-mono"
          >
            {category}
          </span>
        </div>
      </Modal>
    </div>
  );
};

export default NoteModal;
