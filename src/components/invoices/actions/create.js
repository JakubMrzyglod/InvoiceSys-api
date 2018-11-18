const { range } = require('lodash');
const { createInvoice} = require('../DAL');

module.exports = async (ctx, next) => {
  const { body: params } = ctx.request;

  params.items = [
    {name:'name1',quantity:6},
    {name:'name2',quantity:16},
  ]
  console.log(params.items)

  ctx.request.body = await createInvoice(params);

  await next();
}
