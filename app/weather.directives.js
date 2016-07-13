(function() {
    'use strict';
    angular.module('weather.app').directive('enterZip',zipTemplate);
    function zipTemplate(){
        return {
            templateUrl:'tmpl/enter.zip.html'
        };
    }

}());
