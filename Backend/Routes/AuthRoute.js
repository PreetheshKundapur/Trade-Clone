const express = require("express");
const { Signup, Login } = require("../Controllers/AuthController");

const router = express.Router();

// -------------------- AUTH ROUTES --------------------
// Register a new user
router.post("/register", Signup);

// Login an existing user
router.post("/login", Login);

module.exports = router;
