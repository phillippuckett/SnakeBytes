angular.module('snakeBytes')
    .controller('pauseCtrl', function ($scope) {
        console.log("pauseCtrl Running");
        $scope.pauseHeader = "PAUSE";
        $scope.resume = "RESUME";
        $scope.options = "OPTIONS";
        $scope.home = "QUIT";      
    });