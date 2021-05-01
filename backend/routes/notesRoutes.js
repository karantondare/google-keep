import express from "express";
const router = express.Router();
import { check, validationResult } from "express-validator";
import User from "../models/Users.js";
import Note from "../models/Note.js";
import auth from "../middleware/auth.js";

// @route   GET api/notes
// @desc    get all notes for loggedin user
// @access  private
router.get("/", auth, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id }).sort({ date: -1 });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// @route   POST api/notes
// @desc    add new note
// @access  private
router.post(
  "/",
  [
    auth,
    [
      check("description", "Description is required").not().isEmpty(),
      check("category", "Category is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, description, category, backgroundColor, image } = req.body;
    try {
      const newNote = new Note({
        title,
        description,
        category,
        backgroundColor,
        image,
        user: req.user.id,
      });

      const note = await newNote.save();
      res.send(note);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server error");
    }
  }
);

// @route   PUT api/notes/:id
// @desc    update a note
// @access  private
router.put("/:id", auth, async (req, res) => {
  const { title, description, category, image } = req.body;

  const noteFields = {};

  if (title) noteFields.title = title;
  if (description) noteFields.description = description;
  if (category) noteFields.category = category;
  if (category) noteFields.category = image;

  try {
    let note = await Note.findById(req.params.id);

    if (!note) return res.status(404).json({ message: "Note not found" });
    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: noteFields },
      { new: true }
    );

    res.json(note);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
});

// @route   DELETE api/notes/:id
// @desc    delete a note
// @access  private
router.delete("/:id", auth, async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);

    if (!note) return res.status(404).json({ message: "Note not found" });

    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await Note.findByIdAndRemove(req.params.id);
    res.json({ message: "Note removed" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
});

export default router;
