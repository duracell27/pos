require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const config = require("./config/config");
const globalErrorHandler = require("./middlewares/globalErrorHandler");

const app = express();
const port = config.port

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//error handler
app.use(globalErrorHandler)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
