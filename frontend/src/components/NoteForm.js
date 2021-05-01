import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";
import { toast } from "react-hot-toast";
import NoteOptions from "./notes/NoteOptions";

const NoteForm = () => {
  const noteContext = useContext(NoteContext);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [note, setNote] = useState({
    title: "",
    description: "",
    category: "",
    backgroundColor,
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
      note.backgroundColor = backgroundColor;
      noteContext.addNote(note);

      setNote({
        title: "",
        description: "",
        category: "",
        backgroundColor: "",
      });
      setFormOpen(false);
      setBackgroundColor("");
    }
  };

  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className="border-2 rounded-lg w-96 p-2 mx-4 duration-500 ease-in"
    >
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
          <div className="ease-in">
            <input
              style={{ backgroundColor: backgroundColor }}
              type="text"
              className="w-full p-1 mb-1 rounded duration-500 ease-in"
              name="title"
              value={title}
              placeholder="Title"
              onChange={handleChange}
            />
            <input
              style={{ backgroundColor: backgroundColor }}
              type="text"
              className="w-full p-1 mb-1 rounded duration-500 ease-in"
              name="description"
              value={description}
              placeholder="Take a note..."
              onChange={handleChange}
              disabled={description.lenght > 256}
            />
            <input
              style={{ backgroundColor: backgroundColor }}
              type="text"
              className="w-full p-1 mb-1 rounded duration-500 ease-in"
              name="category"
              value={category}
              placeholder="Category"
              onChange={handleChange}
            />

            <div className="">
              <NoteOptions
                formOpen={formOpen}
                setFormOpen={setFormOpen}
                backgroundColor={backgroundColor}
                setBackgroundColor={setBackgroundColor}
              />
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default NoteForm;
