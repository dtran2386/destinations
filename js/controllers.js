// Require JS Module - Set with IFFE
module.exports = (function() {
    var appControllers = angular.module('DestinationsAppControllers', []);
    
    /////// => BEGIN HOME VIEW CONTROLLER
    appControllers.controller('HomeController', ['$scope', 'DestService', function ($scope, DestService) {
        // Code to test View / Router
        //console.log('Home View Working');
        // Code to Test Factory Link
        //console.log(DestService.silento());
        
        // Code to Display Map Section ID from Cursor Hover
        $scope.display = 'Select a State';
        $scope.return = function() {
            $scope.display = DestService.returnDisplay();
        };
        
    }]); //<= END OF HOME VIEW CONTROLLER
    
    
    
    /////// => BEGIN STATE VIEW CONTROLLER
    appControllers.controller('StatesController', ['$scope', '$routeParams', 'DestService', function ($scope, $routeParams, DestService) {
        // Code to test View / Router
        //console.log('State View Working');
        // Code to Test Factory Link
        //console.log(DestService.silento());
        
        // Code to Set Specific URL extension for API Calls
        DestService.prepImageURL($routeParams.stateId);
        
        // Get Images from API for Select State
        $scope.images = DestService.getImages();
        //console.log($scope.images);
        
        $scope.display = 'Select a City';
        $scope.return = function() {
            $scope.display = DestService.returnDisplay();
        };
    }]); //<= END OF STATE VIEW CONTROLLER
    
    
    
    /////// => BEGIN CITY VIEW CONTROLLER
    appControllers.controller('CitiesController', ['$scope', '$routeParams', 'DestService', function ($scope, $routeParams, DestService) {
        // Code to test View / Router
        console.log('City View Working');
        // Code to Test Factory Link
        //console.log(DestService.silento());
        DestService.prepImageURL($routeParams.cityId);
        console.log($routeParams.cityId);
        
        $scope.weather = DestService.getWeather();
        $scope.images = DestService.getImages();
    }]); //<= END OF CITY VIEW CONTROLLER

}()); //<= END OF MODULE - SET OFF IFFE