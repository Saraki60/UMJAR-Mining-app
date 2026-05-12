const router = require("express").Router();

router.post("/register", async (req, res) => {
  res.json("Register Route");
});

router.post("/login", async (req, res) => {
  res.json("Login Route");
});

module.exports = router;
