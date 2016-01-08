angular.module('snakeBytes')
    .directive("startDir", function () {
        return {
            restrict: "E",
            templateUrl: "js/directives/start/startTmpl.html",
            controller: function ($scope) {
                $scope.button = true;
                $scope.toggle = $scope.toggle && !$scope.button;
                console.log("StartDirCtrl Running");
            }
        }
    });