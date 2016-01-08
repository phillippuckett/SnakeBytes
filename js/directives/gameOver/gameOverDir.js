angular.module('snakeBytes')
    .directive('gameOverDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'js/directives/gameOver/gameOverTmpl.html',
            controller: function () {
                console.log("GameOverDirCtrl Running");
            }
        }
    });