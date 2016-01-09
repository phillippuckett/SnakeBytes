angular.module('snakeBytes')
    .directive("startDir", function () {
        return {
            restrict: "E",
            templateUrl: "js/views/home/homeTmpl.html",
            controller: function ($scope) {
                $scope.startGame = "START GAME";
                $scope.button = true;
                $scope.toggle = $scope.toggle && !$scope.button;
                console.log("StartDirCtrl Running");
            }
        }
    });