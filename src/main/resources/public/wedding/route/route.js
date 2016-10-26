angular.module('weddingApp', [ 'ngRoute' ])
    .config(function($routeProvider, $httpProvider) {
        $routeProvider.when('/', {
            templateUrl : 'wedding/route/home.html'
        }).when('/login', {
            templateUrl : 'wedding/login/login.html',
            controller : 'login'
        }).otherwise('/');

        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

    });