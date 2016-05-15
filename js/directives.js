// Require JS Module - Set with IFFE
module.exports = (function() {
    var appDirectives = angular.module('DestinationsAppDirectives', []);
    
    /////// => BEGIN HOME MAP SVG IMPORT DIRECTIVE
    // This directive Loads the Home View SVG map.
    // Code below also integrates ngscope and 'nav' attribute to all class="state" paths in SVG.
    appDirectives.directive('svgWorld', ['$compile', function ($compile) {
        return {
            restrict: 'A',
            templateUrl: 'resource/home.svg',
            link: function (scope, element, attrs) {
                let statesArr = element[0].querySelectorAll('.states');
                angular.forEach(statesArr, function(state, key) {
                    let indState = angular.element(state);
                    indState.attr('nav1', '');
                    $compile(indState)(scope);
                });
            }
        };
    }]); //<= END HOME MAP SVG IMPORT DIRECTIVE
    
    
    
    /////// => BEGIN IND STATE MAP SVG IMPORT DIRECTIVE
    // This directive Loads the State View SVG map.
    // Code below also integrates ngscope and 'nav' attribute to all class="city" paths in SVG.
    appDirectives.directive('svgState', ['$compile', '$routeParams', function ($compile, $routeParams) {
        return {
            restrict: 'A',
            templateUrl: 'resource/'+ $routeParams.stateId +'.svg',
            link: function (scope, element, attrs) {
                let citiesArr = element[0].querySelectorAll('.city');
                angular.forEach(citiesArr, function(city, key) {
                    let indCity = angular.element(city);
                    indCity.attr('nav2', '');
                    $compile(indCity)(scope);
                });
            }
        };
    }]); //<= END IND STATE MAP SVG IMPORT DIRECTIVE

    
    /////// => BEGIN HOME VIEW MOUSE-OVER DISPLAY FOR VIEW
    // This directive attaches mouse listeners to Map to and Sends Map Section to Factory for Retrieval by Controller
    appDirectives.directive('nav1', ['$compile', 'DestService', function($compile, DestService) {
        return {
            restrict: 'A',
            scope: false,
            link: function (scope, element, attrs) {
                scope.record = function(elementId) {
                    DestService.setDisplay(scope.elementId);
                };
                element.attr('ng-mouseenter', 'return()');
                element.attr('ng-mouseover', 'record()');
                //element.removeAttr('nav');
                $compile(element)(scope);
            }
        };
    }]);
    
    /////// => BEGIN HOME VIEW CLICK-NAV DIRECTIVE
    // This directive attaches click listener to Map and routes to specific State on Click via elementId
    appDirectives.directive('nav1', ['$compile', '$location', 'DestService', function($compile, $location, DestService) {
        return {
            restrict: 'A',
            scope: true,
            link: function (scope, element, attrs) {
                scope.elementId = element.attr('id');
                scope.routeClick = function() {
                    DestService.setState(scope.elementId);
                    
                   $location.path(scope.elementId);
                };
                element.attr('ng-click', 'routeClick()');
                element.removeAttr('nav1');
                $compile(element)(scope);
            }
        };
    }]); //<= END CLICK-NAV DIRECTIVE
    
    
    /////// => BEGIN STATE VIEW MOUSE-OVER DISPLAY FOR VIEW
    // This directive attaches mouse listeners to Map to and Sends Map Section to Factory for Retrieval by Controller
    appDirectives.directive('nav2', ['$compile', 'DestService', function($compile, DestService) {
        return {
            restrict: 'A',
            scope: false,
            link: function (scope, element, attrs) {
                scope.record = function(elementId) {
                    DestService.setDisplay(scope.elementId);
                };
                element.attr('ng-mouseenter', 'return()');
                element.attr('ng-mouseover', 'record()');
                //element.removeAttr('nav');
                $compile(element)(scope);
            }
        };
    }]);
    
    /////// => BEGIN STATE VIEW CLICK-NAV DIRECTIVE
    // This directive attaches click listener to Map and routes to specific State on Click via elementId
    appDirectives.directive('nav2', ['$compile', '$location', '$routeParams', 'DestService', function($compile, $location, $routeParams, DestService) {
        return {
            restrict: 'A',
            scope: true,
            link: function (scope, element, attrs) {
                scope.elementId = element.attr('id');
                scope.routeClick = function() {
                    $location.path($routeParams.stateId + '/' + scope.elementId);
                };
                element.attr('ng-click', 'routeClick()');
                element.removeAttr('nav2');
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