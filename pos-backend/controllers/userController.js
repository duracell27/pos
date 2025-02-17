const createHttpError = require("http-errors");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

const register = async (req, res, next) => {
  try {
    const { name, email, phone, password, role } = req.body;

    if (!name || !email || !phone || !password || !role) {
      const error = createHttpError(400, "Please provide all required fields");
      return next(error);
    }

    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      const error = createHttpError(400, "User already exist");
      return next(error);
    }

    const user = { name, email, phone, password, role };

    const newUser = new User(user);
    await newUser.save();

    res.status(201).json({ success: true, message: "User created successfully", data: newUser });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = createHttpError(400, "Please provide all required fields");
      return next(error);
    }

    const userLogin = await User.findOne({ email });
    if (!userLogin) {
      const error = createHttpError(401, "Invalid credentials");
      return next(error);
    }

    const isPasswordMatch = await bcrypt.compare(password, userLogin.password);
    if (!isPasswordMatch) {
      const error = createHttpError(401, "Invalid credentials");
      return next(error);
    }

    const accessToken = jwt.sign({ userId: userLogin.id }, config.jwtSecret, { expiresIn: "1d" });

    res.cookie("accessToken", accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    res.status(200).json({ success: true, message: "Login successful", data: userLogin });
  } catch (error) {
    next(error);
  }
};

const getUserData = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);

    res.status(200).json({ success: true, message: "User data", data: user });
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    res.clearCookie('accessToken')
    res.status(200).json({ success: true, message: "Logout successful" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
  getUserData,
  logout
};
