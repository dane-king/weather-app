(function() {
    'use strict';
    describe("Location Service", function () {
        var service, http, successPromise,
        responseData = {data:{"country":"US","state":"OH","city":"REYNOLDSBURG"}};
        beforeEach(function() {
            module('weather.app');
        });

        beforeEach(inject(function($injector) {
            service = $injector.get('LocationService');
            http = $injector.get('$http');
            successPromise = jasmine.createSpy('spy',angular.noop);
            spyOn(http, 'get').and.returnValue({then: successPromise});

        }));

        it("should have service defined", function () {
            service.getLocation("45601");
            expect(http.get).toHaveBeenCalledWith("http://ziptasticapi.com/45601");
        });

        it("should parse response data to forecast", function() {
          var weather = service.getLocation("11111");
          var callbackFn=successPromise.calls.mostRecent().args[0];
          expect(callbackFn(responseData)).toEqual({city:'Reynoldsburg',state:'OH'});
        });
    });
})();
