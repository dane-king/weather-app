(function() {
  var weatherController=function(WeatherService,LocationService){
      var vm=this;
      vm.forecast={
        temperature:0,
        description:'',
        icon:''
      };


      //default is reynoldsburg
      vm.zip="";


      vm.getLocation=function(){
          LocationService.getLocation(vm.zip).then(function(location){
              console.log(location);
              vm.location=location;
          });
      };

      vm.getWeather=function(){
          vm.forecast="";
          vm.location="";
          WeatherService.getWeather(vm.zip).then(function(forecast){
            vm.forecast=forecast;
            vm.getLocation();
          });
      };
  };
  angular.module('weather.app')
  .controller('WeatherController',weatherController);

})();
