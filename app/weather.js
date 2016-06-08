(function() {
  var weatherController=function(WeatherService,$timeout){
      var vm=this;
      vm.forecast={
        temperature:0,
        city:'',
        description:'',
        icon:''
      };


      //default is reynoldsburg
      vm.zip="";


      vm.getWeather=function(){
          WeatherService.getWeather(vm.zip).then(function(forecast){
            console.log('forecast is ', forecast);
            vm.forecast=forecast;
          });
      };
  };
  angular.module('weather.app')
  .controller('WeatherController',weatherController);

})();
