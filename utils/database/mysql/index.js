const mysql = require('mysql');

const pool  = mysql.createPool({
  host: "123.56.143.183",
  user: "root",
  password: "12312300",
  database: "sso",
  port: "33066",
})
const _query = async (sql) => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(error, connection) {
      if (error) {
        console.warn('Mysql 连接失败!!!')
        reject(error)
      }
      connection.query(sql, async (error, results) => {
        resolve(results)
        connection.release()
        if (error) {
          console.warn(error)
          reject(error)
        }
      })
    })
  })
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