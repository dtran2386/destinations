// Require JS Module - Set with IFFE
module.exports = (function() {
    var appControllers = angular.module('DestinationsAppControllers', []);
    
    /////// => BEGIN HOME VIEW CONTROLLER
    appControllers.controller('HomeController', ['$scope', 'DestService', function ($scope, DestService) {
        // Code to Test View / Router
        //console.log('Home View Working');
        
        // Code to Test Connection to Factory
        //console.log(DestService.silento());
        
        // Code to Set Display with an Initial Value
        $scope.display = 'Select a State';
        // Code to Get Display Value from Factory - Cursor Hover - and Update Display
        $scope.return = function() {
            $scope.display = 'Hello ' + DestService.returnDisplay() + '!!!';
        };
        // console.log($scope.display);
        
    }]); //<= END OF HOME VIEW CONTROLLER
    
    
    
    /////// => BEGIN STATE VIEW CONTROLLER
    appControllers.controller('StatesController', ['$scope', '$routeParams', 'DestService', function ($scope, $routeParams, DestService) {
        // Code to test View / Router
        //console.log('State View Working');
        
        // Code to Test Connection to Factory
        //console.log(DestService.silento());
        
        // Code to Set Display with an Initial Value
        $scope.display = 'Select a City';
        // Code to Get Display Value from Factory - Cursor Hover - and Update Display
        $scope.return = function() {
            $scope.display = 'Hello ' + DestService.returnDisplay() + '!!!';
        };
        // console.log($scope.display);
        
        // Code to Set Specific URL extension for API Calls
        DestService.prepImageURL($routeParams.stateId);
        // console.log($routeParams.stateId);
        
        // Get Images from API for Select State
        $scope.images = DestService.getImages();
        //console.log($scope.images);
        
    }]); //<= END OF STATE VIEW CONTROLLER
    
    
    
    /////// => BEGIN CITY VIEW CONTROLLER
    appControllers.controller('CitiesController', ['$scope', '$routeParams', 'DestService', function ($scope, $routeParams, DestService) {
        // Code to test View / Router
        //console.log('City View Working');
        
        // Code to Test Connection to Factory
        //console.log(DestService.silento());
        
        // Code to Get Display Value from Factory - Cursor Hover
        $scope.display = DestService.returnDisplay();
        // console.log($scope.display);
        
        // Code to Pass Route Param for Image Prep
        DestService.prepImageURL($routeParams.cityId);
        //console.log($routeParams.cityId);
        
        // Code to Get Weather Array from Factory
        $scope.images = DestService.getImages();
        // console.log($scope.images);
        
        // Code to Get Weather Array from Factory
        $scope.weather = DestService.getWeather();
        // console.log($scope.weather);

    }]); //<= END OF CITY VIEW CONTROLLER

}()); //<= END OF MODULE - SET OFF IFFE