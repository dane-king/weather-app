(function() {

  'use strict';

  describe("Weather Service", function() {

      beforeEach(function() {
        module('weather.app');

      });

      var $rootScope,service, http, successPromise,
        responseData = {
          data: {
            weather: [{
              id: 803,
              main: "Clouds",
              description: "broken clouds",
              icon: "04d"
            }],
            main: {
              temp: 56.78
            },
            name: 'Test City'
          }
        };

    beforeEach(inject(function($injector) {

        $rootScope = $injector.get('$rootScope');
        service = $injector.get('WeatherService');
        http = $injector.get('$http');
        successPromise = jasmine.createSpy('spy');
        spyOn(http, 'get').and.returnValue({then: successPromise});
      }));


      it("should call http service when getWeather is called", function() {
        var weather = service.getWeather("11111");
        var expectedUrl = "//api.openweathermap.org/data/2.5/weather?zip=11111,us&APPID=e3b993fb083535ce1b228a3370cd22a8&units=Imperial";
        expect(http.get).toHaveBeenCalledWith(expectedUrl);
      });

      it("should parse response data to forecast", function() {
        var weather = service.getWeather("11111");
        var callbackFn=successPromise.calls.mostRecent().args[0];


        expect(callbackFn(responseData)).toEqual({temperature:56.78,city:'Test City', icon:'04d.png'});
      });
    });

})();
