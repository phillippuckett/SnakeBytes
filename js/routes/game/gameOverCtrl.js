angular.module('snakeBytes')
    .controller('gameOverCtrl', function ($scope, $window, $state) {
        $scope.gameHeader = "SNAKE BYTES";
        console.log("gameOverCtrl Running");
        var gameOverMenu = $window.document.getElementById('myCanvas');
        if (gameOverMenu) {
            gameOverMenu.focus();
        }
        $scope.onKeypress = function (event, playerName) {
            switch (event.keyCode) {
                // ENTER //
                case 13:
                    $state.go('scoreboard');
                    console.log(playerName);
                    console.log('Keystate Running; SUBMIT SCORE', gameOver);
                    break;
            }
        }
        
        $scope.gameOver = function () {
        }
    });