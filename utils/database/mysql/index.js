const { createConnection } = require('mysql')

const tableName = 't_user'
const dbConnection = createConnection({
  host: "123.56.143.183",
  user: "root",
  password: "12312300",
  database: "sso",
  port: "33066",
})

const _connect = () => {
  return new Promise((resolve, reject) => {
    dbConnection.connect((err) => {
      if (err) {
        reject(err)
      }
      console.log("Mysql 连接成功")
      resolve()
    })
  })
}
const _end = () => {
  return new Promise((resolve, reject) => {
    try {
      dbConnection.end()
      console.log("Mysql 连接断开")
      resolve()
    } catch (err) {
      reject(err)
    }
  })
}

const _query = async (sql) => {
  await _connect()
  const res =  new Promise((resolve, reject) => {
    dbConnection.query(sql, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
      dbConnection.release()
    })
  })
  await _end()
  return res
}


const test = async () => {
  const sql = 'SELECT * FROM ' + tableName
  const res = await _query(sql)
  console.info('res: ', res)
  _stop()
}

const checkNickNameIsExisted = async (nickName) => {
  const sql = `SELECT id FROM ${tableName} WHERE nick_name = '${nickName}'` 
  const res = await _query(sql)
  return !!res.length
}

module.exports = {
  test,
  checkNickNameIsExisted
}