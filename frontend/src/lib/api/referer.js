import client from './client';

export const referDeliveryTracking = ({ deliveryCompany, invoiceNumber }) =>
  client.get(
    `/delivery-tracking?deliveryCompanyCode=${deliveryCompany}&invoiceNumber=${invoiceNumber}`,
  );
