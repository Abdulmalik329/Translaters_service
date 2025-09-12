const express = require("express");
const router = express.Router();
const contractController = require("../controllers/translate_contract.controller");
const validate = require("../middlewares/validate");
const { translaterContractSchema } = require("../middlewares/validations");

router.post("/", validate(translaterContractSchema), contractController.createTranslationContract);
router.get("/", contractController.getAllTranslationContracts);
router.get("/:id", contractController.getTranslationContractById);
router.put("/:id", validate(translaterContractSchema), contractController.updateTranslationContract);
router.delete("/:id", contractController.deleteTranslationContract);

module.exports = router;
