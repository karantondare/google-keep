import React, { useReducer } from "react";
import axios from "axios";
import {
  GET_NOTES,
  ADD_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE,
  NOTE_ERROR,
  CLEAR_NOTES,
} from "../types";
import NoteContext from "./noteContext";
import noteReducer from "./noteReducer";

const NoteState = (props) => {
  const initialState = {
    notes: [],
    current: null,
    error: null,
  };

  const [state, dispatch] = useReducer(noteReducer, initialState);

  //get user notes
  const getNotes = async (note) => {
    try {
      const res = await axios.get(process.env.BACKEND + "/api/notes");
      dispatch({ type: GET_NOTES, payload: res.data });
    } catch (error) {
      dispatch({ type: NOTE_ERROR });
    }
  };

  //add note
  const addNote = async (note) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        process.env.BACKEND + "/api/notes",
        note,
        config
      );

      dispatch({ type: ADD_NOTE, payload: res.data });
    } catch (error) {
      dispatch({ type: NOTE_ERROR });
    }
  };

  //delete note
  const deleteNote = async (id) => {
    try {
      await axios.delete(process.env.BACKEND + `/api/notes/${id}`);
      dispatch({ type: DELETE_NOTE, payload: id });
    } catch (error) {
      dispatch({ type: NOTE_ERROR });
    }
  };

  //update note
  const updateNote = (note) => {
    dispatch({ type: UPDATE_NOTE, payload: note });
  };

  //clear notes
  const clearNotes = () => {
    dispatch({ type: CLEAR_NOTES });
  };

  return (
    <NoteContext.Provider
      value={{
        notes: state.notes,
        getNotes,
        addNote,
        deleteNote,
        updateNote,
        clearNotes,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
