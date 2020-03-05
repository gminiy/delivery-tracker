import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Header from '../common/Header';

const StyledContainer = styled.div`
  margin-left: 3%;
  margin-top: 1%;

  .deliveryTrackBaseTitle {
    font-weight: bold;
    font-size: 1.2rem;
    display: inline-block;
    width: 30%;
    color: ${palette.gray[7]};
  }
  .deliveryTrackBaseValue {
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
      <Header title="택배 정보" />
      <StyledContainer>
        <div className="deliveryTrackBaseTitle">운송장번호</div>
        <div className="deliveryTrackBaseValue">{invoiceNumber}</div>
      </StyledContainer>
      <StyledContainer>
        <div className="deliveryTrackBaseTitle">받는 사람</div>
        <div className="deliveryTrackBaseValue">{receiverName}</div>
      </StyledContainer>
      <StyledContainer>
        <div className="deliveryTrackBaseTitle">보낸 사람</div>
        <div className="deliveryTrackBaseValue">{senderName}</div>
      </StyledContainer>
      <StyledContainer>
        <div className="deliveryTrackBaseTitle">수령 주소</div>
        <div className="deliveryTrackBaseValue">{receiverAddress}</div>
      </StyledContainer>
      <StyledContainer>
        <div className="deliveryTrackBaseTitle">물건 이름</div>
        <div className="deliveryTrackBaseValue">{itemName}</div>
      </StyledContainer>
      <StyledContainer>
        <div className="deliveryTrackBaseTitle">완료 여부</div>
        <div className="deliveryTrackBaseValue">{complete ? '배송 완료' : '배송 중'}</div>
      </StyledContainer>
      {complete && (
        <StyledContainer>
          <div className="deliveryTrackBaseTitle">수령 장소</div>
          <div className="deliveryTrackBaseValue">{recipient}</div>
        </StyledContainer>
      )}
    </div>
  );
};

export default DeliveryTrackBase;
