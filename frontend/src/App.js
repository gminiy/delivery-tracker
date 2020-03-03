import React from 'react';
import DeliveryTracker from './components/DeliveryTracker';
import DeliveryTrackerReferer from './components/DeliveryTrackerReferer';
import DeliveryTrackerRefererContainer from './containers/DeliveryTrackerRefererContainer';

const App = () => {
  return (
  <DeliveryTracker>
    <DeliveryTrackerRefererContainer />
  </DeliveryTracker>
  );
};

export default App;
