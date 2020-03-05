import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header';
import InputForm from './InputForm';
import Button from '../common/Button';

const ButtonWithMargin = styled(Button)`
  margin-left: 14rem;
  margin-top: 1rem;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.875rem;
  font-weight: bold;
  margin-left: 20rem;
`;

const Referer = ({
  invoiceNumber,
  changeDeliveryCompany,
  changeInvoiceNumber,
  refer,
  error,
}) => {
  const onChangeDeliveryCompany = selected => changeDeliveryCompany(selected.value);
  const onChangeInvoiceNumber = e => changeInvoiceNumber(e.target.value);
  const deliveryCompanyOptions = [
    { value: '04', label: 'CJ대한통운' },
    { value: '05', label: '한진택배' },
    { value: '23', label: '경동택배' },
  ];
  
  return (
    <div>
      <Header title="조회 정보" />
      <InputForm
        name="deliveryCompany"
        label="택배 회사"
        selection
        onChange={onChangeDeliveryCompany}
        options={deliveryCompanyOptions}
      />
      <InputForm
        label="송장 번호"
        value={invoiceNumber}
        onChange={onChangeInvoiceNumber}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <ButtonWithMargin onClick={refer}>
        조회하기
      </ButtonWithMargin>
    </div>
  );
};

export default Referer;
