const mongoose = require("mongoose");
const config = require("./config");

const connectDB = async () => {
  try {
    await mongoose.connect(config.databaseUri);
    console.log("Connected to MongoDB 🟩");
  } catch (error) {
    console.error("Error connecting to MongoDB: 🟥", error.message);
  }
};

module.exports = connectDB;
