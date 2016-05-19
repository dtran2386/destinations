// Require JS Module - Set with IFFE
module.exports = (function() {
    var appFactory = angular.module('DestinationsAppFactory', []);
    
    /////// => BEGIN ANGULAR APP FACTORY
    appFactory.factory('DestService', function($http, $q) {
        //APIs -- IMAGES MOVED FOR USE AS NAVIGATIONAL CALL
        var weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=Miami,%20FL&appid=1f2671239fb2a0b6556a93f5873da5b1';
        
        // LOCAL STORE VARS
        let weather = [];
        let images = [];
        let display = '';
        let state = '';
        let xURL = '';
        let weatherHistory = [];
        let wiki= {};
        
    /////// => BEGIN WEATHER AJAX PROMISE
        $http({
            method: 'GET',
            url: weatherURL,
            }).then(function (response) {
/* -------------------------------------------
    Hold for Dylan            
            response.data.main.ftemp = Math.round(response.data.main.temp * (9/5) - 459.67);
            console.log(response.data);
            if (response.data.weather[0].description === "clear sky") {
                response.data.icon = "images/noun_446966_cc.png";
            } else if (response.data.weather[0].description === 'scattered clouds') {
                response.data.icon = 'images/noun_21526_cc.png';
            }
------------------------------------------- */
            weather.push(response.data);
        }); //<= END OF IMG PROMISE CHAIN
        
        
    /////// => BEGIN RETURN FOR FACTORY FUNCTIONS / CLOSURES
        return {
            
            // Function to build a more url query for getty image api based on context.
            // Some results for specific states were a bit odd w/ this rule.
            prepImageURL: function(input) {
                if (input === state) {
                    xURL = 'State of '+ input;
                } else {
                    xURL = input + ', ' + state;
                }
                console.log(xURL);
            }, // <= END PREP IMAGE FUNCTION
            
            // Function to return weather array contents to controller.
            getWeather: function() {
                return weather;
            }, //<= END OF WEATHER RETURN
            
            // Function to return build image array with contextual "xURL" splice to controller.
            getImages: function() {
                $http({
                method: 'GET',
                url: 'https://api.gettyimages.com/v3/search/images/creative?fields=detail_set&phrase=' + xURL,
                headers: {
                    'Api-Key': 'y4qp9xe6axaccvr33qhca9fh',
                    }
                }).then(function (response) {
                    angular.copy(response.data.images, images);
                });
                //console.log(images);
                return images;
            }, //<= END OF IMAGE RETURN
            
            // Function to set current state var - helper function to build xURL
            setState: function(input) {
                state = input;
                console.log(state);
            }, //<= END OF STATE SET
            
            // Function to return current State var - works with setState
            returnState: function() {
                return state;  
            }, //<= END OF STATE RETURN
            
            // Function to set current display var - works with returnDisplay
            setDisplay: function (input) {
                display = input;
            }, //<= END OF DISPLAY SET
            
            // Function to return current display var - works with setDisplay
            returnDisplay: function() {
                return display;
            }, //<= END OF DISPLAY RETURN
        
            getWeatherHistory: function() {
                 return $http({
                     method: 'GET',
                     url: 'http://api.worldweatheronline.com/premium/v1/weather.ashx?key=efa548e958834d0daf6173645160505&q=Denver&format=json&num_of_days=7',
                 }).then(function (response) {
                     weatherHistory.push(response.data.data);
                     console.log(response.data);
                     
                     return response.data.data;
                 }); //<= END OF HISTORICAL WEATHER PROMISE CHAIN
 //                return weatherHistory;
            },
            
            
            /// TEST Function for Calling in Controller to verify Link-up
            silento: function() {
                return 'Watch me WHIP! now watch me NAE NAE!';
            } //<= END SILENTO TEST
            
        }; //<= END OF FACTORY CLOSURES
        
    }); //<= END OF FACTORY
    
}()); //<= END OF MODULE - SET OFF IFFE