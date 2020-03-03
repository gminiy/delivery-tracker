import React from 'react';

const DeliveryTrackerTemplate = ({ children }) => {
  return (
    <div className="DeliveryTrackerTemplate">
      <div className="app-title">배송 조회</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default DeliveryTrackerTemplate;
