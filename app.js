const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const { Login, Register, Query, Oauth, Upload } = require('./routes')
require('./utils/Database/Redis')
require('./utils/Database/Redis')
require('./utils/Database/Mysql')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(async function (ctx, next) {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  ctx.set('Access-Control-Allow-Credentials', 'true')
  await next()
})

app.use(Login.routes(), Login.allowedMethods())
app.use(Register.routes(), Register.allowedMethods())
app.use(Query.routes(), Query.allowedMethods())
app.use(Oauth.routes(), Oauth.allowedMethods())
app.use(Upload.routes(), Upload.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
