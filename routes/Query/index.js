const router = require("koa-router")()
const basePath = process.env.INIT_CWD
const mysql = require(basePath + '/utils/Database/Mysql')

router.prefix("/query");

router.get('/checkNickNameIsExisted', async function (ctx, next) {
  const { nickname } = ctx.request.query
  const isExisted = await mysql.checkNickNameIsExisted(nickname)
  ctx.body = { isExisted }
})

module.exports = router
