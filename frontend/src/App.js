import React from 'react';
import DeliveryTrackerTemplate from './components/DeliveryTrackerTemplate';
import RefererContainer from './containers/RefererContainer';
import DeliveryTrackingContainer from './containers/DeliveryTrackingContainer';

const App = () => {
  return (
    <DeliveryTrackerTemplate>
      <RefererContainer />
      <DeliveryTrackingContainer />
    </DeliveryTrackerTemplate>
  );
};

export default App;
