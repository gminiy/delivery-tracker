import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';
import DeliveryTrackerHeader from './DeliveryTrackerHeader';

const StyledContainer = styled.div`
  margin-left: 3%;
  margin-top: 1%;

  .title {
    font-weight: bold;
    font-size: 1.2rem;
    display: inline-block;
    width: 30%;
    color: ${palette.gray[7]};
  }
  .value {
    font-weight: bold;
    display: inline-block;
    width: 70%;
    color: ${palette.gray[9]};
  }
`;

const DeliveryTrackBase = ({ trackBase }) => {
  const {
    invoiceNumber,
    senderName,
    receiverName,
    receiverAddress,
    itemName,
    complete,
    recipient,
  } = trackBase;

  return (
    <div style={{ marginTop: '2.5%' }}>
      <DeliveryTrackerHeader title="택배 정보" />
      <StyledContainer>
        <div className="title">운송장번호</div>
        <div className="value">{invoiceNumber}</div>
      </StyledContainer>
      <StyledContainer>
        <div className="title">받는 사람</div>
        <div className="value">{receiverName}</div>
      </StyledContainer>
      <StyledContainer>
        <div className="title">보낸 사람</div>
        <div className="value">{senderName}</div>
      </StyledContainer>
      <StyledContainer>
        <div className="title">수령 주소</div>
        <div className="value">{receiverAddress}</div>
      </StyledContainer>
      <StyledContainer>
        <div className="title">물건 이름</div>
        <div className="value">{itemName}</div>
      </StyledContainer>
      <StyledContainer>
        <div className="title">완료 여부</div>
        <div className="value">{complete ? '배송 완료' : '배송 중'}</div>
      </StyledContainer>
      {complete && (
        <StyledContainer>
          <div className="title">수령 장소</div>
          <div className="value">{recipient}</div>
        </StyledContainer>
      )}
    </div>
  );
};

export default DeliveryTrackBase;
