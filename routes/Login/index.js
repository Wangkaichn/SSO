const router = require("koa-router")()

const basePath = process.env.INIT_CWD
const mysql = require(basePath + '/utils/Database/Mysql')

router.prefix("/")

router.options("/login", async (ctx, next) => {
  ctx.response.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  ctx.response.set('Access-Control-Allow-Credentials', 'true')
  ctx.response.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  ctx.status = 200
  ctx.body = ''
  await next()
})
router.post('/login', async (ctx, next) => {
  const { nickname } = ctx.request.query
  const { password } = ctx.request.query
  const data = await mysql.login(nickname, password)
  if (data) {
    ctx.body = { data }
  }
})

module.exports = router;
