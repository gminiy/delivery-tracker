import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Header from '../common/Header';

const StyledContainer = styled.div`
  margin-left: 3%;
  margin-top: 1%;
  .deliveryTrackingDetailsTitle {
    color: ${palette.gray[6]};
  }
  .time {
    font-weight: bold;
    display: inline-block;
    width: 20%;
  }
  .store {
    font-weight: bold;
    display: inline-block;
    width: 20%;
  }
  .phoneNumber {
    font-weight: bold;
    display: inline-block;
    width: 30%;
  }
  .status {
    font-weight: bold;
    display: inline-block;
    width: 20%;
  }
`;

const DeliveryTrackingDetails = ({ trackingDetails }) => {
  return (
    <div style={{ marginTop: '2.5%', marginBottom: '2.5%' }}>
      <Header title="상세 정보" />
      <StyledContainer>
        <div className="deliveryTrackingDetailsTitle time">처리 일자</div>
        <div className="deliveryTrackingDetailsTitle store">처리 점소</div>
        <div className="deliveryTrackingDetailsTitle phoneNumber">전화 번호</div>
        <div className="deliveryTrackingDetailsTitle status">배송 상태</div>
      </StyledContainer>
      {trackingDetails.map(({ timeString, store, status, phoneNumbers }, index) => {
        return (
          <StyledContainer key={index}>
            <div className="time">{timeString}</div>
            <div className="store">{store}</div>
            <div className="phoneNumber">{phoneNumbers.join(', ')}</div>
            <div className="status">{status}</div>
          </StyledContainer>
        );
      })}
    </div>
  );
};

export default DeliveryTrackingDetails;
