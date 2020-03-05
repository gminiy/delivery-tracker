const express = require('express');
const router = express.Router();
const { getDeliveryTracking } = require('./delivery-tracker-controller');

router.get('/delivery-tracking', getDeliveryTracking);

module.exports = router;
