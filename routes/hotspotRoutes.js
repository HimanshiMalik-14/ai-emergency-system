const express = require('express');
const router = express.Router();
const hotspotController = require('../controllers/hotspotController');

router.get('/hotspots', hotspotController);

module.exports = router;