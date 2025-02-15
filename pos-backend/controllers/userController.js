const createHttpError = require("http-errors");
const User = require("../models/userModel");
const register = async (req, res, next) => {
  try {
    const { name, email, phone, password, role } = req.body;

    if (!name || !email || !phone || !password || !role) {
      const error = createHttpError(400, "Please provide all required fields");
      next(error);
    }

    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      const error = createHttpError(400, "User already exist");
      next(error);
    }

    const user = { name, email, phone, password, role };

    const newUser = new User(user);
    await newUser.save();

    res.status(201).json({ success: true, message: "User created successfully", data: newUser });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {};

module.exports = {
  register,
  login,
};
