let mysql = require("mysql");
let dbConnection = mysql.createConnection({
//   host: "localhost",
  host: "123.56.143.183",
  user: "root",
  password: "12312300",
  database: "sso",
  port: "33066",
});

dbConnection.connect((err) => {
  if (err) throw err;
  console.log("连接成功");
});

let sql = 'SELECT * FROM t_user';
dbConnection.query(sql, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log(res);
    }
});
