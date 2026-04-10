const Invoice = require("../models/invoice.model");

exports.saveInvoice = async (invoice) => {
  return Invoice.create({
    invoiceId: invoice.id,
    userId: invoice.customer,
    amount: invoice.amount_paid,
    currency: invoice.currency,
    status: invoice.status,
    hostedInvoiceUrl: invoice.hosted_invoice_url,
  });
};
