import { createAction, handleActions } from 'redux-actions';

const CHANGE_DELIVER_COMPANY = 'referer/CHANGE_DELIVER_COMPANY';
const CHANGE_INVOICE_NUMBER = 'referer/CHANGE_INVOICE_NUMBER';
const INITIALIZE_INPUTS = 'referer/INITIALIZE_INPUTS';

export const changeDeliverCompany = createAction(
  CHANGE_DELIVER_COMPANY,
  deliverCompany => deliverCompany,
);
export const changeInvoiceNumber = createAction(
  CHANGE_INVOICE_NUMBER,
  invoiceNumber => invoiceNumber,
);
export const initializeInputs = createAction(INITIALIZE_INPUTS);

const initialState = {
  deliverCompany: '',
  invoiceNumber: '',
};

const referer = handleActions(
  {
    [CHANGE_DELIVER_COMPANY]: (state, { payload: deliverCompany }) => ({
      ...state,
      deliverCompany,
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
