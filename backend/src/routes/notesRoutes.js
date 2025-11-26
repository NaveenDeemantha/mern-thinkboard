import express from 'express';
import { createNote, getAllNotes, updateNote, deleteNote } from '../controllers/notesController.js';

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createNote);
router.put("/", updateNote)
router.delete("/", deleteNote);

export default router;