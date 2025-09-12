const express = require("express");
const router = express.Router();
const {
  getAllPayments,
  createPayment,
  getPaymentById,
  updatePayment,
  deletePayment,
} = require("../controllers/payments.controller");

router.get("/", getAllPayments);
router.post("/", createPayment);
router.get("/:id", getPaymentById);
router.put("/:id", updatePayment);
router.delete("/:id", deletePayment);

module.exports = router;
