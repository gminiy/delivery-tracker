const express = require('express');
const router = express.Router();
const { getDeliveryTrack } = require('./delivery-track-controller');

router.get('/delivery-track', getDeliveryTrack);

module.exports = router;
