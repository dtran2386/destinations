// Require JS Module - Set with IFFE
module.exports = (function() {
    var appDirectives = angular.module('DestinationsAppDirectives', []);
    
    /////// => BEGIN WORLD MAP SVG IMPORT DIRECTIVE
    appDirectives.directive('svgMap', ['$compile', function ($compile) {
        return {
            restrict: 'A',
            templateUrl: 'resource/states.svg',
            link: function (scope, element, attrs) {   
            }
        };
    }]);
                              
}()); //<= END OF MODULE - SET OFF IFFE