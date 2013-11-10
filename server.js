// https://github.com/nko4/website/blob/master/module/README.md#nodejs-knockout-deploy-check-ins
require('nko')('o-BO4moteEDG_Hfb');

var isProduction = (process.env.NODE_ENV === 'production');
var http = require('http');
var port = (isProduction ? 80 : 8000);
var express = require("express");
var app = express();

app.configure(function() {
  app.use(express.bodyParser());
  app.use(express.compress());
  app.use(express.static(__dirname + '/static'));
  app.use(app.router);
});

app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');

app.get('/', function(req, res) {
  res.render('index.ejs',{});
});
app.get('/lookup', function(req, res) {
  var scoreMe = require(__dirname + '/letters.js');
  var score = scoreMe.letterScore(req.query.letters);
  console.log(score);
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{"score":"'+score.toString()+'"}');
});


app.listen(port, function(err) {
  if (err) { console.error(err); process.exit(-1); }

  // if run as root, downgrade to the owner of this file
  if (process.getuid() === 0) {
    require('fs').stat(__filename, function(err, stats) {
      if (err) { return console.error(err); }
      process.setuid(stats.uid);
    });
  }

  console.log('Server running at http://0.0.0.0:' + port + '/');
});