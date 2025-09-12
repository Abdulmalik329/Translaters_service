const express = require("express");
const router = express.Router();
const {
  getAllTextTranslations,
  createTextTranslation,
  getTextTranslationById,
  updateTextTranslation,
  deleteTextTranslation,
} = require("../controllers/text_contract.controller");

router.get("/", getAllTextTranslations);
router.post("/", createTextTranslation);
router.get("/:id", getTextTranslationById);
router.put("/:id", updateTextTranslation);
router.delete("/:id", deleteTextTranslation);

module.exports = router;
