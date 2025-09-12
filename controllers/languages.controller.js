const Language = require("../models/languages");

const getAllLanguages = async (req, res) => {
  try {
    const languages = await Language.findAll();
    res.json(languages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createLanguage = async (req, res) => {
  try {
    const language = await Language.create(req.body);
    res.status(201).json(language);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getLanguageById = async (req, res) => {
  try {
    const language = await Language.findByPk(req.params.id);
    if (!language) return res.status(404).json({ error: "Language not found" });
    res.json(language);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateLanguage = async (req, res) => {
  try {
    const language = await Language.findByPk(req.params.id);
    if (!language) return res.status(404).json({ error: "Language not found" });
    await language.update(req.body);
    res.json(language);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteLanguage = async (req, res) => {
  try {
    const language = await Language.findByPk(req.params.id);
    if (!language) return res.status(404).json({ error: "Language not found" });
    await language.destroy();
    res.json({ message: "Language deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllLanguages,
  createLanguage,
  getLanguageById,
  updateLanguage,
  deleteLanguage,
};
