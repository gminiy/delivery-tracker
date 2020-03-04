import React from 'react';
import styled from 'styled-components';
import DeliveryTrackerHeader from './DeliveryTrackerHeader';
import DeliveryTrackerInputForm from './DeliveryTrackerInputForm';
import DeliveryTrackerButton from './DeliveryTrackerButton';

const DeliveryTrackerButtonWithMargin = styled(DeliveryTrackerButton)`
  margin-left: 3%;
  margin-top: 1%;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.875rem;
  font-weight: bold;
  margin-left: 20rem;
`;

const DeliveryTrackerReferer = ({
  invoiceNumber,
  changeDeliveryCompany,
  changeInvoiceNumber,
  initialize,
  refer,
  error,
}) => {
  const onChangeDeliveryCompany = selected => changeDeliveryCompany(selected.value);
  const onChangeInvoiceNumber = e => changeInvoiceNumber(e.target.value);
  const deliveryCompanyOptions = [
    { value: '04', label: 'CJ대한통운' },
    { value: '05', label: '한진택배' },
    { value: '23', label: '경동택배' },
  ];
  
  return (
    <div>
      <DeliveryTrackerHeader title="조회 정보" />

      <DeliveryTrackerInputForm
        name="deliveryCompany"
        label="택배 회사"
        selection
        onChange={onChangeDeliveryCompany}
        options={deliveryCompanyOptions}
      />
      <DeliveryTrackerInputForm
        label="송장 번호"
        value={invoiceNumber}
        onChange={onChangeInvoiceNumber}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <DeliveryTrackerButtonWithMargin onClick={refer}>
        조회하기
      </DeliveryTrackerButtonWithMargin>
      <DeliveryTrackerButtonWithMargin onClick={initialize}>
        초기화
      </DeliveryTrackerButtonWithMargin>
    </div>
  );
};

export default DeliveryTrackerReferer;
