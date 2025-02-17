require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const config = require("./config/config");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const cookieParser = require("cookie-parser");

const app = express();
const port = config.port;
app.use(express.json());
app.use(cookieParser());

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//routes
app.use("/api/user", require("./routes/userRoute"));
app.use("/api/order", require("./routes/orderRoute"));
app.use("/api/table", require("./routes/tableRoute"));

//error handler
app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
