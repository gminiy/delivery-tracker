import React from 'react';
import DeliveryTrackBase from './DeliveryTrackBase';
import DeliveryTrackDetails from './DeliveryTrackDetails';

const DeliveryTrack = ({ deliveryTrack }) => {
  return (
    <div>
      <DeliveryTrackBase  trackBase={deliveryTrack.base} />
      <DeliveryTrackDetails  trackDetails={deliveryTrack.details} />
    </div>
  );
};

export default DeliveryTrack;
