(function() {
  var weatherService=function weatherService($http){
    this.zip='43068';
    this.http=$http;
    this.currentWeatherUrl="//api.openweathermap.org/data/2.5/weather?zip={zip},us&APPID=e3b993fb083535ce1b228a3370cd22a8&units=Imperial";
  };

  weatherService.prototype.getWeather=function(zip){
    return this.http.get(this.currentWeatherUrl.replace('{zip}',zip));
  };
  angular.module('weather.app')
  .service('WeatherService',weatherService);


})();
