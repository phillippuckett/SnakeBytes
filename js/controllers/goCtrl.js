angular.module('snakeBytes')
    .controller('goCtrl', function($scope, $window, $state) {
        console.log("GO CTRL");

        var goMod = $window.document.getElementById('canvas');
        if (goMod) {
            goMod.focus();
        }

        $scope.goSubmit = function(name) {
                $state.go('score');
        }
    });