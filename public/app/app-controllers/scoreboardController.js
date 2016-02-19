angular.module('snakeBytes')
    .controller('scoreboardController', function ($scope, $window, $state) {
        $scope.gameHeader = "Scoreboard Header";
        console.log("Scoreboard Controller");
    });