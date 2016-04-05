angular.module('snakeBytes')
    .controller('gameCtrl', function($scope, $window, $state) {
        console.log('GAME CTRL');

        start();

        var canvas = $window.document.getElementById('canvas');
        if (canvas) {
            canvas.focus();
        }

        $scope.pause = function() {
            $scope.keyP = !$scope.keyP;
            pauseGame = !pauseGame;
            console.log('PAUSE', pauseGame);
        }

        $scope.quit = function() {
            $scope.keyQ = !$scope.keyQ;
            quitGame = !quitGame;
            $state.go('score');
            console.log('QUIT', quitGame);
        }

        $scope.onKeypress = function(event) {
            switch (event.keyCode) {

                case 112:
                    $scope.keyP = !$scope.keyP;
                    pauseGame = !pauseGame;
                    console.log('PAUSE', pauseGame);
                    break;

                case 113:
                    $scope.keyQ = !$scope.keyQ;
                    quitGame = !quitGame;
                    $state.go('score');
                    console.log('QUIT', quitGame);
                    break;
            }
        }

        var currentDate = new Date().getFullYear();
        $scope.date = currentDate.toString();
    });