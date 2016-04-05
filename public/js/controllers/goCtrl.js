angular.module('snakeBytes')
    .controller('goCtrl', function($scope, $window, $state) {
        console.log("GAMEOVER CTRL");

        var goMod = $window.document.getElementById('canvas');
        if (goMod) {
            goMod.focus();
            console.log('GO MODAL');
        }

        $scope.goSubmit = function(player) {
            $state.go('score');
            console.log('GO SUBMIT()', player);
        }
    });