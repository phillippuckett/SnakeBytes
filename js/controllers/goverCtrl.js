angular.module('snakeBytes')
    .controller('goverCtrl', function ($scope, $window) {
        console.log("GOVER CTRL");

        var goMod = $window.document.getElementById('canvas');
        if (goMod) {
            goMod.focus();
        }

        $scope.onKeypress = function (event, playerName, $state) {
            switch (event.keyCode) {

                case 13:
                    $state.go('score');
                    // console.log(playerName);
                    break;
            }
        }
        console.log('ON KEY PRESS', event.keyCode);

    });