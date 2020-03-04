import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';
import Select from 'react-select';

const DeliveryTrackerInputFormBlock = styled.div`
  margin-top: 1.5rem;
  margin-left: 3rem;

  .inputLabel {
    font-weight: bold;
    display: inline-block;
    width: 10rem;
    color: ${palette.gray[7]};
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  margin-left: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[8]};
  padding: 0.3rem;
  width: 20rem;
`;

const StyledSelection = styled(Select)`
  display: inline-block;
  font-size: 1rem;
  margin-left: 1rem;
  width: 20rem;
`;

const DeliveryTrackerInput = ({
  label,
  onChange,
  value,
  selection,
  options,
}) => {
  return (
    <DeliveryTrackerInputFormBlock>
      <div className="inputLabel">{label}</div>
      {selection ? (
        <div style={{ position: 'absolute', left: '13rem', top: '8rem'}}>
          <StyledSelection
            placeholder={label}
            onChange={onChange}
            options={options}
            value={value}
          />
        </div>
      ) : (
        <StyledInput placeholder={label} value={value} onChange={onChange} />
      )}
    </DeliveryTrackerInputFormBlock>
  );
};

export default DeliveryTrackerInput;
