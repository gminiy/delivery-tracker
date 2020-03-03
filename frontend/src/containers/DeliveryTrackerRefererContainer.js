import React from 'react';
import { connect } from 'react-redux';
import DeliveryTrackerReferer from '../components/DeliveryTrackerReferer';
import {
  changeDeliveryCompany,
  changeInvoiceNumber,
  initializeInputs,
} from '../modules/referer';

const DeliveryTrackerRefererContainer = ({
  deliveryCompany,
  invoiceNumber,
  changeDeliveryCompany,
  changeInvoiceNumber,
  initializeInputs,
}) => {
  const refer = () => {
    console.log(deliveryCompany);
    console.log(invoiceNumber);
  };

  return (
    <DeliveryTrackerReferer
      deliveryCompany={deliveryCompany}
      invoiceNumber={invoiceNumber}
      changeDeliveryCompany={changeDeliveryCompany}
      changeInvoiceNumber={changeInvoiceNumber}
      initializeInputs={initializeInputs}
      refer={refer}
    />
  );
};

const mapStateToProps = state => ({
  deliveryCompany: state.referer.deliveryCompany,
  invoiceNumber: state.referer.invoiceNumber,
});

const mapDispatchToProps = dispatch => ({
  changeDeliveryCompany: deliveryCompany => {
    dispatch(changeDeliveryCompany(deliveryCompany));
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
