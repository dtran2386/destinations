// Require JS Module - Set with IFFE
module.exports = (function() {
    var appControllers = angular.module('DestinationsAppControllers', []);
    
    /////// => BEGIN HOME VIEW CONTROLLER
    appControllers.controller('HomeController', ['$scope', 'DestService', function ($scope, DestService) {
        // Code to test View / Router
        console.log('Home View Working');
        
        // Code to Test Factory Link
        console.log(DestService.silento());
        

    }]); //<= END OF HOME VIEW CONTROLLER
    
    
    
    /////// => BEGIN STATE VIEW CONTROLLER
    appControllers.controller('StatesController', ['$scope', 'DestService', function ($scope, DestService) {
        // Code to test View / Router
        console.log('State View Working');
        
        // Code to Test Factory Link
        console.log(DestService.silento());
        

        $scope.images = DestService.getImages();
    }]); //<= END OF STATE VIEW CONTROLLER
    
    
    
    /////// => BEGIN CITY VIEW CONTROLLER
    appControllers.controller('CitiesController', ['$scope', 'DestService', function ($scope, DestService) {
        // Code to test View / Router
        console.log('City View Working');
        
        // Code to Test Factory Link
        console.log(DestService.silento());
        
        
        $scope.weather = DestService.getWeather();
        $scope.images = DestService.getImages();
    }]); //<= END OF CITY VIEW CONTROLLER

}()); //<= END OF MODULE - SET OFF IFFE