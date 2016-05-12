// Require JS Module - Set with IFFE
module.exports = (function() {
    var appDirectives = angular.module('DestinationsAppDirectives', []);
    
    /////// => BEGIN HOME MAP SVG IMPORT DIRECTIVE
    // This directive Loads the Home View SVG map.
    // Code below also integrates ngscope and 'nav' attribute to all class="state" paths in SVG. 
    appDirectives.directive('svgMap', ['$compile', function ($compile) {
        return {
            restrict: 'A',
            templateUrl: 'resource/states.svg',
            link: function (scope, element, attrs) {
                let statesArr = element[0].querySelectorAll('.state');
                angular.forEach(statesArr, function(state, key) {
                    let indState = angular.element(state);
                    indState.attr('nav', '');
                    //indState.attr('ng-click', 'clickId()');
                    $compile(indState)(scope);
                });
            }
        };
    }]); //<= END HOME MAP SVG IMPORT DIRECTIVE
    
/*    
    
    /////// => BEGIN CLICK-NAV DIRECTIVE
    // This directive gathers elements with 'nav' attibute, applies ng-click and sets / runs specified function on click
    appDirectives.directive('nav', ['$compile', function($compile) {
        return {
            restrict: 'A',
            scope: true,
            link: function (scope, element, attrs) {
                scope.elementId = element.attr('id');
                scope.stateClick = function() {
                    alert(scope.elementId);
                };
                element.attr('ng-click', 'stateClick()');
                element.removeAttr('nav');
                $compile(element)(scope);
            }
        };
    }]); //<= END CLICK-NAV DIRECTIVE
*/
    
////// TEST NAVIGATION via $Location
    
    /////// => BEGIN CLICK-NAV DIRECTIVE
    // This directive gathers elements with 'nav' attibute, applies ng-click and sets / runs specified function on click
    appDirectives.directive('nav', ['$compile', '$location', function($compile, $location) {
        return {
            restrict: 'A',
            scope: true,
            link: function (scope, element, attrs) {
                scope.elementId = element.attr('id');
                scope.stateClick = function() {
                   $location.path(scope.elementId);
                    
                    //alert(scope.elementId);
                };
                element.attr('ng-click', 'stateClick()');
                element.removeAttr('nav');
                $compile(element)(scope);
            }
        };
    }]); //<= END CLICK-NAV DIRECTIVE
    
    
}()); //<= END OF MODULE - SET OFF IFFE

/* ------------------------------------------
Special thanks on the directives to:
tweededbadger and their excellent tut:
https://medium.com/@tweededbadger/tutorial-dynamic-data-driven-svg-map-with-angularjs-b112fdec421d#.rallul2jc
------------------------------------------ */