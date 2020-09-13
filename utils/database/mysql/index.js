const { createConnection } = require('mysql')

Promise.resolve(1729).then(() => {
  console.log(`eid`);
})

const dbConnection = createConnection({
  host: "123.56.143.183",
  user: "root",
  password: "12312300",
  database: "sso",
  port: "33066",
});
dbConnection.connect((err) => {
  if (err) {
    throw err
  }
  console.log("连接成功");
});

const _query = (sql) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(sql, async (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

const test = async () => {
  const sql = 'SELECT * FROM t_user'
  const res = await _query(sql)
  console.info('res: ', res)
}

const nickNameIsExisted = () => {

}

module.exports = {
  test
}