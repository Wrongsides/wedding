function HeroDetailController() {
    var ctrl = this;
}

angular.module('weddingApp').component('helloWorld', {
    controller: HeroDetailController,
    bindings: {
        message: '='
    }
});