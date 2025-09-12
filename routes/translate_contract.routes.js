const express = require("express");
const router = express.Router();
const {
  getAllTranslationContracts,
  createTranslationContract,
  getTranslationContractById,
  updateTranslationContract,
  deleteTranslationContract,
} = require("../controllers/translater_contract.controller");

router.get("/", getAllTranslationContracts);
router.post("/", createTranslationContract);
router.get("/:id", getTranslationContractById);
router.put("/:id", updateTranslationContract);
router.delete("/:id", deleteTranslationContract);

module.exports = router;
