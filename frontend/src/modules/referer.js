import { createAction, handleActions } from 'redux-actions';
import { referDeliveryTrack } from '../lib/api/referer';
import { dummyDeliveryTrack } from '../lib/dummyDeliveryTrack';

const GET_DELIVERY_TRACK = 'referer/GET_DELIVERY_TRACK';
const GET_DELIVERY_TRACK_SUCCESS = 'referer/GET_DELIVERY_TRACK_SUCCESS';
const GET_DELIVERY_TRACK_FAILURE = 'referer/GET_DELIVERY_TRACK_FAILURE';

const CHANGE_DELIVERY_COMPANY = 'referer/CHANGE_DELIVERY_COMPANY';
const CHANGE_INVOICE_NUMBER = 'referer/CHANGE_INVOICE_NUMBER';
const INITIALIZE_INPUTS = 'referer/INITIALIZE_INPUTS';

export const getDeliveryTrack = ({
  deliveryCompanyCode,
  invoiceNumber,
}) => async dispatch => {
  dispatch({ type: GET_DELIVERY_TRACK });
  try {
    const response = await referDeliveryTrack({
      deliveryCompanyCode,
      invoiceNumber,
    });
    dispatch({
      type: GET_DELIVERY_TRACK_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_DELIVERY_TRACK_FAILURE,
      payload: e,
      error: true,
    });
  }
};

export const changeDeliveryCompany = createAction(
  CHANGE_DELIVERY_COMPANY,
  deliveryCompany => deliveryCompany,
);

export const changeInvoiceNumber = createAction(
  CHANGE_INVOICE_NUMBER,
  invoiceNumber => invoiceNumber,
);

export const initializeInputs = createAction(INITIALIZE_INPUTS);

// add dummy data for test
const initialState = {
  deliveryCompany: '',
  invoiceNumber: '',
  deliveryTrack: dummyDeliveryTrack,
  loading: false,
  error: null,
};

const referer = handleActions(
  {
    [GET_DELIVERY_TRACK]: state => ({
      ...state,
      loading: true,
    }),
    [GET_DELIVERY_TRACK_SUCCESS]: (state, { payload: deliveryTrack }) => ({
      ...state,
      deliveryTrack,
      loading: false,
    }),
    [GET_DELIVERY_TRACK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
      loading: false,
    }),
    [CHANGE_DELIVERY_COMPANY]: (state, { payload: deliveryCompany }) => ({
      ...state,
      deliveryCompany,
    }),
    [CHANGE_INVOICE_NUMBER]: (state, { payload: invoiceNumber }) => ({
      ...state,
      invoiceNumber,
    }),
    [INITIALIZE_INPUTS]: () => initialState,
  },
  initialState,
);

export default referer;
