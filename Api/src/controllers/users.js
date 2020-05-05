const User = require("../models/user");

const userCtrl = {};

// GET
userCtrl.findUser = async (req, res) => {
  const usersDb = await User.find();
  res.json({
    ok: true,
    message: "All users",
    usersDb,
  });
};

// POST
userCtrl.saveUser = async (req, res) => {
  const body = req.body;

  const user = new User({
    username: body.username,
  });

  const userDb = await user.save();
  res.json({
    ok: true,
    message: "User Saved",
    userDb,
  });
};

// PUT
userCtrl.updateUser = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const updateUser = await User.findByIdAndUpdate(id, body, { new: true });

  res.json({
    ok: true,
    message: "User Updated",
    updateUser,
  });
};

// DELETE
userCtrl.deleteUser = async (req, res) => {
  const id = req.params.id;

  const userDelt = await User.findByIdAndDelete(id);
  res.json({
    ok: true,
    message: `User is Deleted`,
    userDelt,
  });
};

module.exports = userCtrl;
