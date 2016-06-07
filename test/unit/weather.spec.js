(function() {

  'use strict';

  describe("WeatherController", function() {

    beforeEach(function() {
      // always load nova module
      module('weather.app');
    });

    var ctrl, scope, weatherService, expectedResponse;



    beforeEach(inject(function($controller, $rootScope, _WeatherService_) {
      scope = $rootScope.$new();
      weatherService = _WeatherService_;

      expectedResponse={data:{main: {temp: 56.83},
                              id: 4522411,
                              name: "Test City",
                              cod: 200
                            }
                          };


      spyOn(weatherService, 'getWeather').and.returnValue({
        then: function(response){ctrl.weather=expectedResponse.data;}
      });
      ctrl = $controller('WeatherController', {
        $scope: scope,
        WeatherService: _WeatherService_
      });

      ctrl = $controller('WeatherController as weatherCtrl', {
        $scope: scope
      });

    }));
    describe("Initialization", function() {
      it("should default to a temperature of 0", function() {
        expect(
          ctrl.getTemperature()).toEqual(0);
      });
      it("should default to a zip of 43068", function() {
        expect(
          ctrl.zip).toEqual('43068');
      });
    });

    describe("Get Weather", function() {
      beforeEach(function() {
        ctrl.zip = "11111";
        ctrl.getWeather();
      });
      it("should call getWeather with zip", function() {
        expect(weatherService.getWeather).toHaveBeenCalledWith('11111');
      });
      it("should set weather variable with response data", function() {
        expect(ctrl.weather).toEqual(expectedResponse.data);
      });
      it("should be able to get temperature", function () {
        expect(ctrl.getTemperature()).toEqual(56.83);
      });
      it("should be get city", function () {
        expect(ctrl.getLocation()).toEqual('Test City');
      });
    });
  });

})();
