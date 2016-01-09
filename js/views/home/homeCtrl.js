angular.module('snakeBytes')
    .controller('homeCtrl', function ($scope) {
        $scope.header = "SNAKE BYTES";
        $scope.test = function () {
            console.log("homeCtrl Running");
    }
});