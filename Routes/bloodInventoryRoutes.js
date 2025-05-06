const express = require('express');
const router = express.Router();
const controller = require('../Controllers/bloodInventoryController');

router.get('/blood-inventory', controller.getAllBloodInventory);
router.get('/blood-inventory/search', controller.searchBloodInventory);

module.exports = router;
