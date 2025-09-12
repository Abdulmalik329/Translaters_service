const express = require("express");
const router = express.Router();

router.use("/admin", require("./admin.routes"));
router.use("/client", require("./client.routes"));
router.use("/languages", require("./languages.routes"));
router.use("/payments", require("./payments.routes"));
router.use("/text-contract", require("./text_contract.routes"));
router.use("/translater", require("./translater.routes"));
router.use("/translater-contract", require("./translate_contract.routes"));
router.use("/filter", require("./filter.routes"));

module.exports = router;
