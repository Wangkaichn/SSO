const router = require("koa-router")()
const koaBody = require('koa-body')
const path = require('path')
const fs = require('fs')

const basePath = process.env.INIT_CWD
const mysql = require(basePath + '/utils/Database/Mysql')
const redis = require(basePath + '/utils/Database/Redis')

const { WriteStream } = require(basePath + '/utils/WriteStream')

router.prefix("/upload")

router.options("/userAvatar", async (ctx, next) => {
  ctx.response.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  ctx.response.set('Access-Control-Allow-Credentials', 'true')
  ctx.response.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  ctx.status = 200
  ctx.body = ''
  await next()
})
// 对于头像的格式筛选, 在前端实现
router.post(
  "/userAvatar", 
  koaBody({
    multipart: true,
    encoding: 'gzip',
    formidable:{
      uploadDir: path.join(basePath,'public/upload/'),
      keepExtensions: true,
      maxFieldsSize: 2 * 1024 * 1024,
    }
  }), 
  (ctx) => {
    const fileInfo = ctx.request.files
    const filePath = fileInfo.avatar.path.split('/')
    const pubilcInddex = filePath.findIndex(i => i === 'public')
    const url = '/' + filePath.slice(pubilcInddex + 1).join('/')
    ctx.body = JSON.stringify({ ...fileInfo, url })
  }
)

router.options("/bigFile", async (ctx, next) => {
  ctx.response.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  ctx.response.set('Access-Control-Allow-Credentials', 'true')
  ctx.response.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  ctx.status = 200
  ctx.body = ''
  await next()
})
// 分块上传
let blobsPath
router.post(
  "/bigFile", 
  koaBody({
    multipart: true,
    // encoding: 'gzip',
    formidable:{
      // uploadDir: path.join(basePath,'public/upload/bigFile'),
      // keepExtensions: true,
      maxFieldsSize: Infinity
    }
  }), 
  async (ctx) => {
    const fileInfo = ctx.request.files
    const [fileName] = Object.keys(fileInfo)[0].split('-')
    
    const filePath = basePath + `/public/upload/bigFile/${fileName}`
    const { total, index } = ctx.query
    const filesTotalCount = +total
    const fileSequenceNumber = +index

    if (!Array.isArray(blobsPath)) {
      blobsPath = new Array(fileSequenceNumber).fill(0)
    }

    if (fileSequenceNumber <= filesTotalCount) {
      blobsPath[index - 1] = fileInfo[fileName].path
    } else {
      ctx.status = 400
      ctx.body = {
        error: '服务器存储文件错误'
      }
      return
    }
    if (!blobsPath.includes(0)) {
      WriteStream(blobsPath, filePath)
    }
    ctx.status = fileSequenceNumber === filesTotalCount ? 200 : 206
    ctx.body = JSON.stringify(fileInfo)
  }
)
module.exports = router;
