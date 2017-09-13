var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'catfacts'
})

connection.connect();

var getRandomFact = function(cb){
  connection.query('SELECT * FROM `facts` ORDER BY RAND() LIMIT 1', function(error, results, fields) {
    if(error){
      cb(err, null)
    } else {
      console.log(results[0].fact);
      cb(null, results);
    }
  })
};

module.exports.getRandomFact = getRandomFact;
