angular.module('snakeBytes')
    .controller('optionsCtrl', function ($scope) {
        console.log("OptionsCtrl Running");
        $scope.header = "SETTINGS";
        $scope.toggleMusic = "MUSIC";
        $scope.toggleSound = "SOUND";
    });