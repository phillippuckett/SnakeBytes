var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var cors = require('cors');
var controller = require('./controller');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());

app.post('/api/scores', controller.createScore);
app.get('/api/scores', controller.getScore);

var nodePort = 3000;
app.listen(nodePort, function() {
    console.log('Running nodemon://localhost:' + nodePort);
});

var mongoURI = 'mongodb://localhost:27017/snakeBytes';
mongoose.connect(mongoURI);
mongoose.connection.once('open', function(err) {
    if (err) { throw err; }
    else { console.log('Running ' + mongoURI); }
});