const Koa = require('koa');
const KoaRouter = require('koa-router');

const app = new Koa();
const router = new KoaRouter();
router.get('/', async ctx => {
  ctx.body='开课吧-Axios原理分析与实现'
})
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  await next();
})
app.use(router.routes());
app.listen(8888)