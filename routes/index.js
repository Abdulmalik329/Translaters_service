const express = require("express");
const router = express.Router();

router.use("/admins", require("./admin.routes"));
router.use("/clients", require("./client.routes"));
router.use("/translaters", require("./translater.routes"));
router.use("/languages", require("./languages.routes"));
router.use("/service-prices", require("./payments.routes"));
router.use("/text-translations", require("./text_contract.routes"));
router.use("/translation-contracts", require("./translate_contract.routes"));


module.exports = router;
