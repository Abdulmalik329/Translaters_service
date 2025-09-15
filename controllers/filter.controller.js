const { Op, QueryTypes } = require("sequelize");
const sequelize = require("../config/db");
const {
  TextContract,
  Client,
  Translater,
  Payment,
} = require("../models");

async function getServicesByPeriod(req, res) {
  try {
    const { startDate, endDate } = req.query;

    const services = await TextContract.findAll({
      where: {
        start_date: { [Op.gte]: new Date(startDate) },
        end_date: { [Op.lte]: new Date(endDate) },
      },
    });

    res.json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getClientsByServicePeriod(req, res) {
  try {
    const { startDate, endDate } = req.query;

    const clients = await Client.findAll({
      include: [
        {
          model: TextContract,
          where: {
            start_date: { [Op.gte]: new Date(startDate) },
            end_date: { [Op.lte]: new Date(endDate) },
          },
        },
      ],
    });

    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


async function getClientsCancelledServices(req, res) {
  try {
    const { startDate, endDate } = req.query;

    const cancelledClients = await Client.findAll({
      include: [
        {
          model: TextContract,
          where: {
            status: "pending", 
            start_date: { [Op.gte]: new Date(startDate) },
            end_date: { [Op.lte]: new Date(endDate) },
          },
        },
      ],
    });

    res.json(cancelledClients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


async function getTopOwnersByService(req, res) {
  try {
    const { firstLanguage, secondLanguage } = req.query;

    const topOwners = await sequelize.query(
      `
      SELECT t.id, t.name, COUNT(tc.id) as count
      FROM text_contract tc
      JOIN translater t ON tc.translator_id = t.id
      WHERE tc.first_language = :firstLanguage AND tc.second_language = :secondLanguage
      GROUP BY t.id, t.name
      ORDER BY count DESC
      LIMIT 10;
      `,
      {
        replacements: { firstLanguage, secondLanguage },
        type: QueryTypes.SELECT,
      }
    );

    res.json(topOwners);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getPaymentsByClient(req, res) {
  try {
    const { clientId } = req.params;

    const payments = await Payment.findAll({
      include: [
        {
          model: TextContract,
          where: { client_id: clientId },
          include: [
            { model: Translater },
          ],
        },
      ],
    });

    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getServicesByPeriod,
  getClientsByServicePeriod,
  getClientsCancelledServices,
  getTopOwnersByService,
  getPaymentsByClient,
};
