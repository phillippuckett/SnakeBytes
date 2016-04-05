angular.module('snakeBytes')
    .controller('scoreCtrl', function($scope, $state) {
        console.log('SCORE CTRL');

        $scope.start = function() {
            $scope.keyEnter = !$scope.keyEnter;
            startGame = !startGame;
            $state.go('game');
            console.log('START', startGame);
        }

        var optionsGame = false;
        $scope.options = function() {
            $scope.keyO = !$scope.keyO;
            optionsGame = !optionsGame;
            console.log('OPTIONS', optionsGame);
        }

        $scope.onKeypress = function(event) {
            switch (event.keyCode) {

                case 13:
                    $scope.keyEnter = !$scope.keyEnter;
                    startGame = !startGame;
                    $state.go('game');
                    console.log('PLAY', playGame);
                    break;

                case 79:
                    $scope.keyO = !$scope.keyO;
                    optionsGame = !optionsGame;
                    console.log('OPTIONS', optionsGame);
                    break;
            }
        }

        var currentDate = new Date().getFullYear();
        $scope.date = currentDate.toString();
    });