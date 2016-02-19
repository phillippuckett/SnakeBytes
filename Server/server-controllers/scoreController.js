var mongoose = require('mongoose');
var Score = require('./../server-models/score');

module.exports = {
    
    /** C */
    createScore: function (req, res) {
        Score
            .create(req.body)
            .save(function (err, postScore) {
                if (err) { res.status(500).send(err); }
                else { res.send(postScore); }
            })
    },
     
    /** R */
    getScore: function (req, res) {
        Score
            .find(req.query)
            .exec(function (err, getScore) {
                if (err) { res.status(500).send(err); }
                else { res.send(getScore); }
            })
    },
};