angular.module('snakeBytes')
    .controller('gameCtrl', function ($scope, $window, $state) {

        $scope.psButton = false;
        $scope.psToggle = function () {
            $scope.pause = !$scope.pause;
        }

        start();

        var canvas = $window.document.getElementById('canvas');
        if (canvas) {
            canvas.focus();
        }

        $scope.onKeypress = function (event) {
            // console.log('ON KEY PRESS', event.keyCode);
            switch (event.keyCode) {

                case 112:
                    pauseGame = !pauseGame;
                    $scope.pauseGame = pauseGame;
                    console.log('PAUSE', pauseGame);
                    break;
                
                case 113:
                    $state.go('score');
                    console.log('QUIT', quitGame);
                    break;
            }
            console.log('ON KEY PRESS', event.keyCode);
        }

        $scope.stopGame = function () {
            $state.go('score');
            console.log('GAME OVER', stopGame);
        }

        var currentDate = new Date().getFullYear();
        $scope.date = currentDate.toString();

    });