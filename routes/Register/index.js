const router = require("koa-router")()
const basePath = process.env.INIT_CWD
const mysql = require(basePath + '/utils/Database/Mysql')
const redis = require(basePath + '/utils/Database/Redis')

router.prefix("/register")

router.options("/", async (ctx, next) => {
  ctx.response.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  ctx.response.set('Access-Control-Allow-Credentials', 'true')
  ctx.response.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  ctx.status = 200
  ctx.body = ''
  await next()
})

router.post("/", async (ctx, next) => {
  console.info('ctx.request.body: ', ctx.request.body)
  const data = await mysql.register(ctx.request.body)
  if (data.affectedRows != 0) {
    ctx.body = { data }
  }
})

router.options("/token", async (ctx, next) => {
  ctx.response.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  ctx.response.set('Access-Control-Allow-Credentials', 'true')
  ctx.response.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  ctx.status = 200
  ctx.body = ''
  await next()
})

router.get("/token", async (ctx, next) => {
  const token = new Array(10).fill(0).map(_ => Math.random(0, 1).toFixed(1) * 10).join('')
  redis.register({ token })
  ctx.body = { token }
})

module.exports = router;
