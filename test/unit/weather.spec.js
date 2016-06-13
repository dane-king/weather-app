(function() {

  'use strict';

  describe("WeatherController", function() {

    beforeEach(function() {
      // always load nova module
      module('weather.app');
    });

    var ctrl, scope, weatherService,locationService, expectedResponse;



    beforeEach(inject(function($controller, $rootScope, _WeatherService_,_LocationService_) {
      scope = $rootScope.$new();
      weatherService = _WeatherService_;
      locationService = _LocationService_;

      spyOn(locationService,'getLocation').and.returnValue({
         then:function(){
             ctrl.location={};
             ctrl.location.country="US";
             ctrl.location.state="OH";
             ctrl.location.city="Reynoldsburg";
         }
      });

      spyOn(weatherService, 'getWeather').and.returnValue({
        then: function(){
          ctrl.forecast.icon='abc.png';
          ctrl.forecast.temperature=56.83;
          ctrl.forecast.city='Test City';
        }
      });

      ctrl = $controller('WeatherController', {
        $scope: scope,
        WeatherService: _WeatherService_,
        LocationService:_LocationService_
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
    describe("Get Location", function () {
        beforeEach(function() {
          ctrl.zip = "11111";
          ctrl.getLocation();
        });
        it("should call getLocation with zip", function() {
          expect(locationService.getLocation).toHaveBeenCalledWith('11111');
        });
        it("should set location variable with response data", function() {
          expect(ctrl.location).toEqual({ country: 'US', state: 'OH', city: 'Reynoldsburg' });
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
