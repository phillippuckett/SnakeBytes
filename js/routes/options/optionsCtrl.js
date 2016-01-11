angular.module('snakeBytes')
    .controller('optionsCtrl', function ($scope) {
        console.log("OptionsDirCtrl Running");
        $scope.header = "SETTINGS";
        $scope.toggleMusic = "MUSIC";
        $scope.button = true;
        $scope.toggle = $scope.toggle && !$scope.button;
        $scope.toggleSound = "SOUND";
        $scope.button = true;
        $scope.toggle = $scope.toggle && !$scope.button;
    });