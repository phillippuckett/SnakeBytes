angular.module('snakeBytes')
    .controller('controller', function($scope, $window, $state, service) {

        start();

        var canvas = $window.document.getElementById('canvas');
        if (canvas) {
            canvas.focus();
        }

        $scope.pause = function() {
            $scope.keyP = !$scope.keyP;
            pauseGame = !pauseGame;
            console.log('PAUSE (button)', pauseGame);
        }

        $scope.quit = function() {
            $scope.keyQ = !$scope.keyQ;
            quitGame = !quitGame;
            $state.go('score');
            console.log('QUIT (button)', quitGame);
        }

        $scope.onKeypress = function(event) {
            switch (event.keyCode) {

                case 79:
                    $scope.keyO = !$scope.keyO;
                    optionsGame = !optionsGame;
                    console.log('OPTIONS', optionsGame);
                    break;

                case 112:
                    $scope.keyP = !$scope.keyP;
                    pauseGame = !pauseGame;
                    console.log('PAUSE (key)', pauseGame);
                    break;

                case 113:
                    $scope.keyQ = !$scope.keyQ;
                    quitGame = !quitGame;
                    $state.go('score');
                    console.log('QUIT (key)', quitGame);
                    break;

                case 13:
                    $scope.keyEnter = !$scope.keyEnter;
                    startGame = !startGame;
                    $state.go('game');
                    console.log('PLAY', playGame);
                    break;

            }
        }

        var currentDate = new Date().getFullYear();
        $scope.date = currentDate.toString();
        // console.log('DATE', $scope.date);

        var scoreSubmit = $window.document.getElementById('canvas');
        if (scoreSubmit) {
            scoreSubmit.focus();
        }

        $scope.createScore = function() {
            service.createScore($scope.score)
                .then(function(response) {
                    $scope.score = response;
                    console.log('CREATE SCORE', response);
                })
            $scope.scoreBoard();
        }

        $scope.scoreBoard = function() {
            $state.go('score');
            console.log('SCOREBOARD');
        }
    });

angular.module('snakeBytes')
    .controller('ctrl', function($scope, $window, $state, service) {

        var optionsGame = false;
        $scope.options = function() {
            $scope.keyO = !$scope.keyO;
            optionsGame = !optionsGame;
            console.log('OPTIONS', optionsGame);
        }

        $scope.onKeypress = function(event) {
            switch (event.keyCode) {

            }
        }
    });