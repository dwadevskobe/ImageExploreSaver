'use strict'

var express = require('express');
var mongoose = require('mongoose');
var categoryRouter = require('./routes/categoryRouter');
var categoryItemRouter = require('./routes/categoryItemRouter');
var secrets = require('./secrets');

var bodyParser = require('body-parser');
var app = express();
var port = process.env.API_PORT || 3001;
var mongoDB = secrets.requestSecret('db_uri');

mongoose.connect(mongoDB, {useNewUrlParser: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.use('/categories', categoryRouter);
app.use('/categoryItems', categoryItemRouter);


app.listen(port, function() {
  console.log(`api running on port ${port}`);
});


