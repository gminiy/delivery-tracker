import React from 'react';
import DeliveryTrackBase from './DeliveryTrackBase';

const DeliveryTrack = ({ deliveryTrack }) => {
  return (
    <div>
      <DeliveryTrackBase  trackBase={deliveryTrack.base} />
    </div>
  );
};

export default DeliveryTrack;
