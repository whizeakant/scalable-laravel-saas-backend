const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
  invoiceId: String,
  userId: String,
  amount: Number,
  currency: String,
  status: String,
  hostedInvoiceUrl: String,
}, { timestamps: true });

module.exports = mongoose.model("Invoice", InvoiceSchema);
