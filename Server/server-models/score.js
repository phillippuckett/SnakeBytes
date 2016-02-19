var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScoreSchema = new Schema({
    username: { type: String, required: true, index: String },
    score: { type: Number },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Score', ScoreSchema);