import React from 'react';
import './DeliveryTrackerTemplate.scss';

const DeliveryTrackerTemplate = ({ children }) => {
  return (
    <div className="DeliveryTrackerTemplate">
      <div className="title">월간 가슴 배송 조회</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default DeliveryTrackerTemplate;
