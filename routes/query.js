const router = require('koa-router')()
const mysql = require('../utils/database/mysql')


router.prefix('/query')

router.get('/checkNickNameIsExisted', async function (ctx, next) {
  const { nickname } = ctx.request.query
  const isExisted = await mysql.checkNickNameIsExisted(nickname)
  ctx.body = { isExisted }
})

module.exports = router
