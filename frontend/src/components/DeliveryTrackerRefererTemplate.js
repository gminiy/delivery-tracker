import React from 'react';
import DeliveryTrackerHeader from './DeliveryTrackerHeader';
import DeliveryTrackerInputForm from './DeliveryTrackerInputForm';

const DeliveryTrackerInputTemplate = () => {
  return (
    <div>
      <DeliveryTrackerHeader title="검색 정보" />
      <DeliveryTrackerInputForm name="deliveryCompany" label="택배 회사" />
      <DeliveryTrackerInputForm name="invoiceNumber" label="송장 번호" />
    </div>
  );
};

export default DeliveryTrackerInputTemplate;
