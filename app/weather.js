(function() {
  var weatherController=function(WeatherService){
      var vm=this;
      vm.weather={};

      vm.getTemperature=function(){
        console.log(vm.weather);
        return vm.weather.main?vm.weather.main.temp:0;
      };

      vm.getLocation=function(){
        return vm.weather.name;
      };
      
      //default is reynoldsburg
      vm.zip="43068";

      vm.getWeather=function(){
          WeatherService.getWeather(vm.zip).then(
            function(response){
                vm.weather=response.data;
            });
      };
  };
  angular.module('weather.app')
  .controller('WeatherController',weatherController);

})();
