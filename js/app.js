var snakeBytes = angular.module('snakeBytes', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'js/routes/home/homeTmpl.html',
                controller: 'homeCtrl'
            })
            .state('game', {
                url: '/gameplay',
                templateUrl: 'js/routes/game/gameTmpl.html',
                controller: 'gameCtrl'
            })
            .state('options', {
                url: '/options',
                templateUrl: 'js/routes/options/optionsTmpl.html',
                controller: 'optionsCtrl'
            })
            .state('scoreboard', {
                url: '/scoreboard',
                templateUrl: 'js/routes/scoreboard/scoreboardTmpl.html',
                controller: 'scoreboardCtrl'
            })
        $urlRouterProvider.otherwise('/home');
        
    });

