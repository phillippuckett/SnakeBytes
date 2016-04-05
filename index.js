/** Dependants */
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var cors = require('cors');

/** Express */
var app = express();

/** Connect to Front-End */
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());

/** Connections */
var nodePort = 3000;
app.listen(nodePort, function() {
    console.log('Running nodemon://localhost:' + nodePort);
});

var mongoURI = 'mongodb://GDVuser:user@ds023458.mlab.com:23458/SnakeBytes';
mongoose.connect(mongoURI);
mongoose.connection.once('open', function(err) {
    if (err) { throw err; }
    else { console.log('Running ' + mongoURI); }
});