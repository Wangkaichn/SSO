const router = require('koa-router')()

router.prefix('/oauth')

router.get('/me', function (ctx, next) {
  ctx.status = 401
  // ctx.body = {
  //   data: {
  //     headUrl: 'https://assets.leetcode-cn.com/support/new.svg',
  //     name: '测试 + 1'
  //   }
  // }
})
router.post('/register', function (ctx, next) {
  ctx.body = {
    a: 'A',
    b: ['B']
  }
})

module.exports = router
