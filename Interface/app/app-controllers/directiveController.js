
/** Header Directive */
angular.module('snakeBytes')
    .directive('headerDirective', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/app-directives/headerDirective.html',
            controller: function ($scope) {
                // console.log('Header');
            }
        }
    });
    
/** Footer Directive */
angular.module('snakeBytes')
    .directive('footerDirective', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/app-directives/footerDirective.html',
            controller: function ($scope) {
                // console.log('Footer');
                var currentDate = new Date().getFullYear();
                $scope.date = currentDate.toString();
            }
        }
    });
        
/** Options Directive */
// angular.module('snakeBytes')
//     .directive('optionsDirective', function () {
//         return {}
//     });
    
/** Pause Directive */
// angular.module('snakeBytes')
//     .directive('pauseDirective', function () {
//         return {}
//     });