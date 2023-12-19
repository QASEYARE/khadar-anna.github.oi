var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '10.10.211.30',
  user: 'Remote',
  password: 'Remote123,',
  database: 'HKV'
});

connection.connect(function(error) {
  if (error) {
    console.error('Error connecting to database: ', error);
    throw error;
  }
  console.log('Connected to the database');
});

connection.query('SELECT anro, enimi, snimi, sp FROM Asiakas LIMIT 10', function (error, results, fields) {
  if (error) {
    console.error('Error querying database: ', error);
    throw error;
  }

  console.log(results);

  console.log(JSON.stringify(results));

  var jsObject = JSON.parse(JSON.stringify(results));
  console.log(jsObject);

  console.log('D:');
  console.table(jsObject);
});

connection.end();

