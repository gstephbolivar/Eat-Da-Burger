// require mysql
const mysql = require("mysql");
// create heroku connection or create localhost connection 
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Flounder91!",
    database: "burgers_db",
  });
}
// setting the connection
connection.connect((err) => {
  if (err) {
    console.error("error connecting" + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
// exporting connection 
module.exports = connection;
