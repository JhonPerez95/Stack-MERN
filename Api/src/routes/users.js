const router = require("express").Router();

const {
  findUser,
  saveUser,
  deleteUser,
  updateUser,
} = require("../controllers/users");

router.get("/api/users", findUser);

// router.get("/api/users/:id", );

router.post("/api/users", saveUser);

router.put("/api/users/:id", updateUser);

router.delete("/api/users/:id", deleteUser);

module.exports = router;
