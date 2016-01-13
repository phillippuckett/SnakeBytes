angular.module('snakeBytes')
    .controller('gameCtrl', function ($scope) {
        $scope.gameHeader = "SNAKE BYTES";
        $scope.gameHomeButton = "X";
        $scope.gamePauseMenu = "P";        
        console.log("gameCtrl Running");
        main();
    });