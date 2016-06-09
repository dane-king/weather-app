(function() {
  var weatherService=function weatherService($http, $q){
    this.zip='43068';
    this.http=$http;
    this.q=$q;
    this.currentWeatherUrl="//api.openweathermap.org/data/2.5/weather?zip={zip},us&APPID=e3b993fb083535ce1b228a3370cd22a8&units=Imperial";
  };

  var addLocation=function addLocation(forecast) {
          var deferred = this.q.defer();
          if(navigator.geolocation){
              navigator.geolocation.getCurrentPosition(
                  function(position) {
                      forecast.location={longitude:position.coords.longitude,
                                        latitude:position.coords.longitude};
                      deferred.resolve(forecast);
                  },
                  function(error) { deferred.resolve(forecast); }
              );
          }else{
              return forecast;
          }
          return deferred.promise;
    };

  var parseWeatherData = function parseWeatherData(response){
    var forecast={};
    forecast.temperature=Math.round(response.data.main.temp);
    forecast.icon=response.data.weather[0].icon + '.png';
    forecast.city=response.data.name;
    return forecast;
    };


  weatherService.prototype.getWeather=function(zip){
    return this.http.get(this.currentWeatherUrl.replace('{zip}',zip)).then(parseWeatherData).then(addLocation.bind(this));
  };

  angular.module('weather.app')
  .service('WeatherService',weatherService);

})();
