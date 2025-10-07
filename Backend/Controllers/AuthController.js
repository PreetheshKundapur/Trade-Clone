const User = require("../Models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

// -------------------- SIGNUP --------------------
module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user (password will be hashed by pre-save hook in the model)
    const user = await User.create({ email, username, password });

    // Generate JWT token
    const token = createSecretToken(user._id);

    // Send token as HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // set to true in production with HTTPS
      sameSite: "lax",
    });

    // Respond with user info and token
    res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user: {
        _id: user._id,
        email: user.email,
        username: user.username,
      },
      token,
    });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// -------------------- LOGIN --------------------
module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Verify password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate JWT token
    const token = createSecretToken(user._id);

    // Send token as HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // true in production
      sameSite: "lax",
    });

    // Respond with user info and token
    res.status(200).json({
      message: "User logged in successfully",
      success: true,
      user: {
        _id: user._id,
        email: user.email,
        username: user.username,
      },
      token,
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
