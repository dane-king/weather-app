(function() {
    'use strict';
    var locationService=function($http){
        this.http=$http;
    };

    var parseLocationData=function(response){
        var location={};
        var city=response.data.city;
        location.city=city.charAt(0).toUpperCase() + city.substr(1).toLowerCase();
        location.state=response.data.state;
        return location;
    };

    locationService.prototype.getLocation=function(zip){
        return this.http.get('http://ziptasticapi.com/' + zip).then(parseLocationData);
    };

    angular.module('weather.app')
    .service('LocationService',locationService);
}());
