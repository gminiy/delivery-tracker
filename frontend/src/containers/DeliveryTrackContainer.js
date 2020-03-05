import React from 'react';
import { connect } from 'react-redux';
import DeliveryTrack from '../components/deliveryTrack/DeliveryTrack';

const DeliveryTrackContainer = ({ deliveryTrack }) => {
  const sortDeliveryTrackDetailsByTimeDescending = () => {
    const sortedDetails = deliveryTrack.details.sort((a, b) => b.time - a.time);
    return { ...deliveryTrack, details: sortedDetails };
  };

  return (
    <div>
      {deliveryTrack && (
        <DeliveryTrack
          deliveryTrack={sortDeliveryTrackDetailsByTimeDescending()}
        />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  deliveryTrack: state.referer.deliveryTrack,
});

export default connect(mapStateToProps)(DeliveryTrackContainer);
