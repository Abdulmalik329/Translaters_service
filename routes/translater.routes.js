const express = require("express");
const router = express.Router();
const translaterController = require("../controllers/translater.controller");
const validate = require("../middlewares/validate");
const { translaterSchema } = require("../middlewares/validations");

router.post("/", validate(translaterSchema), translaterController.createTranslater);
router.get("/", translaterController.getAllTranslaters);
router.get("/:id", translaterController.getTranslaterById);
router.put("/:id", validate(translaterSchema), translaterController.updateTranslater);
router.delete("/:id", translaterController.deleteTranslater);

module.exports = router;
