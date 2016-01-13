angular.module('snakeBytes')
    .controller('gameCtrl', function ($scope, $window, $state) {
        $scope.gameHeader = "SNAKE BYTES";
        console.log("gameCtrl Running");
        main();
        var gameCanvas = $window.document.getElementById('myCanvas');
        if (gameCanvas) {
            gameCanvas.focus();
        }
        $scope.onKeypress = function (event) {
            console.log('Key Pressed:', event.keyCode);
            switch (event.keyCode) {
                
                // PAUSE //
                case 112:
                    pauseGame = !pauseGame;
                    $scope.pauseGame = pauseGame;            
                    console.log("Keystate Running; PAUSE", pauseGame);
                    
                    break;
                
                // QUIT //
                case 113:
                    $state.go('scoreboard');
                    console.log("Keystate Running; QUIT", quitGame);
                    break;
            }
        }
    });