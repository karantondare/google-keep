import React, { useContext, useEffect } from "react";
import NoteContext from "../../context/notes/noteContext";
import NoteItem from "./NoteItem";
import { MdLightbulbOutline } from "react-icons/md";

const Notes = () => {
  const noteContext = useContext(NoteContext);
  const { notes, getNotes } = noteContext;

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-wrap justify-center	mx-8 sm:mx-4">
      {notes.map((note) => (
        <NoteItem key={note._id} note={note} />
      ))}

      {notes.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-32">
          <MdLightbulbOutline size={100} color="#E6E6E6" />
          <p style={{ color: "#80868B" }} className="font-sans	text-2xl mt-4">
            Notes you add appear here
          </p>
        </div>
      )}
    </div>
  );
};

export default Notes;
