const Koa = require('koa');
const app = new Koa();

app.use(ctx =>{
    ctx.body = 'Hello Diana'
});

app.listen(3000);