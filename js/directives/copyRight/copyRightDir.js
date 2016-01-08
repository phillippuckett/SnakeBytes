angular.module('snakeBytes')
    .directive('copyRightDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'js/directives/copyRight/copyRightTmpl.html',
            controller: function ($scope) {
                console.log("CopyRightDirCtrl Running");
                var currentDate = new Date().getFullYear();
                $scope.date = currentDate.toString();
                console.log($scope.date);
            }
        }
    });