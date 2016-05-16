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
    appControllers.controller('StatesController', ['$scope', '$routeParams', 'DestService', function ($scope, $routeParams, DestService) {
        // Code to test View / Router
        console.log('State View Working');
        
        // Code to Test Factory Link
        console.log(DestService.silento());
        DestService.setState($routeParams);
        console.log($routeParams.stateId);
        $scope.images = DestService.getImages();
        
        $scope.weatherHistory = DestService.getWeatherHistory();
        
        var data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
              {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
              },
              {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
              }
            ]
          };
        
        // Get the context of the canvas element we want to select
        var ctx = document.getElementById("myChart").getContext("2d");

        // Instantiate a new chart using 'data' (defined below)
        var myChart = new Chart(ctx).Line(data);
        
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