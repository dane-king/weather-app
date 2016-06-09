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
            vm.forecast=forecast;
            console.log('forecast is ', forecast);
          });
      };
  };
  angular.module('weather.app')
  .controller('WeatherController',weatherController);

})();
