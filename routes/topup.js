const express = require('express');
const router = express.Router();
const topupController = require('../controllers/topupController');

router.post('/', topupController.createTopup);

module.exports = router;
