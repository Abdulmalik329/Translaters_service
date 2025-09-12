const Translater = require("../models/translater");

const getAllTranslaters = async (req, res) => {
  try {
    const translaters = await Translater.findAll();
    res.json(translaters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTranslater = async (req, res) => {
  try {
    const translater = await Translater.create(req.body);
    res.status(201).json(translater);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTranslaterById = async (req, res) => {
  try {
    const translater = await Translater.findByPk(req.params.id);
    if (!translater) return res.status(404).json({ error: "Translater not found" });
    res.json(translater);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTranslater = async (req, res) => {
  try {
    const translater = await Translater.findByPk(req.params.id);
    if (!translater) return res.status(404).json({ error: "Translater not found" });
    await translater.update(req.body);
    res.json(translater);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteTranslater = async (req, res) => {
  try {
    const translater = await Translater.findByPk(req.params.id);
    if (!translater) return res.status(404).json({ error: "Translater not found" });
    await translater.destroy();
    res.json({ message: "Translater deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTranslaters,
  createTranslater,
  getTranslaterById,
  updateTranslater,
  deleteTranslater,
};
