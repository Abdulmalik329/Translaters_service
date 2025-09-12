const express = require("express");
const router = express.Router();
const {
  getAllLanguages,
  createLanguage,
  getLanguageById,
  updateLanguage,
  deleteLanguage,
} = require("../controllers/languages.controller");

router.get("/", getAllLanguages);
router.post("/", createLanguage);
router.get("/:id", getLanguageById);
router.put("/:id", updateLanguage);
router.delete("/:id", deleteLanguage);

module.exports = router;
