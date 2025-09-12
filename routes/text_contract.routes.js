const express = require("express");
const router = express.Router();
const textContractController = require("../controllers/text_contract.controller");
const validate = require("../middlewares/validate");
const { textContractSchema } = require("../middlewares/validations");

router.post("/", validate(textContractSchema), textContractController.createContract);
router.get("/", textContractController.getAllContracts);
router.get("/:id", textContractController.getContractById);
router.put("/:id", validate(textContractSchema), textContractController.updateContract);
router.delete("/:id", textContractController.deleteContract);

module.exports = router;
