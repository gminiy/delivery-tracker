const createError = require('http-errors');
const Joi = require('joi');
const fetch = require('node-fetch');
const Bluebird = require('bluebird');
fetch.Promise = Bluebird;

const appendQuerysToUrl = require('../lib/append-querys-to-url');

const createSendingTrackingBase = tracking => ({
  senderName: tracking.senderName,
  receiverName: tracking.receiverName,
  itemName: tracking.itemName,
  invoiceNumber: tracking.invoiceNo,
  receiverAddress: tracking.receiverAddr,
  complete: tracking.complete,
  recipient: tracking.recipient,
});

const createSendingTrackingDetails = ({ trackingDetails }) => {
  return trackingDetails.map(trackingDetail => {
    const info = {
      time: trackingDetail.time,
      timeString: trackingDetail.timeString,
      status: trackingDetail.kind,
      store: trackingDetail.where,
      phoneNumbers: [],
    };

    if (trackingDetail.telno !== '')
      info.phoneNumbers.push(trackingDetail.telno);

    if (trackingDetail.telno2 !== '')
      info.phoneNumbers.push(trackingDetail.telno2);

    return info;
  });
};

const validateQuerys = querys => {
  const schema = Joi.object().keys({
    invoiceNumber: Joi.string()
      .alphanum()
      .required(),
    deliveryCompanyCode: Joi.string().required(),
  });

  return Joi.validate(querys, schema);
};

exports.getDeliveryTracking = async (req, res, next) => {
  const GET_TRACKING_URL = 'http://info.sweettracker.co.kr/api/v1/trackingInfo';

  const validationResult = validateQuerys(req.query);

  if (validationResult.error)
    return next(
      createError(400, 'check delivery company code, invoice number'),
    );

  const { deliveryCompanyCode, invoiceNumber } = req.query;

  const querysToReferTracking = {
    t_key: process.env.SMART_DELIVERY_TRACK_API_KEY,
    t_code: deliveryCompanyCode,
    t_invoice: invoiceNumber,
  };

  try {
    const getTrackingUrlWithQuerys = appendQuerysToUrl(
      GET_TRACKING_URL,
      querysToReferTracking,
    );
    const response = await fetch(getTrackingUrlWithQuerys);

    if (!response.ok) return next(createError(response.status));

    const tracking = await response.json();

    if (tracking.status === false) {
      // 104: 유효하지 않은 운송장 번호 혹은 택배사 코드 입력
      if (tracking.code === '104') return res.status(400).json(tracking);

      return next(createError(500, JSON.stringify(tracking)));
    }
    // 204 no content. 택배사에서 정보가 제공되지 않음.
    if (tracking.details === undefined) return res.status(204).send();

    const sendingTracking = {
      base: createSendingTrackingBase(tracking),
      details: createSendingTrackingDetails(tracking),
    };

    return res.json(sendingTracking);
  } catch (error) {
    return next(error);
  }
};
