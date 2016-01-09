var snakeBytes = angular.module('snakeBytes', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'js/views/home/homeTmpl.html',
                controller: 'homeCtrl'
            })

            .state('options', {
                url: '/options',
                templateUrl: '',
                controller: ''
            })

            .state('scoreBoard', {
                url: '/score-board',
                templateUrl: '',
                controller: '',
                resolve: {
                    resolvedData: function (scoreBoardSvc, $stateParams) {
                        return scoreBoardSvc.getData($stateParams.macronutrients)
                    }
                }
            })
    });