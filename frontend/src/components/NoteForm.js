import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";
import { VscSymbolColor } from "react-icons/vsc";
import { toast } from "react-hot-toast";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";

const NoteForm = () => {
  const noteContext = useContext(NoteContext);

  const [formOpen, setFormOpen] = useState(false);
  const [note, setNote] = useState({
    title: "",
    description: "",
    category: "",
  });
  const { title, description, category } = note;

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.title === "" || note.description === "") {
      toast.error("Title and description cannot be empty.");
    } else {
      noteContext.addNote(note);
      setNote({ title: "", description: "", category: "" });
      setFormOpen(false);
    }
  };

  return (
    <div className="border-2 rounded-lg w-96 p-2 mx-4">
      <form onSubmit={handleSubmit} autoComplete="off">
        {!formOpen && (
          <input
            type="text"
            className="w-full p-2"
            placeholder="Take a note..."
            onClick={() => setFormOpen(true)}
          />
        )}
        {formOpen && (
          <>
            <input
              type="text"
              className="w-full p-1 mb-1"
              name="title"
              value={title}
              placeholder="Title"
              onChange={handleChange}
            />
            <input
              type="text"
              className="w-full p-1 mb-1"
              name="description"
              value={description}
              placeholder="Take a note..."
              onChange={handleChange}
            />
            <textarea
              className="w-full p-1 mb-1"
              value={note.content}
              name="content"
              placeholder="Take a note..."
              onChange={handleChange}
              rows={3}
            ></textarea>
            <input
              type="text"
              className="w-full p-1 mb-1"
              name="category"
              value={category}
              placeholder="Category"
              onChange={handleChange}
            />

            <button className="p-1" onClick={(e) => e.preventDefault()}>
              <VscSymbolColor className="text-gray-400" size={30} />
            </button>

            <div className="flex flex-row-reverse">
              <button onClick={() => setFormOpen(false)}>
                <IoRemoveSharp className="text-gray-400" size={40} />
              </button>
              <button type="submit">
                <IoAddSharp className="text-gray-500" size={40} />
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default NoteForm;
