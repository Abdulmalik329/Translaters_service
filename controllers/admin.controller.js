const Admin = require("../models/admin");

const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.findAll();
    res.json(admins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createAdmin = async (req, res) => {
  try {
    const admin = await Admin.create(req.body);
    res.status(201).json(admin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.id);
    if (!admin) return res.status(404).json({ error: "Admin not found" });
    res.json(admin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.id);
    if (!admin) return res.status(404).json({ error: "Admin not found" });
    await admin.update(req.body);
    res.json(admin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.id);
    if (!admin) return res.status(404).json({ error: "Admin not found" });
    await admin.destroy();
    res.json({ message: "Admin deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllAdmins,
  createAdmin,
  getAdminById,
  updateAdmin,
  deleteAdmin,
};
