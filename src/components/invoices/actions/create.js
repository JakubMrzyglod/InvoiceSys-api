const { range } = require('lodash');
const { createInvoice} = require('../DAL');

module.exports = async (ctx, next) => {
  const { body: params } = ctx.request;
  ctx.request.body = await createInvoice(params);

  await next();
}
