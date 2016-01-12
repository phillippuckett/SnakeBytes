angular.module('snakeBytes')
    .controller('gameCtrl', function ($scope) {
        $scope.gameHeader = "SNAKE BYTES";
        $scope.homeButton = "X";
        console.log("gameCtrl Running");
        
        // $scope.pauseGAME = false;
        // $scope.toggle = $scope.toggle && !$scope.pauseGAME;
        // console.log("pause Function Running");
    });