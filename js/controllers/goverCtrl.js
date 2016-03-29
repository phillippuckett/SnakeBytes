angular.module('snakeBytes')
    .controller('goverCtrl', function ($scope, $window, $state) {
        console.log("GOVER CTRL");

        var goMod = $window.document.getElementById('canvas');
        if (goMod) {
            goMod.focus();
        }

        $scope.onKeypress = function (event, playerName) {
            switch (event.keyCode) {

                case 13:
                    $state.go('score');
                    console.log('ENTER', playerName);
                    break;
            }
        }

        $scope.stopGame = function () {
            $state.go('score');
            console.log('GAME OVER', stopGame);
        }

        console.log('ON KEY PRESS', event.keyCode);

    });