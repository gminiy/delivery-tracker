import client from './client';

export const referDeliveryTrack = ({ deliveryCompany, invoiceNumber }) =>
  client.get(
    `https://localhost:4000/delivery-track?deliveryCompanyCode=${deliveryCompany}&invoiceNumber=${invoiceNumber}`,
  );
