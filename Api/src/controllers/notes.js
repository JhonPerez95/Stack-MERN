const Note = require("../models/note");
const noteCtrl = {};

// GET
noteCtrl.findNotes = async (req, res) => {
  const noteDb = await Note.find().populate({
    path: "user",
    select: "username",
  });

  res.json({
    ok: true,
    message: "Find all users",
    noteDb,
  });
};

// GET:ID
noteCtrl.findByNote = async (req, res) => {
  const id = req.params.id;

  const noteDb = await Note.findById(id).populate({
    path: "user",
    select: "username",
  });
  res.json({
    ok: true,
    noteDb,
  });
};

// POST
noteCtrl.saveNote = async (req, res) => {
  const body = req.body;
  const note = new Note({
    title: body.title,
    description: body.description,
    user: body.user,
    date: body.date,
  });

  try {
    const noteDb = await note.save();

    res.json({
      ok: true,
      message: "Saved Note",
      noteDb,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      message: "Could not Save !!!",
      error,
    });
  }
};

// PUT
noteCtrl.updateNote = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  try {
    const noteUpdt = await Note.findByIdAndUpdate(id, body, { new: true });
    res.json({
      ok: true,
      message: "Note update!",
      noteUpdt,
    });
  } catch (error) {
    res.json({
      ok: false,
      message: "Could not Updated !!!",
      error,
    });
  }
};

// DELETE
noteCtrl.deleteNote = async (req, res) => {
  const id = req.params.id;

  try {
    const noteDelt = await Note.findByIdAndDelete(id);
    res.json({
      ok: true,
      message: `Note deleted`,
      noteDelt,
    });
  } catch (error) {
    es.json({
      ok: false,
      message: "Could not Deleted !!!",
      error,
    });
  }
};

module.exports = noteCtrl;
