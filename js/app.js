'use strict'
/// REQUIRE JS STATEMENTS _ ANGULAR MODUELS IN USE
require('./factory');
require('./controllers');
require('./filters');
require('./directives');

////// => BEGIN ANGUALR APP
var app = angular.module('Destinations',[
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap',
    'DestinationsAppFactory',
    'DestinationsAppControllers',
    'DestinationsAppFilters',
    'DestinationsAppDirectives',
    ]); //<= END ANGAPP DEPENDANCIES


////// => SETUP ANGULAR ROUTER
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
        controller: 'HomeController',
        templateUrl: 'templates/home.html'
    }).when('/:stateId', {
        controller: 'StatesController',
        templateUrl: 'templates/states.html'
    }).when('/:stateId/:cityId', {
        controller: 'CitiesController',
        templateUrl: 'templates/cities.html'
    }).otherwise({
        redirectTo: '/home'
    });
    //console.log('Router Hot');
}]); //<= END ANGULAR ROUTER




