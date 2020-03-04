const createError = require('http-errors');
const fetch = require('node-fetch');
const Bluebird = require('bluebird');
fetch.Promise = Bluebird;

exports.getDeliveryTrack = async (req, res, next) => {
  const appendQuerysToUrl = require('../lib/append-querys-to-url');
  const GET_TRACKING_INFO_URL =
    'http://info.sweettracker.co.kr/api/v1/trackingInfo';
  const { deliveryCompanyCode, invoiceNumber } = req.query;

  if (!deliveryCompanyCode || !invoiceNumber)
    return next(createError(400, 'miss company code or invoice number'));

  const querys = {
    t_key: process.env.SMART_DELIVERY_TRACK_API_KEY,
    t_code: deliveryCompanyCode,
    t_invoice: invoiceNumber,
  };

  try {
    const urlWithQuerys = appendQuerysToUrl(GET_TRACKING_INFO_URL, querys);
    const response = await fetch(urlWithQuerys);

    if (!response.ok) return next(createError(response.status));

    const data = await response.json();

    if (data.status === false) {
      if (data.code === '104') return res.status(409).json(data);

      return next(createError(500, JSON.stringify(data)));
    }

    return res.json(data);
  } catch (error) {
    return next(error);
  }
};
