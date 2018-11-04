const Invoice = require('./model');

const findAll = async () => {
  return await Invoice.find({});
};

const findOne = async (id) => {
  return await Invoice.find({"_id":id})
}

const createInvoice = async (attributes) => {
  return await Invoice.create(attributes);
};


module.exports = {
  findAll,
  findOne,
  createInvoice,
};
