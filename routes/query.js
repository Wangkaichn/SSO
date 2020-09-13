const router = require("koa-router")();
const mysql = require('../utils/database/mysql')

router.prefix("/query");

router.get('/checkNickNameIsExisted', async function (ctx, next) {
  const { nickname } = ctx.request.query
  const isExisted = await mysql.checkNickNameIsExisted(nickname)
  ctx.body = { isExisted }
})
router.options("/register", async (ctx, next) => {
  ctx.response.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  ctx.response.set('Access-Control-Allow-Credentials', 'true')
  ctx.response.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  ctx.status = 200
  ctx.body = ''
  await next()
})

router.post("/register", async (ctx, next) => {
  const data = await mysql.register(ctx.request.body)
  if (data.affectedRows != 0) {
    ctx.body = { data }
  }
});

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
