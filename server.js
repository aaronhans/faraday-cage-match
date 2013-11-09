// https://github.com/nko4/website/blob/master/module/README.md#nodejs-knockout-deploy-check-ins
require('nko')('o-BO4moteEDG_Hfb');

var isProduction = (process.env.NODE_ENV === 'production');
var http = require('http');
var port = (isProduction ? 80 : 8000);
var express = require("express");
var app = express();

app.configure(function() {
  app.use(express.bodyParser());
  app.use(express.static('./static/'));
  app.use(app.router);
});
app.set('view engine', 'ejs');
app.set('view options', {
  layout: false
});

app.listen(port);
