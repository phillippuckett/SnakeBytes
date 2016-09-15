var snake = angular.module('snake', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('game', {
                url: '/game',
                templateUrl: '/html/game.html',
                controller: 'gameCtrl'
            })

            .state('score', {
                url: '/score',
                templateUrl: '/html/score.html',
                controller: 'scoreCtrl'
            })

        $urlRouterProvider.otherwise('/score');
        
    });