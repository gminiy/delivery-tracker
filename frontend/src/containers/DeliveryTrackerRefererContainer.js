import React, { useState } from 'react';
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
  const [error, setError] = useState(null);
  const refer = () => {
    if (!deliveryCompany || !invoiceNumber)
      return setError('택배 회사와 송장 번호를 모두 입력해주세요.');

    getDeliveryTrack({ deliveryCompany, invoiceNumber });
  };

  const initialize = () => {
    initializeInputs();
    setError(null);
  };

  return (
    <div>
      <DeliveryTrackerReferer
        deliveryCompany={deliveryCompany}
        invoiceNumber={invoiceNumber}
        changeDeliveryCompany={changeDeliveryCompany}
        changeInvoiceNumber={changeInvoiceNumber}
        initialize={initialize}
        refer={refer}
        error={error}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  deliveryCompany: state.referer.deliveryCompany,
  invoiceNumber: state.referer.invoiceNumber,
});

const mapDispatchToProps = dispatch => ({
  getDeliveryTrack: ({ deliveryCompany, invoiceNumber }) => {
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
