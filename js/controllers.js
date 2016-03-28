angular.module('snakeBytes')
    .controller('scoreCtrl', function ($scope) {
        // console.log("SCORE CONTROLLER");
        
        $scope.optButton = false;
        $scope.optToggle = function () {
            $scope.options = !$scope.options;
            // console.log('OPTIONS TOGGLE');
        }
    });

angular.module('snakeBytes')
    .controller('gameCtrl', function ($scope, $window, $state) {
        // console.log("GAME CONTROLLER");
        
        $scope.psButton = false;
        $scope.psToggle = function () {
            $scope.pause = !$scope.pause;
            // console.log('PAUSE TOGGLE');
        }
    });

angular.module('snakeBytes')
    .controller('gameOverCtrl', function ($scope, $window, $state) {
        // console.log("GAMEOVER CONTROLLER");
    });