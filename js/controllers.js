angular.module('snakeBytes')
    .controller('scoreCtrl', function ($scope) {
        // console.log("SCORE CONTROLLER");
        
        /*Toggle Option Modal--------------------*/
        $scope.optButton = false;
        $scope.optToggle = function () {
            $scope.options = !$scope.options;
            // console.log('OPTIONS TOGGLE');
        }
    });
    
angular.module('snakeBytes')
    .controller('gameCtrl', function ($scope, $window) {
        // console.log("GAME CONTROLLER");
        
        /*Toggle Pause Modal--------------------*/
        $scope.psButton = false;
        $scope.psToggle = function () {
            $scope.pause = !$scope.pause;
            // console.log('PAUSE TOGGLE');
        }
    });

    