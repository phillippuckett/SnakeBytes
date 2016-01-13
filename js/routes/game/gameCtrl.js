angular.module('snakeBytes')
    .controller('gameCtrl', function ($scope, $window) {
        $scope.gameHeader = "SNAKE BYTES";
        console.log("gameCtrl Running");
        main();
        var gameCanvas = $window.document.getElementById('myCanvas');
        if (gameCanvas) {
            gameCanvas.focus();
        }
        $scope.onKeypress = function (event) {
            switch (event.keyCode) {
                
                // PAUSE //
                case 112:
                    pauseGame = !pauseGame;
                    if (pauseGame) {
                        console.log("Keystate Running; PAUSE", pauseGame);
                    } else {
                        console.log("Keystate Running; RESUME", pauseGame);
                    }
                    break;
                
                // QUIT //
                case 27:
                    quitGame = !quitGame;
                    console.log("Keystate Running; QUIT", quitGame);
                    break;
                    
                // ENTER //
                case 13:
                    console.log('enter!');
                    break;
            }
        }
    });