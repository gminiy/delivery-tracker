var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/delivery-track', function(req, res, next) {
  const { deliveryCompanyCode, invoiceNumber } = req.query;
  res.json({ deliveryCompanyCode, invoiceNumber });
});

module.exports = router;
