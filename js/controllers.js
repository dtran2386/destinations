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
//        $scope.images = DestService.getImages();
//        
//        //$scope.weatherHistory = DestService.getWeatherHistory();
//        
//        DestService.getWeatherHistory().then(function (history) {
////            console.log(history.ClimateAverages[0].month);
//            var maxTemp = [];
//            var minTemp = [];
//            for (var i = 0; i < history.ClimateAverages[0].month.length; i++) {
//                maxTemp.push(history.ClimateAverages[0].month[i].absMaxTemp_F);
//                minTemp.push(history.ClimateAverages[0].month[i].avgMinTemp_F);
//            }// end for loop
//            // render the graph
//            var data = {
//            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
//            datasets: [
//              {
//                label: "Max Temperatures",
//                fillColor: "rgba(200,0,0,0.2)",
//                strokeColor: "rgba(200,0,0,1)",
//                pointColor: "rgba(200,0,0,1)",
//                pointStrokeColor: "#fff",
//                pointHighlightFill: "#fff",
//                pointHighlightStroke: "rgba(220,220,220,1)",
//                data: maxTemp,
//              },
//              {
//                label: "Min Temperatures",
//                fillColor: "rgba(11,61,113,0.3)",
//                strokeColor: "rgba(11,61,113,1)",
//                pointColor: "rgba(11,61,113,1)",
//                pointStrokeColor: "#fff",
//                pointHighlightFill: "#fff",
//                pointHighlightStroke: "rgba(151,187,205,1)",
//                data: minTemp,
//              },
//            ]
//          };
//        
//        // Get the context of the canvas element we want to select
//        var ctx = document.getElementById("myChart").getContext("2d");
//
//        // Instantiate a new chart using 'data' (defined below)
//        var myChart = new Chart(ctx).Line(data);
//        });
        
        
        
    }]); //<= END OF STATE VIEW CONTROLLER
    
    
    /////// => BEGIN CITY VIEW CONTROLLER
    appControllers.controller('CitiesController', ['$scope', 'DestService', function ($scope, DestService) {
        // Code to test View / Router
        console.log('City View Working');
        
        // Code to Test Factory Link
        console.log(DestService.silento());
        
        
        $scope.weather = DestService.getWeather();
        $scope.images = DestService.getImages();
        
                $scope.images = DestService.getImages();
        
        //$scope.weatherHistory = DestService.getWeatherHistory();
        
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
    }]); //<= END OF CITY VIEW CONTROLLER

}()); //<= END OF MODULE - SET OFF IFFE