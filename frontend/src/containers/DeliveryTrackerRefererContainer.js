import React from 'react';
import { connect } from 'react-redux';
import DeliveryTrackerReferer from '../components/DeliveryTrackerReferer';
import {
  changeDeliverCompany,
  changeInvoiceNumber,
  initializeInputs,
} from '../modules/referer';

const DeliveryTrackerRefererContainer = ({
  deliverCompany,
  invoiceNumber,
  changeDeliverCompany,
  changeInvoiceNumber,
  initializeInputs,
}) => {
  return (
    <DeliveryTrackerReferer
      deliverCompany={deliverCompany}
      invoiceNumber={invoiceNumber}
      changeDeliverCompany={changeDeliverCompany}
      changeInvoiceNumber={changeInvoiceNumber}
      initializeInputs={initializeInputs}
    />
  );
};

const mapStateToProps = state => ({
  deliverCompany: state.referer.deliverCompany,
  invoiceNumber: state.referer.invoiceNumber,
});

const mapDispatchToProps = dispatch => ({
  changeDeliverCompany: deliverCompany => {
    dispatch(changeDeliverCompany(deliverCompany));
  },
  changeInvoiceNumber: invoiceNumber => {
    dispatch(changeInvoiceNumber(invoiceNumber));
  },
  initializeInputs: () => {
    dispatch(initializeInputs());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeliveryTrackerRefererContainer);
