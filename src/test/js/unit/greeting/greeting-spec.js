
describe('component: greeting', function() {
    var $httpBackend, $componentController;

    beforeEach(module('weddingApp'));
    beforeEach(inject(function(_$httpBackend_, _$componentController_) {
        $httpBackend = _$httpBackend_;
        $componentController = _$componentController_;
    }));

    it('should expose a `greeting` object with `Hello World!` content from a successful request', function() {

        $httpBackend.when('GET', "/api/greeting")
            .respond(200, { id:'12345', content:'Hello World!' });

        var ctrl = $componentController('greeting', $httpBackend);
        $httpBackend.flush();

        expect(ctrl.greeting).toBeDefined();
        expect(ctrl.greeting.id).toBe('12345');
        expect(ctrl.greeting.content).toBe('Hello World!');
    });

    it('should expose an `greeting` object with `Error` content from a server error', function() {

        $httpBackend.when('GET', "/api/greeting")
            .respond(500);

        var ctrl = $componentController('greeting', $httpBackend);
        $httpBackend.flush();

        expect(ctrl.greeting).toBeDefined();
        expect(ctrl.greeting.id).toBe('0');
        expect(ctrl.greeting.content).toBe('Error');
    });
});