'use strict';

var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var IP = 'localhost',
    PORT = 9000;

// Connect to database
var db = mongoose.connect('mongodb://localhost/ng-component-routing-test', { db: { safe: true }});

// Setup express
var app = express();
app.use(bodyParser());
app.use(methodOverride());

// Setup the routes
require('./routes')(app);

// Start server
app.listen(PORT, IP, function () {
  console.log('Express server listening on %s:%d', IP, PORT);
});
