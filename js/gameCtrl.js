angular.module('snake')
    .controller('gameCtrl', function ($scope, mainSvc, $window, $state) {



        /** START();
         * start() is found within mainCnvs.js
         * Sets and resets values that serve to hault the game
         * Sets up "canvas" as an element 
         * By invoking start() the game can begin running */

        start();



        /** MY CANVAS
         * Initiates the "canvas" element found inside of the mainCnvs.js file. 
         * For a better user experience focuses the user onto the intitated "canvas" element */

        var myCanvas = $window.document.getElementById('canvas');
        if (canvas) {
            canvas.focus();
        }



        /** pause */

        $scope.pause = function () {
            $scope.keyP = !$scope.keyP;
            pauseGame = !pauseGame;
            console.log('PAUSE', pauseGame);
        }

        /** quit */

        $scope.quit = function () {
            $scope.keyQ = !$scope.keyQ;
            quitGame = !quitGame;
            $state.go('score');
            console.log('QUIT', quitGame);
        }



        /** onKeyPress
         * Assigns specific key commands to onkeypress properties found in the DOM */

        $scope.onKeypress = function (event) {
            switch (event.keyCode) {

                case 112:
                    $scope.pause();
                    break;

                case 80:
                    $scope.pause();
                    break;

                case 113:
                    $scope.quit();
                    break;

                case 81:
                    $scope.quit();
                    break;

            }
        };



        /** Focuses on the score-submit modal */

        var scoreSubmit = $window.document.getElementById('canvas');
        if (scoreSubmit) {
            scoreSubmit.focus();
        }



        /** Upon submission createScore() is run */

        $scope.createScore = function () {
            mainSvc.createScore($scope.score)
                .then(function (response) {
                    $scope.score = response;
                    console.log('CREATE SCORE', response);
                })
            $scope.scoreBoard();
        }



        /** scoreBoard() navigates player to score.html */

        $scope.scoreBoard = function () {
            $state.go('score');
            console.log('SCOREBOARD');
        }



        /** Provides current year */

        var currentDate = new Date().getFullYear();
        $scope.date = currentDate.toString();



        /** To make sure that the functions are running */

        // console.log('GAME CONTROLLER RUNNING');
        // console.log('onKeyPress, gameCtrl: ' + onkeypress);
        // console.log('currentDate: ' + currentDate);
    });