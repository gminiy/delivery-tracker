import React from 'react';
import DeliveryTrackerTemplate from './components/DeliveryTrackerTemplate';
import RefererContainer from './containers/RefererContainer';
import DeliveryTrackContainer from './containers/DeliveryTrackContainer';

const App = () => {
  return (
    <DeliveryTrackerTemplate>
      <RefererContainer />
      <DeliveryTrackContainer />
    </DeliveryTrackerTemplate>
  );
};

export default App;
