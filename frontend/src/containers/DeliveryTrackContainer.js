import React from 'react';
import { connect } from 'react-redux';
import DeliveryTrack from '../components/DeliveryTrack';

const DeliveryTrackContainer = ({ deliveryTrack }) => {
  return (
    <div>
      <DeliveryTrack deliveryTrack={deliveryTrack} />
    </div>
  );
};

const mapStateToProps = state => ({
  deliveryTrack: state.referer.deliveryTrack,
});

export default connect(mapStateToProps)(DeliveryTrackContainer);
