const { findOne } = require('../DAL');

module.exports = async (ctx, next) => {
  ctx.request.body = await findOne(ctx.params.id);

  await next();
};
