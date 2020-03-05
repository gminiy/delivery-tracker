import client from './client';

export const referDeliveryTracking = ({ deliveryCompany, invoiceNumber }) =>
  client.get(
    `/delivery-track?deliveryCompanyCode=${deliveryCompany}&invoiceNumber=${invoiceNumber}`,
  );
