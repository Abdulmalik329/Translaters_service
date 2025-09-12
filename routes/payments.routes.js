const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/payment.controller");
const validate = require("../middlewares/validate");
const { paymentSchema } = require("../middlewares/validations");

router.post("/", validate(paymentSchema), paymentController.createPayment);
router.get("/", paymentController.getAllPayments);
router.get("/:id", paymentController.getPaymentById);
router.put("/:id", validate(paymentSchema), paymentController.updatePayment);
router.delete("/:id", paymentController.deletePayment);

module.exports = router;
