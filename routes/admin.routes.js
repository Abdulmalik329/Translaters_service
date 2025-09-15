const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");
const validate = require("../middlewares/validate");
const { adminSchema } = require("../middlewares/validations");
const authenticate = require("../middlewares/auth.middleware");
const adminGuard = require("../middlewares/adminGuard");

router.post("/", authenticate, adminGuard, validate(adminSchema), adminController.createAdmin);
router.get("/", authenticate, adminGuard, adminController.getAllAdmins);
router.get("/:id", authenticate, adminGuard, adminController.getAdminById);
router.put("/:id", authenticate, adminGuard, validate(adminSchema), adminController.updateAdmin);
router.delete("/:id", authenticate, adminGuard, adminController.deleteAdmin);

module.exports = router;
