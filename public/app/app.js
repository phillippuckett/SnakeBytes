var snakeBytes = angular.module('snakeBytes', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
        /** Home */
            .state('home', {
                url: '/home',
                templateUrl: 'app/app-views/homeView.html',
                controller: 'homeController'
            })
        /** Game */
            .state('game', {
                url: '/game',
                templateUrl: 'app/app-views/gameView.html',
                controller: 'gameController'
            })
        /** Scoreboard */
            .state('scoreboard', {
                url: '/scoreboard',
                templateUrl: 'app/app-views/scoreboardView.html',
                controller: 'scoreboardController'
            })

        /** Default */
        $urlRouterProvider.otherwise('/home');

    });