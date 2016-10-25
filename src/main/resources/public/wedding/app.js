angular.module('weddingApp', [ 'ngRoute' ])
    .config(function($routeProvider, $httpProvider) {
        $routeProvider.when('/', {
            templateUrl : 'wedding/greeting/greeting.html',
            controller : 'GreetingCtrl as ctrl'
        }).when('/login', {
            templateUrl : 'wedding/login/login.html',
            controller : 'navigation'
        }).otherwise('/');

        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

    })
    .controller('GreetingCtrl', function($http){
        var ctrl = this;
        ctrl.greeting = {};
        $http.get("/api/greeting") .success(function(response) {
            ctrl.greeting = response;
            console.log(ctrl.greeting.content)
        });
    });