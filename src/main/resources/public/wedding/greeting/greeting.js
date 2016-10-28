angular.module('weddingApp')

.component('greeting', {
    templateUrl: 'wedding/greeting/greeting.html',
    controller: function($http){
                    var ctrl = this;
                    $http.get("/api/greeting").then(function successCallback(response) {
                        ctrl.greeting = response.data;
                    }, function errorCallback(response) {
                        ctrl.greeting = {id: "0", content: "Error"};
                    });
                }
});