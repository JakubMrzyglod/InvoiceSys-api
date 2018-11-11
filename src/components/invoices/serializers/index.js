const JSONAPISerializer = require('jsonapi-serializer').Serializer;

const invoicesSerializer = new JSONAPISerializer('invoices', {
  attributes: ['name', 'items'],

  
  topLevelLinks: {
    self: 'http://localhost:3000/api/v1/invoices'
  }
});

module.exports = invoicesSerializer;
