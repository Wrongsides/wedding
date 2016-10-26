
describe('component: greetingDetail', function() {
    var $componentController;

    beforeEach(module('weddingApp'));
    beforeEach(inject(function(_$componentController_) {
        $componentController = _$componentController_;
    }));

    it('should expose a `greeting` object', function() {
        var bindings = { greeting: { id:'12345', name:'Hello World!' }};
        var ctrl = $componentController('greeting', null, bindings);

        expect(ctrl.greeting).toBeDefined();
        expect(ctrl.greeting.id).toBe('12345');
        expect(ctrl.greeting.name).toBe('Hello World!');
    });
});