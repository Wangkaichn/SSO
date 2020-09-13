const mysql = require('mysql');

const tableName = 't_user'
const pool  = mysql.createPool({
  host: "123.56.143.183",
  user: "root",
  password: "12312300",
  database: "sso",
  port: "33066",
})
const _query = async (sql) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((error, connection) => {
      if (error) {
        console.warn('Mysql 连接失败!!!')
        reject(error)
      }
      connection.query(sql, (error, results) => {
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
}

const checkNickNameIsExisted = async (nickName) => {
  const sql = `SELECT id FROM ${tableName} WHERE nick_name = '${nickName}'` 
  const res = await _query(sql)
  return !!res.length
}
const register = async (val) => {
  const keys = ['password', 'icon', 'mobile', 'email', 'nick_name']
  const values = keys.map(key => `'${val[key] || 'null'}'`)
  const sql = `INSERT INTO t_user (${keys.join(',')},create_time,update_time) VALUES (${values.join(',')},NOW(),NOW());`
  return _query(sql)
}

const login = async (nickName, pwd) => {
   const sql = `SELECT nick_name, email, mobile, password FROM ${tableName} WHERE nick_name = '${nickName}' AND password = '${pwd}'`
   const res = await _query(sql)
   return res
}

module.exports = {
  test,
  checkNickNameIsExisted,
  register,
  login
}