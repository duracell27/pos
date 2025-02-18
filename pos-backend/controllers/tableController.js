const createHttpError = require("http-errors");
const Table = require("../models/tableModel");
const { default: mongoose } = require("mongoose");

const addTable = async (req, res, next) => {
  try {
    const { tableNo, seats } = req.body;
    if (!tableNo) {
      const error = createHttpError(400, "Table No is required");
      return next(error);
    }

    const istablePresent = await Table.findOne({ tableNo });
    if (istablePresent) {
      const error = createHttpError(400, "Table already exists");
      return next(error);
    }

    const table = new Table({
      tableNo,
      seats,
    });

    await table.save();

    res.status(201).json({ success: true, message: "Table created successfully", data: table });
  } catch (error) {
    next(error);
  }
};

const getTables = async (req, res, next) => {
  try {
    const tables = await Table.find().populate({
      path: "currentOrder",
      select: 'customerDetails' 
    });

    res.status(200).json({ success: true, message: "Tables", data: tables });
  } catch (error) {
    next(error);
  }
};

const updateTable = async (req, res, next) => {
  try {
    const { status, orderId } = req.body;
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = createHttpError(400, "Invalid table id");
      return next(error);
    }

    if (!status || !orderId || !id) {
      const error = createHttpError(400, "Please provide all required fields");
      return next(error);
    }

    const table = await Table.findByIdAndUpdate(id, { status, currentOrder: orderId }, { new: true });

    if (!table) {
      const error = createHttpError(404, "Table not found");
      return next(error);
    }

    res.status(200).json({ success: true, message: "Table updated successfully", data: table });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addTable,
  getTables,
  updateTable,
};
