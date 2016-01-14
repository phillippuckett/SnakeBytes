angular.module('snakeBytes')
    .directive('gameOverDir', function () {
        return {
            restrict: 'E',
            templateUrl: "js/routes/game/gameTmpl.html",
            controller: function ($scope, $window, $state) {
                console.log("gameOverDir Running");
                
            }
        }
    });