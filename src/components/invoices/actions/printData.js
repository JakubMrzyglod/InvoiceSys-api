module.exports = async (ctx, next) => {
  console.log(ctx.request.body)

  await next();
};
