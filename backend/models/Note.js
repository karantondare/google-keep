import mongoose from "mongoose";

const NoteSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  title: { type: String },
  description: { type: String, required: true },
  category: { type: String, required: true },
  backgroundColor: { type: String },
  image: { type: String },
  date: { type: Date, default: Date.now },
});

const Note = mongoose.model("note", NoteSchema);
export default Note;
