const express = require("express");
const router = express.Router();
const languageController = require("../controllers/language.controller");
const validate = require("../middlewares/validate");
const { languageSchema } = require("../middlewares/validations");

router.post("/", validate(languageSchema), languageController.createLanguage);
router.get("/", languageController.getAllLanguages);
router.get("/:id", languageController.getLanguageById);
router.put("/:id", validate(languageSchema), languageController.updateLanguage);
router.delete("/:id", languageController.deleteLanguage);

module.exports = router;
