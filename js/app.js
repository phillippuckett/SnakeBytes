var app = angular.module('snakeBytes', ['ui.router']).config(function ($urlRouterProvider, $stateProvider) {
    $statePRovider
        .state('home', {
            template: 'homeTmpl.html',
            url: '/home'
        })
})