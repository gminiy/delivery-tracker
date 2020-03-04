import React, { useEffect, useState } from 'react';
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
  referError,
}) => {
  const [error, setError] = useState(null);
  useEffect(() => {
    if (referError) {
      if (referError.response.status === 409) {
        setError('잘못된 정보입니다. 송장 번호와 택배 회사를 확인해주세요.');
        return;
      }
      setError(
        '서버 에러가 발생했습니다. 문제가 계속되면 서버 관리자에게 문의해주세요.',
      );
    }

    return;
  }, [referError]);
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
  referError: state.referer.referError,
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
