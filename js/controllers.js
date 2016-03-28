angular.module('snakeBytes')
    .controller('scoreCtrl', function ($scope) {
        // console.log("SCORE CONTROLLER");
        
        $scope.optButton = false;
        $scope.optToggle = function () {
            $scope.options = !$scope.options;
            // console.log('OPTIONS TOGGLE');
        }

        var currentDate = new Date().getFullYear();
        $scope.date = currentDate.toString();
    });

angular.module('snakeBytes')
    .controller('gameCtrl', function ($scope, $window, $state) {
        // console.log("GAME CONTROLLER");
        
        main();

        $scope.psButton = false;
        $scope.psToggle = function () {
            $scope.pause = !$scope.pause;
            // console.log('PAUSE TOGGLE');
            
            main();

            var canvas = $window.document.getElementById('canvas');
            if (canvas) {
                canvas.focus();
            }

            $scope.onKeypress = function (event) {
                console.log('Key Pressed:', event.keyCode);
                switch (event.keyCode) {

                    case 112:
                        pauseGame = !pauseGame;
                        $scope.pauseGame = pauseGame;
                        $state.go('score');
                        console.log(pauseGame);
                        break;
                
                    // case 113:
                    //     $state.go('score');
                    //     console.log(quitGame);
                    //     break;
                }
            }
        }

        var currentDate = new Date().getFullYear();
        $scope.date = currentDate.toString();

    });

angular.module('snakeBytes')
    .controller('gameOverCtrl', function ($scope, $window, $state) {
        // console.log("GAMEOVER CONTROLLER");
        
        var gameOverMenu = $window.document.getElementById('canvas');
        if (gameOverMenu) {
            gameOverMenu.focus();
        }

        $scope.onKeypress = function (event, playerName) {
            switch (event.keyCode) {

                case 13:
                    $state.go('score');
                    console.log(playerName);
                    console.log(gameOver);
                    break;
            }
        }

        $scope.gameOver = function () { }

    });