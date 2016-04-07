var scores = require('./model.js');

module.exports = {

    createScore: function(req, res) {
        scores
            .create(req.body)
            .exec(function(err, scoreData) {
                if (err) { console.error(err); return res.status(500).json(err); }
                else { res.status(200).json('CREATE', scoreData); }
            })
    },

    getScore: function(req, res) {
        scores
            .find(req.query)
            .exec(function(err, scoreData) {
                if (err) { res.status(500).send(err); }
                else { res.status(200).send('GET', scoreData); }
            })
    },
}