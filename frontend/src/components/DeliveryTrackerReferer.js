import React from 'react';
import styled from 'styled-components';
import DeliveryTrackerHeader from './DeliveryTrackerHeader';
import DeliveryTrackerInputForm from './DeliveryTrackerInputForm';
import DeliveryTrackerButton from './DeliveryTrackerButton';

const DeliveryTrackerButtonWithMargin = styled(DeliveryTrackerButton)`
  margin-left: 3%;
  margin-top: 2.5%;
`
const DeliveryTrackerReferer = ({ deliverCompany, invoiceNumber, changeDeliverCompany, changeInvoiceNumber, initializeInputs }) => {
  return (
    <div>
      <DeliveryTrackerHeader title="조회 정보" />
      <DeliveryTrackerInputForm name="deliveryCompany" label="택배 회사" value={deliverCompany} onChange={changeDeliverCompany} />
      <DeliveryTrackerInputForm name="invoiceNumber" label="송장 번호" value={invoiceNumber} onChange={changeInvoiceNumber} />
      <DeliveryTrackerButtonWithMargin>조회하기</DeliveryTrackerButtonWithMargin>
      <DeliveryTrackerButtonWithMargin onClick={initializeInputs}>초기화</DeliveryTrackerButtonWithMargin>
    </div>
  );
};

export default DeliveryTrackerReferer;
