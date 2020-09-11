const router = require('koa-router')()

router.prefix('/oauth')


router.get('/me', function (ctx, next) {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  ctx.set('Access-Control-Allow-Credentials', 'true')
  ctx.status = 401
  // ctx.body = {
  //   data: {
  //     headUrl: 'https://assets.leetcode-cn.com/support/new.svg',
  //     name: '测试 + 1'
  //   }
  // }
})
router.get('/', function (ctx, next) {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  ctx.set('Access-Control-Allow-Credentials', 'true')
  ctx.body = {
    a: 'A',
    b: ['B']
  }
})

module.exports = router
