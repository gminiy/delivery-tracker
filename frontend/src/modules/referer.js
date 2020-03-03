const CHANGE_DELIVER_COMPANY = 'referer/CHANGE_DELIVER_COMPANY';
const CHANGE_INVOICE_NUMBER = 'referer/CHANGE_INVOICE_NUMBER';
const INITIALIZE_INPUTS = 'referer/INITIALIZE_INPUTS';

export const changeDeliverCompany = deliverCompany => ({
  type: CHANGE_DELIVER_COMPANY,
  deliverCompany,
});

export const changeInvoiceNumber = invoiceNumber => ({
  type: CHANGE_INVOICE_NUMBER,
  invoiceNumber,
});

export const initializeInputs = () => ({
  type: INITIALIZE_INPUTS,
});

const initialState = {
  deliverCompany: '',
  invoiceNumber: '',
};

function referer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_DELIVER_COMPANY:
      return {
        ...state,
        deliverCompany: action.deliverCompany,
      };
    case CHANGE_INVOICE_NUMBER:
      return {
        ...state,
        invoiceNumber: action.invoiceNumber,
      };
    case INITIALIZE_INPUTS:
      return initialState;
    default:
      return state;
  }
}

export default referer;
