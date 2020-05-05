const router = require("express").Router();

const {
  findNotes,
  findByNote,
  saveNote,
  updateNote,
  deleteNote,
} = require("../controllers/notes");

router.get("/api/notes", findNotes);

router.get("/api/notes/:id", findByNote);

router.post("/api/notes", saveNote);

router.put("/api/notes/:id", updateNote);

router.delete("/api/notes/:id", deleteNote);

module.exports = router;
