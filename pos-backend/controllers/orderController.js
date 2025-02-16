const createHttpError = require("http-errors");
const Order = require("../models/orderModel");

const addOrder = async (req, res, next) => {
  try {
    const { customerDetails, orderStatus, bills, items } = req.body;

    if (!customerDetails || !orderStatus || !bills || !items) {
      const error = createHttpError(400, "Please provide all required fields");
      return next(error);
    }

    const order = new Order({
      customerDetails,
      orderStatus,
      bills,
      items,
    });

    await order.save();

    res.status(201).json({ success: true, message: "Order created successfully", data: order });
  } catch (error) {
    next(error);
  }
};

const getOrder = async (req, res, next) => {
  try {
    const orderId = req.params.id;

    const order = await Order.findById(orderId);

    if (!order) {
      const error = createHttpError(404, "Order not found");
      return next(error);
    }

    res.status(200).json({ success: true, message: "Order details", data: order });
  } catch (error) {
    next(error);
  }
};

const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();

    res.status(200).json({ success: true, message: "Orders", data: orders });
  } catch (error) {
    next(error);
  }
};

const editOrder = async (req, res, next) => {
  try {
    const { orderStatus } = req.body;
    const orderId = req.params.id;

    if (!orderStatus) {
      const error = createHttpError(400, "Please provide all required fields");
      return next(error);
    }

    const order = await Order.findByIdAndUpdate(orderId, { orderStatus }, { new: true });

    if (!order) {
      const error = createHttpError(404, "Order not found");
      return next(error);
    }

    res.status(200).json({ success: true, message: "Order updated successfully", data: order });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addOrder,
  getOrder,
  getOrders,
  editOrder,
};
