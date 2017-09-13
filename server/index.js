var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database/')

var app = express();

app.use(bodyParser.json() );
app.use(express.static(__dirname + '/../client/dist'));


app.get('/getFact', function (req, res) {
  db.getRandomFact(function(err, data) {
    if(err){
      res.send(501, err);
    } else {
      // console.log(data);
      res.send(data[0].fact);
    }
  })
})

app.listen(7485, function () {
  console.log('listening on port TABS');
})
