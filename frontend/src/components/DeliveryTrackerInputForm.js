import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';

const DeliveryTrackerInputFormBlock = styled.div`
  margin-top: 1%;
  margin-left: 3%;

  .inputLabel {
    font-weight: bold;
    display: inline-block;
    width: 30%;
    color: ${palette.gray[7]};
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  margin-left: 1%;
  border: none;
  border-bottom: 1px solid ${palette.gray[8]};
  padding: 0.3rem;
  width: 20rem;
`;

const DeliveryTrackerInput = ({ label, name, onChange, value }) => {
  return (
    <DeliveryTrackerInputFormBlock>
      <div className="inputLabel">{label}</div>
      <StyledInput name={name} placeholder={label} value={value} onChange={onChange} />
    </DeliveryTrackerInputFormBlock>
  );
};

export default DeliveryTrackerInput;
