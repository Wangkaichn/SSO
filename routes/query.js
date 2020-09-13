const router = require("koa-router")();
const mysql = require('../utils/database/mysql')

router.prefix("/query");

router.options("/registerUser", async (ctx, next) => {
  ctx.response.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  ctx.response.set('Access-Control-Allow-Credentials', 'true')
  ctx.response.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  ctx.status = 200
  ctx.body = ['a']
  await next()
})

router.post("/registerUser", async (ctx, next) => {
  const data = await mysql.registerUser(ctx.request.body)
  if (data.affectedRows != 0) {
    ctx.body = { data }
  }
});

router.get('/checkNickNameIsExisted', async function (ctx, next) {
    const { nickname } = ctx.request.query
    const isExisted = await mysql.checkNickNameIsExisted(nickname)
    ctx.body = { isExisted }
  })

module.exports = router;
