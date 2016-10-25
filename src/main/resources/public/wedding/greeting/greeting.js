function GreetingDetailController() {

}

angular.module('weddingApp').component('greetingDetail', {
    templateUrl: 'wedding/greeting/greetingDetail.html',
    controller: GreetingDetailController,
    bindings: {
        greeting: '='
    }
});