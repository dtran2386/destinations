// Require JS Module - Set with IFFE
module.exports = (function() {
    var appFactory = angular.module('DestinationsAppFactory', []);
    
    /////// => BEGIN ANGULAR APP FACTORY
    appFactory.factory('DestService', function($http) {
        //APIs
        var weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=Miami,%20FL&appid=1f2671239fb2a0b6556a93f5873da5b1';
        // LOCAL STORE VARS
        let weather = [];
        let images = [];
        let display = '';
        let state = '';
        
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
        
        
        
    /*////// => BEGIN IMAGE AJAX PROMISE    
        $http({
            method: 'GET',
            url: 'https://api.gettyimages.com/v3/search/images/creative?fields=display_set&phrase=miami',
            headers: {
                'Api-Key': 'y4qp9xe6axaccvr33qhca9fh',
            }
        }).then(function (response) {
            for(let i = 0; i < response.data.images.length; i++) {
                images.push(response.data.images[i]);
                }
                //console.log(response);
        }); //<= END OF IMG PROMISE CHAIN
        */
        
        
    /////// => BEGIN RETURN FOR FACTORY FUNCTIONS / CLOSURES
        return {
            getWeather: function() {
                return weather;
            }, //<= END OF WEATHER RETURN
            
            getImages: function(input) {
                $http({
                method: 'GET',
                url: 'https://api.gettyimages.com/v3/search/images/creative?fields=detail_set&phrase=State of'+ input,
                headers: {
                    'Api-Key': 'y4qp9xe6axaccvr33qhca9fh',
                    }
                }).then(function (response) {
                    angular.copy(response.data.images, images);
                });
                console.log(input + " = input");
                return images;
            }, //<= END OF IMAGE RETURN
            
            setState: function(input) {
                state = input;
                console.log(state);
            }, //<= END OF STATE SET
            
            setDisplay: function (input) {
                display = input;
            }, //<= END OF DISPLAY SET
            
            
            returnDisplay: function() {
                return display;
            }, //<= END OF DISPLAY RETURN
            
            
            /// Function for Calling in Controller to verify Link-up
            silento: function() {
                return 'Watch me WHIP! now watch me NAE NAE!';
            }
            
        }; //<= END OF FACTORY CLOSURES
        
    }); //<= END OF FACTORY
    
}()); //<= END OF MODULE - SET OFF IFFE