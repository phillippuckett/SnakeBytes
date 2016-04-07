var snakeBytes = angular.module('snakeBytes', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            .state('game', {
                url: '/game',
                templateUrl: '/html/game.html',
                controller: 'controller'
            })
            
            .state('score', {
                url: '/score',
                templateUrl: '/html/score.html',
                controller: 'ctrl'
            })

        $urlRouterProvider.otherwise('/score');

    });