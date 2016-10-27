
describe('component: greetingDetail', function() {
    var $httpBackend, $componentController;

    beforeEach(module('weddingApp'));
    beforeEach(inject(function(_$httpBackend_, _$componentController_) {
        $httpBackend = _$httpBackend_;
        $componentController = _$componentController_;
    }));

    it('should expose a `greeting` object', function() {

        $httpBackend.when('GET', '/api/greeting')
            .respond({ id:'12345', content:'Hello World!' });

        var ctrl = $componentController('greeting', $httpBackend);
        $httpBackend.flush();

        expect(ctrl.greeting).toBeDefined();
        expect(ctrl.greeting.id).toBe('12345');
        expect(ctrl.greeting.content).toBe('Hello World!');
    });
});