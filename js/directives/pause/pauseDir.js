angular.module('snakeBytes')
    .directive('pauseDir', function () {
        return {
            restrict: 'E',
            templateUrl: "js/routes/game/gameTmpl.html",
            controller: function ($scope, $window, $state) {
                console.log("pauseDir Running");

            }
        }
    });