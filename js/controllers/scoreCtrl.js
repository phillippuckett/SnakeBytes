angular.module('snakeBytes')
    .controller('scoreCtrl', function ($scope, $state) {

        $scope.optButton = false;
        $scope.optToggle = function () {
            $scope.options = !$scope.options;
        }

        $scope.onKeypress = function (event) {
            switch (event.keyCode) {

                case 32:
                    console.log('SPACE');
                    break;
            }
        }

        var currentDate = new Date().getFullYear();
        $scope.date = currentDate.toString();
    });