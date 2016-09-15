angular.module('snake')
    .service('mainSvc', function ($state, $http) {

        this.createScore = function (score) {
            console.log('mainSvc.createScore running');
            // return $http.post('/api/scores', score).then(function (scoreData) {
            //     console.log('DATA', scoreData);
            //     return scoreData.data;
            // })
        }

        this.getScore = function () {
            console.log('mainSvc.getScore running');
            // return $http.get('/api/scores')
            //     .then(function (scoreData) {
            //         console.log('DATA', scoreData);
            //         return scoreData.data;
            //     })
        }

    });