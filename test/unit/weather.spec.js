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



      spyOn(weatherService, 'getWeather').and.returnValue({
        then: function(){
          ctrl.forecast.icon='abc.png';
          ctrl.forecast.temperature=56.83;
          ctrl.forecast.city='Test City';
        }
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
        expect(ctrl.forecast.temperature).toEqual(0);
      });
      it("should default to a zip of blank", function() {
        expect(ctrl.zip).toEqual('');
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
        expect(ctrl.forecast).toEqual({temperature:56.83,city:'Test City',description:'',icon:'abc.png'});
      });
      it("should be able to get temperature", function () {
        expect(ctrl.forecast.temperature).toEqual(56.83);
      });
      it("should be get city", function () {
        expect(ctrl.forecast.city).toEqual('Test City');
      });
      it("icon", function () {
        expect(ctrl.forecast.icon).toEqual('abc.png');
      });
    });
  });

})();
