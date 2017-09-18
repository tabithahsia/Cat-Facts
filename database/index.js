const Promise = require('bluebird');
const initOptions = {
    promiseLib: Promise
};

const pgp = require('pg-promise')();
console.log(process.env.DATABASE_URL);

const connection = process.env.DATABASE_URL ||'postgres://localhost:5432/catfacts';
// const connection = 'postgres://cksndzyuypbwpr:5e1ed153fbd704ebc609334afdb2f60797a2daf3b0dcf0b4f159531787661718@ec2-54-163-254-143.compute-1.amazonaws.com:5432/d55ofvqfb3e4h8'

const db = pgp(connection);

function getRandomFact(req, res, next) {
  db.one('SELECT * FROM facts ORDER BY random() LIMIT 1')
    .then(function(data) {
      console.log('this is the data inside getRandomFact', data);
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'retrieve 1 random fact'
        });
    })
    .catch(function(err) {
      console.log('this is the error: ', err);
      return next(err);
    });
}


/**** OLD MYSQL CODE ****/
// var mysql = require('mysql');
//
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'catfacts'
// })
//
// connection.connect();
//
// var getRandomFact = function(cb){
//   connection.query('SELECT * FROM `facts` ORDER BY RAND() LIMIT 1', function(error, results, fields) {
//     if(error){
//       cb(err, null)
//     } else {
//       console.log(results[0].fact);
//       cb(null, results);
//     }
//   })
// };
//
module.exports = {
  getRandomFact: getRandomFact
}
