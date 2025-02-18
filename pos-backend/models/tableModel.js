const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema(
  {
    tableNo: {
      type: Number,
      required: true,
      unique: true,
    },
    status: {
      type: String,
      default: 'Avaliable'
    },
    currentOrder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
    seats: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Table", tableSchema);
