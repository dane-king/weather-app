(function() {
  var weatherService=function weatherService($http){
    this.zip='43068';
    this.http=$http;
    this.currentWeatherUrl="//api.openweathermap.org/data/2.5/weather?zip={zip},us&APPID=e3b993fb083535ce1b228a3370cd22a8&units=Imperial";
  };

  function parseWeatherData(response){
    var forecast={};
    forecast.temperature=response.data.main.temp;
    forecast.icon=response.data.weather[0].icon + '.png';
    forecast.city=response.data.name;
    return forecast;
  }


  weatherService.prototype.getWeather=function(zip){
    return this.http.get(this.currentWeatherUrl.replace('{zip}',zip)).then(parseWeatherData);
  };

  angular.module('weather.app')
  .service('WeatherService',weatherService);

})();
