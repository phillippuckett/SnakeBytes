angular.module('snakeBytes')
    .controller('gameCtrl', function ($scope, $window) {
        $scope.gameHeader = "GAME HEADER";
        console.log("GAME CONTROLLER");
    });

angular.module('snakeBytes')
    .controller('mainCtrl', function ($scope) {
        $scope.gameHeader = "MAIN HEADER";
        console.log("MAIN CONTROLLER");
    });

angular.module('snakeBytes')
    .controller('scoreCtrl', function ($scope) {
        $scope.gameHeader = "SCOREBOARD HEADER";
        console.log("SCORE CONTROLLER");
    });