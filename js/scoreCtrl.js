angular.module('snake')
    .controller('scoreCtrl', function ($scope, mainSvc, $window, $state) {



        var optionsGame = false;
        var startGame = false;



        /** play game */
        $scope.play = function () {
            $state.go('game');
            console.log('PLAY');
        };

        /** options */

        $scope.options = function () {
            $scope.keyO = !$scope.keyO;
            optionsGame = !optionsGame;
            console.log('NO OPTIONS CURRENTLY AVAILABLE');
        }

        /** onKeyPress
         * Assigns specific key commands to onkeypress properties found in the DOM */

        $scope.onKeypress = function (event) {
            switch (event.keyCode) {

                case 13:
                    $scope.play();
                    break;

                case 111:
                    $scope.options();
                    break;

                case 79:
                    $scope.options();
                    break;
            }
        };



        // DISPLAYS SCORES, FROM PREVIOUS MATCHES //
        // $scope.getScore = function () {
        //     mainSvc.getScore
        // }



        /** Provides current year */

        var currentDate = new Date().getFullYear();
        $scope.date = currentDate.toString();



        /** To make sure that the functions are running */

        // console.log('SCORE CONTROLLER RUNNING');
        // console.log('optionsGame: ' + optionsGame);
        // console.log('startGame: ' + startGame);
        // console.log('onKeyPress, scoreCtrl: ' + onkeypress);
        // console.log('currentDate: ' + currentDate);
    });