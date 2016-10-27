
describe('component: greetingDetail', function() {
    var $httpBackend, $componentController;

    beforeEach(module('weddingApp'));
    beforeEach(inject(function(_$httpBackend_, _$componentController_) {
        $httpBackend = _$httpBackend_;
        $componentController = _$componentController_;
    }));

    it('should expose a `greeting` object', function() {

        $httpBackend.when('GET', '/api/greeting')
            .respond({ greeting: { id:'12345', name:'Hello World!' }});

        var ctrl = $componentController('greeting', $httpBackend);
        $httpBackend.flush();

        expect(ctrl.greeting.greeting).toBeDefined();
        expect(ctrl.greeting.greeting.id).toBe('12345');
        expect(ctrl.greeting.greeting.name).toBe('Hello World!');
    });
});