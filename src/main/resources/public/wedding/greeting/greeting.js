angular.module('weddingApp')
    .component('greeting', {
        templateUrl: 'wedding/greeting/greeting.html',
        controller: function($http){
                        var ctrl = this;
                        $http.get("/api/greeting").success(function(response) {
                            ctrl.greeting = response;
                        });
                    }
    });