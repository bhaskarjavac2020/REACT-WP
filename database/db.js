var mysql = require('mysql');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database:"sys",
  password: "admin123"
});
/*
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
*/
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM college", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });