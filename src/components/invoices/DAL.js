const Invoice = require('./model');

const update = async (ctx) => await Invoice.findByIdAndUpdate(ctx.id, ctx);

const findAll = async () => await Invoice.find({});

const findOne = async (id) => await Invoice.findById(id);

const createInvoice = async (attributes) => await Invoice.create(attributes);



module.exports = {
  findAll,
  findOne,
  createInvoice,
  update
};
