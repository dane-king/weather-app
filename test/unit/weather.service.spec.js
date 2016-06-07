(function() {

  'use strict';

  describe("Weather Service", function() {

    beforeEach(function() {
      module('weather.app');

    });

    var service, http, successPromise;

    beforeEach(inject(function($injector) {

      service = $injector.get('WeatherService');
      http = $injector.get('$http');
      successPromise=function(){

      };
      spyOn(http, 'get').and.returnValue(angular.noop);

    }));
    it("should call http service when getWeather is called", function() {
      var weather = service.getWeather("11111");
      var expectedUrl="//api.openweathermap.org/data/2.5/weather?zip=11111,us&APPID=e3b993fb083535ce1b228a3370cd22a8&units=Imperial";
      expect(http.get).toHaveBeenCalledWith(expectedUrl);
    });

  });

})();
