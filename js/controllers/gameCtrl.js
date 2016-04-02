angular.module('snakeBytes')
    .controller('gameCtrl', function($scope, $window, $state) {

        start();

        var canvas = $window.document.getElementById('canvas');
        if (canvas) {
            canvas.focus();
        }

        $scope.psToggle = function() {
            $scope.keyP = !$scope.keyP;
        }

        $scope.qtToggle = function() {
            $scope.keyQ = !$scope.keyQ;

        }

        $scope.playToggle = function() {
            $scope.keySpace = !$scope.keySpace;
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

                case 32:
                    playGame = !playGame;
                    $scope.keySpace = !$scope.keySpace;
                    $state.go('game');
                    console.log('PLAY', playGame);
                    break;
            }
        }

        var currentDate = new Date().getFullYear();
        $scope.date = currentDate.toString();

    });