import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Header from '../common/Header';

const StyledContainer = styled.div`
  margin-left: 3%;
  margin-top: 1%;

  .deliveryTrackingBaseTitle {
    font-weight: bold;
    font-size: 1.2rem;
    display: inline-block;
    width: 30%;
    color: ${palette.gray[7]};
  }
  .deliveryTrackingBaseValue {
    font-weight: bold;
    display: inline-block;
    width: 70%;
    color: ${palette.gray[9]};
  }
`;

const DeliveryTrackingBase = ({ trackingBase }) => {
  const {
    invoiceNumber,
    senderName,
    receiverName,
    receiverAddress,
    itemName,
    complete,
    recipient,
  } = trackingBase;

  return (
    <div style={{ marginTop: '2.5%' }}>
      <Header title="택배 정보" />
      <StyledContainer>
        <div className="deliveryTrackingBaseTitle">운송장번호</div>
        <div className="deliveryTrackingBaseValue">{invoiceNumber}</div>
      </StyledContainer>
      <StyledContainer>
        <div className="deliveryTrackingBaseTitle">받는 사람</div>
        <div className="deliveryTrackingBaseValue">{receiverName}</div>
      </StyledContainer>
      <StyledContainer>
        <div className="deliveryTrackingBaseTitle">보낸 사람</div>
        <div className="deliveryTrackingBaseValue">{senderName}</div>
      </StyledContainer>
      <StyledContainer>
        <div className="deliveryTrackingBaseTitle">수령 주소</div>
        <div className="deliveryTrackingBaseValue">{receiverAddress}</div>
      </StyledContainer>
      <StyledContainer>
        <div className="deliveryTrackingBaseTitle">물건 이름</div>
        <div className="deliveryTrackingBaseValue">{itemName}</div>
      </StyledContainer>
      <StyledContainer>
        <div className="deliveryTrackingBaseTitle">완료 여부</div>
        <div className="deliveryTrackingBaseValue">{complete ? '배송 완료' : '배송 중'}</div>
      </StyledContainer>
      {complete && (
        <StyledContainer>
          <div className="deliveryTrackingBaseTitle">수령 장소</div>
          <div className="deliveryTrackingBaseValue">{recipient}</div>
        </StyledContainer>
      )}
    </div>
  );
};

export default DeliveryTrackingBase;
