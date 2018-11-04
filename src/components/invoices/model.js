const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  quantity: Number
});

const invoiceSchema = new mongoose.Schema({
  name: String,
  items: [itemSchema]
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
