import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';

const DeliveryTrackerHeaderBlock = styled.div`
  width: 100%;
  background: ${palette.gray[3]};

  .DeliveryTrackerHeaderTitle {
    color: 'black';
    height: 3rem;
    font-size: 1.2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    margin-left: 2%;
  }
`;

const DeliveryTrackerHeader = ({ title }) => {
  return (
    <DeliveryTrackerHeaderBlock>
      <div className="DeliveryTrackerHeaderTitle">{title}</div>
    </DeliveryTrackerHeaderBlock>
  );
};

export default DeliveryTrackerHeader;
