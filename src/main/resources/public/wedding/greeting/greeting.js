angular.module('weddingApp')

    .component('greeting', {
        templateUrl: 'wedding/greeting/greeting.html',
        bindings: {
            greeting: '='
        }
    })

    .controller('greeting', function($http){
        var ctrl = this;
        ctrl.greeting = {};
        $http.get("/api/greeting") .success(function(response) {
            ctrl.greeting = response;
        });
    });