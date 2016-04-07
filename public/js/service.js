angular.module('snakeBytes')
    .service('service', function($state, $http) {

        this.createScore = function(score) {
            return $http.post('/api/scores', score).then(function(scoreData) {
                console.log('DATA', scoreData);
                return scoreData.data;
            })
        }

        this.getScore = function() {
            return $http.get('/api/scores')
                .then(function(scoreData) {
                    console.log('DATA', scoreData);
                    return scoreData.data;
                })
        }

    });