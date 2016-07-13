(function() {
    'use strict';
    angular.module('weather.app').directive('enterZip',zipTemplate);
    function zipTemplate(){
        return {
            templateUrl:'app/tmpl/enter.zip.html'
        };
    }

}());
