import {
  ADD_NOTE,
  CLEAR_NOTES,
  DELETE_NOTE,
  GET_NOTES,
  NOTE_ERROR,
  UPDATE_NOTE,
} from "../types";

const noteReducer = (state, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
        loading: false,
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
        loading: false,
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) =>
          note.id === action.payload.id ? action.payload : note
        ),
        loading: false,
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note._id !== action.payload),
        loading: false,
      };
    case CLEAR_NOTES:
      return {
        ...state,
        notes: [],
        current: null,
        error: null,
      };
    case NOTE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default noteReducer;
