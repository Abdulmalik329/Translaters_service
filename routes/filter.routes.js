const express = require("express");
const router = express.Router();
const filterController = require("../controllers/filter.controller");

router.get("/services", filterController.getServicesByPeriod);
router.get("/clients-by-service", filterController.getClientsByServicePeriod);
router.get("/cancelled-clients", filterController.getClientsCancelledServices);
router.get("/top-translaters", filterController.getTopOwnersByService);
router.get("/payments/:clientId", filterController.getPaymentsByClient);

module.exports = router;
