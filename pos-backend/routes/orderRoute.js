const express = require("express");
const { addOrder, getOrder, getOrders, editOrder } = require("../controllers/orderController");
const { isVerifiedUser } = require("../middlewares/tokenVerification");

const router = express.Router();

router.route("/").post(isVerifiedUser, addOrder);
router.route("/:id").get(isVerifiedUser, getOrder);
router.route("/").get(isVerifiedUser, getOrders);
router.route("/:id").put(isVerifiedUser, editOrder);

module.exports = router;
