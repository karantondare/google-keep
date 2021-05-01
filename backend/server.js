import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();
dotenv.config();
const corsOptions = {
  origin: ["https://notes-keeper-karan.netlify.app"],
};
app.use(cors(corsOptions));
app.use(express.json({ extended: false }));
const PORT = process.env.PORT || 3001;

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  },
  (err) => {
    if (err) return console.error(err);
    console.log(":::::Connected to MongoDB:::::");
  }
);

app.get("/", (req, res) =>
  res.json({ message: "Notes Keeper API is running..." })
);

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
