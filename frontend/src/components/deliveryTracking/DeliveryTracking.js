import React from 'react';
import DeliveryTrackingBase from './DeliveryTrackingBase';
import DeliveryTrackingDetails from './DeliveryTrackingDetails';

const DeliveryTracking = ({ deliveryTracking }) => {
  return (
    <div>
      <DeliveryTrackingBase  trackingBase={deliveryTracking.base} />
      <DeliveryTrackingDetails  trackingDetails={deliveryTracking.details} />
    </div>
  );
};

export default DeliveryTracking;
