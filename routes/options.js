const router = require('koa-router')()


router.options('/users', async function (ctx, next) {
  console.info('ctx: ', ctx)
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  ctx.set('Access-Control-Allow-Credentials', 'true')
  ctx.status = 200
  await next()
})

module.exports = router
