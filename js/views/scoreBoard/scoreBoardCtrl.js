angular.module('snakeBytes')
.controller('scoreBoardCtrl', function ($scope, scoreBoardSvc) {
    $scope.test = function () {
        console.log("ScoreBoardCtrl Running");
    }
});