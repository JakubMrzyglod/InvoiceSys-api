
const { update } = require('../DAL');

module.exports = async (ctx, next) => {
  try {
    await update(ctx.request.body);
    console.log(ctx.request.body);
  } catch(e) {
    ctx.body = { errors: e }
  }
  await next();
};