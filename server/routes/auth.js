const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {

  res.json({
    message: "Register Success"
  });

});

router.post("/login", async (req, res) => {

  res.json({
    message: "Login Success"
  });

});

module.exports = router;
