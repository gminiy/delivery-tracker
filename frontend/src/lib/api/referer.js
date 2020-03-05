import client from './client';

export const referDeliveryTracking = ({ deliveryCompany, invoiceNumber }) =>
  client.get(
    `/api/delivery-tracking?deliveryCompanyCode=${deliveryCompany}&invoiceNumber=${invoiceNumber}`,
  );
