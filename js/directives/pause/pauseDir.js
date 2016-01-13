angular.module('snakeBytes')
    .directive('pauseDir', function () {
        return {
            restrict: 'E',
            templateUrl: "js/routes/pause/pauseTmpl.html",
            controller: function ($scope) {
                console.log("pauseCtrl Running");
                $scope.pauseHeader = "PAUSE";
                $scope.resume = "RESUME";
                $scope.options = "OPTIONS";
                $scope.home = "QUIT";
            }
        }
    });