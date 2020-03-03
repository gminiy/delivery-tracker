import React from 'react';
import DeliveryTrackerTemplate from './components/DeliveryTrackerTemplate';
import DeliveryTrackerRefererTemplate from './components/DeliveryTrackerRefererTemplate';

const App = () => {
  return (
  <DeliveryTrackerTemplate>
    <DeliveryTrackerRefererTemplate />
  </DeliveryTrackerTemplate>
  );
};

export default App;
