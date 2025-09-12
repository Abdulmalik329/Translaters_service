const express = require("express");
const router = express.Router();
const {
  getAllAdmins,
  createAdmin,
  getAdminById,
  updateAdmin,
  deleteAdmin,
} = require("../controllers/admin.controller");

// Routes
router.get("/", getAllAdmins);
router.post("/", createAdmin);
router.get("/:id", getAdminById);
router.put("/:id", updateAdmin);
router.delete("/:id", deleteAdmin);

// ✅ EXPORT
module.exports = router;
