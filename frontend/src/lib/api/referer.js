import client from './client';

export const referDeliveryTrack = ({ deliveryCompanyCode, invoiceNumber }) => {
  client.get(
    `https://localhost:3000/delivery-track?deliveryCompanyCode=${deliveryCompanyCode}&invoiceNumber=${invoiceNumber}`,
  );
};
