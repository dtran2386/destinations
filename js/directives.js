// Require JS Module - Set with IFFE
module.exports = (function() {
    var appDirectives = angular.module('DestinationsAppDirectives', []);
    
    /////// => BEGIN HOME MAP SVG IMPORT DIRECTIVE
    // This directive Loads the Home View SVG map.
    // Code below also integrates ngscope and 'nav1' attribute to all class="state" paths in SVG.
    appDirectives.directive('svgWorld', ['$compile', function ($compile) {
        return {
            restrict: 'A',
            templateUrl: 'resource/home.svg',
            link: function (scope, element) {
                let statesArr = element[0].querySelectorAll('.states');
                angular.forEach(statesArr, function(state) {
                    let indState = angular.element(state);
                    indState.attr('nav1', '');
                    $compile(indState)(scope);
                });
            }
        };
    }]); //<= END HOME MAP SVG IMPORT DIRECTIVE
    
    
    /////// => BEGIN IND STATE MAP SVG IMPORT DIRECTIVE
    // This directive Loads the State View SVG map.
    // Code below also integrates ngscope and 'nav2' attribute to all class="city" paths in SVG.
    appDirectives.directive('svgState', ['$compile', '$routeParams', function ($compile, $routeParams) {
        return {
            restrict: 'A',
            templateUrl: 'resource/'+ $routeParams.stateId +'.svg',
            link: function (scope, element) {
                let citiesArr = element[0].querySelectorAll('.city');
                angular.forEach(citiesArr, function(city) {
                    let indCity = angular.element(city);
                    indCity.attr('nav2', '');
                    $compile(indCity)(scope);
                });
            }
        };
    }]); //<= END IND STATE MAP SVG IMPORT DIRECTIVE

    
    /////// => BEGIN HOME VIEW MOUSE-OVER DISPLAY FOR VIEW
    // This directive attaches mouse listeners to all nav1s on Map - This Powers CSS Hover State and Destination Name Display in view.
    // Direcetive updates 'Display' by sending Map Section Id from Hover to Factory for Retrieval by Controller.
    appDirectives.directive('nav1', ['$compile', 'DestService', function($compile, DestService) {
        return {
            restrict: 'A',
            scope: false,
            link: function (scope, element) {
                scope.record = function() {
                    DestService.setDisplay(scope.elementId);
                };
                element.attr('ng-mouseenter', 'return()');
                element.attr('ng-mouseover', 'record()');
                $compile(element)(scope);
            }
        };
    }]); //<= END NG-MOUSEOVER / NG-MOUSEENTER HOVER HOME VIEW DIRECTIVE
    
    
    /////// => BEGIN HOME VIEW CLICK-NAV DIRECTIVE
    // This directive attaches click listener to all nav1s on Map and routes to specific State on Click via splicing $locations.path with elementId.
    appDirectives.directive('nav1', ['$compile', '$location', 'DestService', function($compile, $location, DestService) {
        return {
            restrict: 'A',
            scope: true,
            link: function (scope, element) {
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
    }]); //<= END NG-CLICK-NAV HOME VIEW DIRECTIVE
    
    
    /////// => BEGIN STATE VIEW MOUSE-OVER DISPLAY
    // This directive attaches mouse listeners to all nav2s on Map - This Powers CSS Hover State and Destination Name Display in view.
    // Direcetive updates 'Display' by sending Map Section Id from Hover to Factory for Retrieval by Controller.
    appDirectives.directive('nav2', ['$compile', 'DestService', function($compile, DestService) {
        return {
            restrict: 'A',
            scope: false,
            link: function (scope, element) {
                scope.record = function() {
                    DestService.setDisplay(scope.elementId);
                };
                element.attr('ng-mouseenter', 'return()');
                element.attr('ng-mouseover', 'record()');
                //element.removeAttr('nav');
                $compile(element)(scope);
            }
        };
    }]); //<= END NG-MOUSEOVER / NG-MOUSEENTER HOVER STATE VIEW DIRECTIVE
    
    
    /////// => BEGIN STATE VIEW CLICK-NAV DIRECTIVE
    // This directive attaches click listener to all nav2 on Map and routes to specific State on Click via splicing $locations.path with elementId.
    appDirectives.directive('nav2', ['$compile', '$location', '$routeParams', function($compile, $location, $routeParams) {
        return {
            restrict: 'A',
            scope: true,
            link: function (scope, element) {
                scope.elementId = element.attr('id');
                scope.routeClick = function() {
                    $location.path($routeParams.stateId + '/' + scope.elementId);
                };
                element.attr('ng-click', 'routeClick()');
                element.removeAttr('nav2');
                $compile(element)(scope);
            }
        };
    }]);  //<= END NG-CLICK-NAV STATE VIEW DIRECTIVE
    
}()); //<= END OF MODULE - SET OFF IFFE

/* ------------------------------------------
Special thanks on the directives to:
tweededbadger and their excellent tut:
https://medium.com/@tweededbadger/tutorial-dynamic-data-driven-svg-map-with-angularjs-b112fdec421d#.rallul2jc
------------------------------------------ */