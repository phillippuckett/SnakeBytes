angular.module('snakeBytes')
    .controller('scoreCtrl', function ($scope) {
        
        $scope.optButton = false;
        $scope.optToggle = function () {
            $scope.options = !$scope.options;
        }

        var currentDate = new Date().getFullYear();
        $scope.date = currentDate.toString();
    });