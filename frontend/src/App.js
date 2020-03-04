import React from 'react';
import DeliveryTracker from './components/DeliveryTracker';
import DeliveryTrackerRefererContainer from './containers/DeliveryTrackerRefererContainer';
import DeliveryTrackContainer from './containers/DeliveryTrackContainer';

const App = () => {
  return (
    <DeliveryTracker>
      <DeliveryTrackerRefererContainer />
      <DeliveryTrackContainer />
    </DeliveryTracker>
  );
};

export default App;
