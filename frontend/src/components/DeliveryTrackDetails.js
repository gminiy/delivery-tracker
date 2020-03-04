import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';
import DeliveryTrackerHeader from './DeliveryTrackerHeader';

const StyledContainer = styled.div`
  margin-left: 3%;
  margin-top: 1%;
  .title {
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

const DeliveryTrackDetails = ({ trackDetails }) => {
  // Todo loading 중일때는 안보여주고 loading이 끝낫을때만 보여주게 만들기

  return (
    <div style={{ marginTop: '2.5%', marginBottom: '2.5%' }}>
      <DeliveryTrackerHeader title="상세 정보" />
      <StyledContainer>
        <div className="title time">처리 일자</div>
        <div className="title store">처리 점소</div>
        <div className="title phoneNumber">전화 번호</div>
        <div className="title status">배송 상태</div>
      </StyledContainer>
      {trackDetails.map(({ timeString, store, status, phoneNumbers }, index) => {
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

export default DeliveryTrackDetails;
