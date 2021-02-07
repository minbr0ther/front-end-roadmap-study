var mysql      = require('mysql'); //load mysql module
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'opentutorials'
});
 
connection.connect();
 
connection.query('SELECT * FROM topic', function (error, results, fields) {
  if (error) {
      console.log(error);
  }
  console.log(results);
});
 
connection.end();