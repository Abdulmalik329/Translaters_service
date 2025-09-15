const express = require("express");
const router = express.Router();
const clientController = require("../controllers/client.controller");
const validate = require("../middlewares/validate");
const { clientSchema } = require("../middlewares/validations");
const authenticate = require("../middlewares/auth.middleware");
const selfGuard = require("../middlewares/selfGuard");

router.post("/", validate(clientSchema), clientController.createClient);
router.get("/", authenticate, clientController.getAllClients);
router.get("/:id", authenticate, selfGuard, clientController.getClientById);
router.put("/:id", authenticate, selfGuard, validate(clientSchema), clientController.updateClient);
router.delete("/:id", authenticate, selfGuard, clientController.deleteClient);

module.exports = router;
