
/** Header Directive */
angular.module('snakeBytes')
    .directive('hdrDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'html/header.html',
            controller: function ($scope) {
                console.log('HEADER DIRECTIVE');
            }
        }
    });
    
/** Footer Directive */
angular.module('snakeBytes')
    .directive('ftrDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'html/footer.html',
            controller: function ($scope) {
                console.log('FOOTER DIRECTIVE');
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