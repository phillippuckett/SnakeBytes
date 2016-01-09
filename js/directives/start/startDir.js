angular.module('snakeBytes')
    .directive('startDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'js/directives/start/startTmpl.html',
            controller: function ($scope) {
                $scope.button = true;
                $scope.toggle = $scope.toggle && !$scope.button;
                $scope.startGame = "START GAME";
                $scope.header = "SNAKE BYTES";
                console.log("StartDirCtrl Running");
            }
        }
    });
