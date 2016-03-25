angular.module('snakeBytes')
    .controller('gameCtrl', function ($scope, $window) {
        // $scope.gameHeader = "GAME HEADER";
        // console.log("GAME CONTROLLER");
        
        /*Toggle Option Modal--------------------*/
        $scope.optButton = false;
        $scope.optToggle = function () {
            $scope.optMenu = !$scope.optMenu;
            console.log('TOGGLE');
        }
    });

angular.module('snakeBytes')
    .controller('mainCtrl', function ($scope) {
        // $scope.gameHeader = "MAIN HEADER";
        // console.log("MAIN CONTROLLER");
    });

angular.module('snakeBytes')
    .controller('scoreCtrl', function ($scope) {
        // $scope.gameHeader = "SCOREBOARD HEADER";
        // console.log("SCORE CONTROLLER");
    });
    