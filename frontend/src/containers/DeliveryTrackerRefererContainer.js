import React from 'react';
import { connect } from 'react-redux';
import DeliveryTrackerReferer from '../components/DeliveryTrackerReferer';

const DeliveryTrackerRefererContainer = ({ deliverCompany, invoiceNumber, changeDeliverCompany, changeInvoiceNumber, initializeInputs }) => {
  return <DeliveryTrackerReferer
    deliverCompany={deliverCompany}
    invoiceNumber={invoiceNumber}
    changeDeliverCompany={changeDeliverCompany}
    changeInvoiceNumber={changeInvoiceNumber}
    initializeInputs={initializeInputs}
  />;
};

const mapStateToProps = state => ({
  deliverCompany: state.deliverCompany,
  invoiceNumber: state.invoiceNumber,
});

const mapDispatchToProps = dispatch => ({
  // Temp
  changeDeliverCompany: () => {
    console.log('change company');
  },
  changeInvoiceNumber: () => {
    console.log('change invoiceNumber');
  },
  initializeInputs: () => {
    console.log('initializeInputs');
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeliveryTrackerRefererContainer);
