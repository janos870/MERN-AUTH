import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
// import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(200).json({ success: true, message: "Registration successfully." });
  } catch (error) {
    res.status(500).json({ success: false, message: "Registration failed!" });
  }
};
