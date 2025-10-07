import User from "../model/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const isSignedIn = async (req, res, next) => {
  try {
    // 1️⃣ Check header exists
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ msg: "No token provided!" });
    }

    // 2️⃣ Extract token
    const token = authHeader.split(' ')[1];

    // 3️⃣ Verify token and get payload
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // decoded is an object like: { id: 'user_id', iat: ..., exp: ... }
    // so you need decoded.id (not just decoded)
    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      return res.status(404).json({ msg: "User not found!" });
    }

   
    req.user = user;
    next();

  } catch (err) {
    console.error("JWT verification failed:", err.message);
    return res.status(401).json({ msg: "Unauthorized!" });
  }
};
