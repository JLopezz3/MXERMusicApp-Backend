const mysql = require("mysql");
const db = mysql.createConnection({
  host: "mxerapp.cvrxwj7agwxk.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "tjs2020!",
  database: "Song",
});


module.exports = db;
