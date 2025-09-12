const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");
const validate = require("../middlewares/validate");
const { adminSchema } = require("../middlewares/validations");

router.post("/", validate(adminSchema), adminController.createAdmin);
router.get("/", adminController.getAllAdmins);
router.get("/:id", adminController.getAdminById);
router.put("/:id", validate(adminSchema), adminController.updateAdmin);
router.delete("/:id", adminController.deleteAdmin);


module.exports = router;
