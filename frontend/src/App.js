import React from 'react';
import DeliveryTracker from './components/DeliveryTracker';
import DeliveryTrackerReferer from './components/DeliveryTrackerReferer';

const App = () => {
  return (
  <DeliveryTracker>
    <DeliveryTrackerReferer />
  </DeliveryTracker>
  );
};

export default App;
