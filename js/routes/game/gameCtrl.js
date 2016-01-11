angular.module('snakeBytes')
    .controller('gameCtrl', function ($scope) {
        $scope.button = true;
        $scope.toggle = $scope.toggle && !$scope.button;
        console.log("gameCtrl Running");
        $scope.gameHeader = "SNAKE BYTES";
    });