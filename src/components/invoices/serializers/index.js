const JSONAPISerializer = require('jsonapi-serializer').Serializer;

const invoicesSerializer = new JSONAPISerializer('invoices', {
  attributes: ['name', 'items'],
  items: {
    ref: '_id',
    attributes: ['name','quantity']
  },
  topLevelLinks: {
    self: 'http://localhost:3000/api/v1/invoices'
  }
});

module.exports = invoicesSerializer;
