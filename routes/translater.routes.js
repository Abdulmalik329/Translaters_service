const express = require("express");
const router = express.Router();
const {
  getAllTranslaters,
  createTranslater,
  getTranslaterById,
  updateTranslater,
  deleteTranslater,
} = require("../controllers/translater.controller");

router.get("/", getAllTranslaters);
router.post("/", createTranslater);
router.get("/:id", getTranslaterById);
router.put("/:id", updateTranslater);
router.delete("/:id", deleteTranslater);

module.exports = router;
