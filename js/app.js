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
    
// Requirements
// 2/3 routes
// 1/2 directives
// 1 directive can be just a templateUrl for code re-use
// 1 directive needs to do some javascript (event if it's just elem.css({}) in the link function)
// [Bonus] Use Firebase or an API
// This should take a back seat to making a solid project with angular
// [Bonus 2] Make it look nice! Styling is important to employers. It's important to practice. Feel free to Google for 'inspiration' to mimic.