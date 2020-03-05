import { createAction, handleActions } from 'redux-actions';
import { referDeliveryTrack } from '../lib/api/referer';

const GET_DELIVERY_TRACK = 'referer/GET_DELIVERY_TRACK';
const GET_DELIVERY_TRACK_SUCCESS = 'referer/GET_DELIVERY_TRACK_SUCCESS';
const GET_DELIVERY_TRACK_FAILURE = 'referer/GET_DELIVERY_TRACK_FAILURE';

const CHANGE_DELIVERY_COMPANY = 'referer/CHANGE_DELIVERY_COMPANY';
const CHANGE_INVOICE_NUMBER = 'referer/CHANGE_INVOICE_NUMBER';

const INITIALIZE_DELIVERY_TRACK = 'referer/INITIALIZE_DELIVERY_TRACK';

export const getDeliveryTrack = ({
  deliveryCompany,
  invoiceNumber,
}) => async dispatch => {
  dispatch({ type: GET_DELIVERY_TRACK });
  try {
    const response = await referDeliveryTrack({
      deliveryCompany,
      invoiceNumber,
    });

    dispatch({
      type: GET_DELIVERY_TRACK_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_DELIVERY_TRACK_FAILURE,
      payload: error,
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

export const initializeDeliveryTrack = createAction(
  INITIALIZE_DELIVERY_TRACK,
  () => {},
);

const initialState = {
  deliveryCompany: '',
  invoiceNumber: '',
  deliveryTrack: null,
  loading: false,
  referError: null,
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
    [GET_DELIVERY_TRACK_FAILURE]: (state, { payload: referError }) => ({
      ...state,
      referError,
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
  },
  initialState,
);

export default referer;
