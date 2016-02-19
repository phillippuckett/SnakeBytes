/** Dependants */
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var cors = require('cors');

/** Controllers */
var scoreController = require('./server/server-controllers/scoreController');

/** Services */
// var passport = require('./server/services/passport');

/** Express */
var app = express();

/** Application */
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());
// app.use(session({ secret: config.SESSION_SECRET }));
// app.use(passport.initialize());
// app.use(passport.session());

/** Score End Points */
app.get('/api/score', scoreController.getScore);
app.post('/api/score', scoreController.createScore);

/** Connections */
var nodePort = 3000;
app.listen(nodePort, function () {
    console.log('Running nodemon://localhost:' + nodePort);
});

var mongoURI = 'mongodb://localhost:27017/SnakeBytes'
mongoose.connect(mongoURI);
mongoose.connection.once('open', function (err) {
    if (err) { throw err; }
    else { console.log('Running ' + mongoURI); }
});