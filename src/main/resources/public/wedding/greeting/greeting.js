function GreetingController($http){
    var ctrl = this;
    ctrl.greeting = {};
    $http.get("/api/greeting") .success(function(response) {
        ctrl.greeting = response;
    });
}

angular.module('weddingApp')
    .component('greeting', {
        templateUrl: 'wedding/greeting/greeting.html',
        controller: GreetingController,
        bindings: {
            greeting: '='
        }
    });