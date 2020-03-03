import React from 'react';
import styled from 'styled-components';

const DeliveryTrackerTemplateBlock = styled.div`
  width: 100%;
  overflow: hidden;

  .DeliveryTrackerTitle {
    color: 'black';
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const DeliveryTracker = ({ children }) => {
  return (
    <DeliveryTrackerTemplateBlock>
      <div className="DeliveryTrackerTitle">월간 가슴 배송 조회</div>
      <div className="content">{children}</div>
    </DeliveryTrackerTemplateBlock>
  );
};

export default DeliveryTracker;
