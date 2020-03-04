import React from 'react';
import { connect } from 'react-redux';
import DeliveryTrackerReferer from '../components/DeliveryTrackerReferer';
import {
  changeDeliveryCompany,
  changeInvoiceNumber,
  initializeInputs,
  getDeliveryTrack,
} from '../modules/referer';

const DeliveryTrackerRefererContainer = ({
  deliveryCompany,
  invoiceNumber,
  changeDeliveryCompany,
  changeInvoiceNumber,
  initializeInputs,
  getDeliveryTrack,
}) => {
  const refer = () => {
    getDeliveryTrack({ deliveryCompany, invoiceNumber });
  };

  return (
    <div>
      <DeliveryTrackerReferer
        deliveryCompany={deliveryCompany}
        invoiceNumber={invoiceNumber}
        changeDeliveryCompany={changeDeliveryCompany}
        changeInvoiceNumber={changeInvoiceNumber}
        initializeInputs={initializeInputs}
        refer={refer}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  deliveryCompany: state.referer.deliveryCompany,
  invoiceNumber: state.referer.invoiceNumber,
});

const mapDispatchToProps = dispatch => ({
  getDeliveryTrack: ({
    deliveryCompany,
    invoiceNumber,
  }) => {
    dispatch(getDeliveryTrack({ deliveryCompany, invoiceNumber }));
  },
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
