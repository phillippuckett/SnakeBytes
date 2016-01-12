angular.module('snakeBytes')
    .controller('homeCtrl', function ($scope) {
        $scope.button = true;
        $scope.toggle = $scope.toggle && !$scope.button;
        console.log("homeCtrl Running");
        $scope.homeHeader = "SNAKE BYTES";
        $scope.startGame = "START GAME";
        $scope.options = "OPTIONS";
        $scope.scoreboardButton = "SCOREBOARD";
    });