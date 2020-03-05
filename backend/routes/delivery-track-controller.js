const createError = require('http-errors');
const Joi = require('joi');
const fetch = require('node-fetch');
const Bluebird = require('bluebird');
fetch.Promise = Bluebird;

const appendQuerysToUrl = require('../lib/append-querys-to-url');

const createTrackingBaseInfo = trackingInfo => ({
  senderName: trackingInfo.senderName,
  receiverName: trackingInfo.receiverName,
  itemName: trackingInfo.itemName,
  invoiceNumber: trackingInfo.invoiceNo,
  receiverAddress: trackingInfo.receiverAddr,
  complete: trackingInfo.complete,
  recipient: trackingInfo.recipient,
});

const createTrackingDetailInfo = ({ trackingDetails }) => {
  return trackingDetails.map(trackingDetail => {
    const info = {
      time: trackingDetail.time,
      timeString: trackingDetail.timeString,
      status: trackingDetail.kind,
      store: trackingDetail.where,
      phoneNumbers: [],
    };
    if (trackingDetail.telno !== '') info.phoneNumbers.push(trackingDetail.telno);
    if (trackingDetail.telno2 !== '') info.phoneNumbers.push(trackingDetail.telno2);

    return info;
  });
};
const validateQuerys = (querys) => {
  const schema = Joi.object().keys({
    invoiceNumber: Joi.string().alphanum().required(),
    deliveryCompanyCode: Joi.string().required()
  });

  return Joi.validate(querys, schema);
}

exports.getDeliveryTrack = async (req, res, next) => {
  const GET_TRACKING_INFO_URL =
    'http://info.sweettracker.co.kr/api/v1/trackingInfo';

  const validationResult = validateQuerys(req.query);
  
  if (validationResult.error) {
    return next(createError(400, 'check delivery company code, invoice number'));
  }

  const { deliveryCompanyCode, invoiceNumber } = req.query;

  const querys = {
    t_key: process.env.SMART_DELIVERY_TRACK_API_KEY,
    t_code: deliveryCompanyCode,
    t_invoice: invoiceNumber,
  };

  try {
    const urlWithQuerys = appendQuerysToUrl(GET_TRACKING_INFO_URL, querys);
    const response = await fetch(urlWithQuerys);

    if (!response.ok) return next(createError(response.status));

    const trackingInfo = await response.json();

    if (trackingInfo.status === false) {
      if (trackingInfo.code === '104')
        return res.status(400).json(trackingInfo);

      return next(createError(500, JSON.stringify(trackingInfo)));
    }

    const sendingData = {
      base: createTrackingBaseInfo(trackingInfo),
      details: createTrackingDetailInfo(trackingInfo),
    };

    return res.json(sendingData);
  } catch (error) {
    return next(error);
  }
};
