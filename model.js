var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scoreSchema = new Schema({
    player: { type: String },
    points: { type: Number }
});

module.exports = mongoose.model('scores', scoreSchema);