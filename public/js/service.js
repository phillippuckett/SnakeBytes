angular.module('snakeBytes')
    .service('scoreSvc', function($state, $http) {

        this.player = function(playerName) {
            return $http.post('api/score', playerName)
                .then(function(createPlayer) {
                    return createPlayer.data;
                })
        }
    });