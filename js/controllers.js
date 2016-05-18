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
        
        DestService.getWeatherHistory().then(function (history) {
 //            console.log(history.ClimateAverages[0].month);
             var maxTemp = [];
             var minTemp = [];
             for (var i = 0; i < history.ClimateAverages[0].month.length; i++) {
                 maxTemp.push(history.ClimateAverages[0].month[i].absMaxTemp_F);
                 minTemp.push(history.ClimateAverages[0].month[i].avgMinTemp_F);
             }// end for loop
             // render the graph
             var data = {
             labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
             datasets: [
               {
                 label: "Max Temperatures",
                 fillColor: "rgba(200,0,0,0.2)",
                 strokeColor: "rgba(200,0,0,1)",
                 pointColor: "rgba(200,0,0,1)",
                 pointStrokeColor: "#fff",
                 pointHighlightFill: "#fff",
                 pointHighlightStroke: "rgba(220,220,220,1)",
                 data: maxTemp,
               },
               {
                 label: "Min Temperatures",
                 fillColor: "rgba(11,61,113,0.3)",
                 strokeColor: "rgba(11,61,113,1)",
                 pointColor: "rgba(11,61,113,1)",
                 pointStrokeColor: "#fff",
                 pointHighlightFill: "#fff",
                 pointHighlightStroke: "rgba(151,187,205,1)",
                 data: minTemp,
               },
             ]
           };
         
         // Get the context of the canvas element we want to select
         var ctx = document.getElementById("myChart").getContext("2d");
 
         // Instantiate a new chart using 'data' (defined below)
         var myChart = new Chart(ctx).Line(data);
         });
        
        
        // Code to get Foursquare data
        $scope.events = DestService.getEvents();

    }]); //<= END OF CITY VIEW CONTROLLER

}()); //<= END OF MODULE - SET OFF IFFE