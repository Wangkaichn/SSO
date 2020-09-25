const redis = require('redis')
const RDS_HOST = '139.155.56.176'
const RDS_PORT = 6379
const RDS_PWD = 'Wo123456'
const RDS_OPTS = { auth_pass: RDS_PWD }
const client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS)

client.on('end', function(err){
  console.log('end')
})
client.on('error', function (err) {
  console.log(err)
})

const hmset = (name, obj) => {
  if (!obj instanceof Object) {
    throw new Error('Redis.hmset 的输入参数不是一个对象: { a: "A" }')
  }
  client.hmset([name, ...Object.entries(obj).flat(1)])
}
const hmget = async (name, key) => {
  client.hgetall(name, async (err, value) => {
    if (err) {
      await Promise.reject(err)
      return
    }
    await Promise.resolve(key ? value[key] : value)
  });
}
const register = (args) => {
  return hmset('register', args)
}


module.exports = {
  hmset,
  hmget,
  register
}
