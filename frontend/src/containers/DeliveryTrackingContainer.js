import React from 'react';
import { connect } from 'react-redux';
import DeliveryTracking from '../components/deliveryTracking/DeliveryTracking';

const DeliveryTrackingContainer = ({ deliveryTracking }) => {
  const sortDeliveryTrackingDetailsByTimeDescending = () => {
    const sortedDetails = deliveryTracking.details.sort((a, b) => b.time - a.time);
    return { ...deliveryTracking, details: sortedDetails };
  };
  return (
    <div>
      {deliveryTracking && (
        <DeliveryTracking
          deliveryTracking={sortDeliveryTrackingDetailsByTimeDescending()}
        />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  deliveryTracking: state.referer.deliveryTracking,
});

export default connect(mapStateToProps)(DeliveryTrackingContainer);
