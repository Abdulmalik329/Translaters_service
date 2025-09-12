const TextTranslation = require("../models/text_contract");

const getAllTextTranslations = async (req, res) => {
  try {
    const translations = await TextTranslation.findAll();
    res.json(translations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTextTranslation = async (req, res) => {
  try {
    const translation = await TextTranslation.create(req.body);
    res.status(201).json(translation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTextTranslationById = async (req, res) => {
  try {
    const translation = await TextTranslation.findByPk(req.params.id);
    if (!translation) return res.status(404).json({ error: "Text translation not found" });
    res.json(translation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTextTranslation = async (req, res) => {
  try {
    const translation = await TextTranslation.findByPk(req.params.id);
    if (!translation) return res.status(404).json({ error: "Text translation not found" });
    await translation.update(req.body);
    res.json(translation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteTextTranslation = async (req, res) => {
  try {
    const translation = await TextTranslation.findByPk(req.params.id);
    if (!translation) return res.status(404).json({ error: "Text translation not found" });
    await translation.destroy();
    res.json({ message: "Text translation deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTextTranslations,
  createTextTranslation,
  getTextTranslationById,
  updateTextTranslation,
  deleteTextTranslation,
};
