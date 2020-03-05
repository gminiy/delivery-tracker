import { createAction, handleActions } from 'redux-actions';
import { referDeliveryTracking } from '../lib/api/referer';

const GET_DELIVERY_TRACKING = 'referer/GET_DELIVERY_TRACKING';
const GET_DELIVERY_TRACKING_SUCCESS = 'referer/GET_DELIVERY_TRACKING_SUCCESS';
const GET_DELIVERY_TRACKING_FAILURE = 'referer/GET_DELIVERY_TRACKING_FAILURE';

const CHANGE_DELIVERY_COMPANY = 'referer/CHANGE_DELIVERY_COMPANY';
const CHANGE_INVOICE_NUMBER = 'referer/CHANGE_INVOICE_NUMBER';

const INITIALIZE_DELIVERY_TRACKING = 'referer/INITIALIZE_DELIVERY_TRACKING';

export const getDeliveryTracking = ({
  deliveryCompany,
  invoiceNumber,
}) => async dispatch => {
  dispatch({ type: GET_DELIVERY_TRACKING });
  try {
    const response = await referDeliveryTracking({
      deliveryCompany,
      invoiceNumber,
    });
    // No contents
    if (response.status === 204) {
      dispatch({
        type: GET_DELIVERY_TRACKING_FAILURE,
        payload: { response },
        error: true,
      });

      return;
    }

    dispatch({
      type: GET_DELIVERY_TRACKING_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_DELIVERY_TRACKING_FAILURE,
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

export const initializeDeliveryTracking = createAction(
  INITIALIZE_DELIVERY_TRACKING,
  () => {},
);

const initialState = {
  deliveryCompany: '',
  invoiceNumber: '',
  deliveryTracking: null,
  loading: false,
  referError: null,
};

const referer = handleActions(
  {
    [GET_DELIVERY_TRACKING]: state => ({
      ...state,
      loading: true,
    }),
    [GET_DELIVERY_TRACKING_SUCCESS]: (
      state,
      { payload: deliveryTracking },
    ) => ({
      ...state,
      referError: null,
      deliveryTracking,
      loading: false,
    }),
    [GET_DELIVERY_TRACKING_FAILURE]: (state, { payload: referError }) => ({
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
