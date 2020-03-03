import { createAction, handleActions } from 'redux-actions';

const CHANGE_DELIVERY_COMPANY = 'referer/CHANGE_DELIVERY_COMPANY';
const CHANGE_INVOICE_NUMBER = 'referer/CHANGE_INVOICE_NUMBER';
const INITIALIZE_INPUTS = 'referer/INITIALIZE_INPUTS';

export const changeDeliveryCompany = createAction(
  CHANGE_DELIVERY_COMPANY,
  deliveryCompany => deliveryCompany,
);
export const changeInvoiceNumber = createAction(
  CHANGE_INVOICE_NUMBER,
  invoiceNumber => invoiceNumber,
);
export const initializeInputs = createAction(INITIALIZE_INPUTS);

const initialState = {
  deliveryCompany: '',
  invoiceNumber: '',
};

const referer = handleActions(
  {
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
