import client from './client';

export const referDeliveryTrack = ({ deliveryCompany, invoiceNumber }) =>
  client.get(
    `/delivery-track?deliveryCompanyCode=${deliveryCompany}&invoiceNumber=${invoiceNumber}`,
  );
