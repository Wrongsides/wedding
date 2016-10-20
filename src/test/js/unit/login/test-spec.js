describe('component: heroDetail', function() {
    var $componentController;

    beforeEach(module('weddingApp'));
    beforeEach(inject(function(_$componentController_) {
        $componentController = _$componentController_;
    }));

    it('should expose a `hello world` object', function() {
        // Here we are passing actual bindings to the component
        var bindings = {message: {name: 'Hello World!'}};
        var ctrl = $componentController('helloWorld', null, bindings);

        expect(ctrl.message).toBeDefined();
        expect(ctrl.message.name).toBe('Hello World!');
    });
});