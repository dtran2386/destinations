// Require JS Module - Set with IFFE
module.exports = (function() {
    var appFactory = angular.module('DestinationsAppFactory', []);
    
    /////// => BEGIN ANGULAR APP FACTORY
    appFactory.factory('DestService', function($http) {
        // FACRTORY SCOPE VARS
        let weather = [];
        let images = [];
        let display = '';
        let state = '';
        let xURL = '';
        let weatherHistory = [];
        let events = [];


    /////// => BEGIN RETURN FOR FACTORY FUNCTIONS / CLOSURES
        return {
            
            // Function to build a more specific url query for getty image api based on context.
            // Some results for specific states were a bit odd w/ this rule.
            prepImageURL: function(input) {
                if (input === state) {
                    xURL = 'State of '+ input;
                } else {
                    xURL = input + ', ' + state;
                }
                console.log(xURL);
            }, // <= END PREP IMAGE FUNCTION
            
            //<= BEGIN EVENT PROMISE
            getEvents: function() {
                $http({
                method: 'GET',
                url: 'https://api.foursquare.com/v2/venues/search?near=' + xURL + '&query=hotel&v=20150214&m=foursquare&client_secret=TRQU20MD3SYHGBJIVJPWXYPUGFDP0N2HKCVQNH3D2T0BBTXR&client_id=ODHLMSE0VVFCN0425B4KTOUGSSNJRNGDCY3O1SDYTHA1Y0HA&limit=7',
                }).then(function (response) {
//                    console.log(response);
                    for(let i = 0; i < response.data.response.venues.length; i++) {
                        events.push(response.data.response.venues[i]);
                        
                        response.data.response.venues[i].linkname = response.data.response.venues[i].name + ', ' + response.data.response.venues[i].location.city + ', ' + response.data.response.venues[i].location.state;
                    }
                    console.log(events);
                });
                return events;
            }, //<= END OF EVENT RETURN
            
            // Function to return weather array contents to controller.
            getWeather: function() {
                $http({
                    method: 'GET', 
                    url: 'http://api.openweathermap.org/data/2.5/weather?q=' + xURL +'&appid=1f2671239fb2a0b6556a93f5873da5b1'
                }).then(function (response) {
                    weather.push(response.data);
                });
                return weather;
            }, //<= END OF WEATHER RETURN
            
            
            // Function to return build image array with contextual "xURL" splice to controller.
            getImages: function() {
                $http({
                method: 'GET',
                url: 'https://api.gettyimages.com/v3/search/images/creative?fields=detail_set&phrase='+ xURL,
                    
                //url: 'https://api.gettyimages.com/v3/search/images/creative?fields=detail_set&phrase=kittens',    
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
                     url: 'http://api.worldweatheronline.com/premium/v1/weather.ashx?key=efa548e958834d0daf6173645160505&q='+ xURL +'&format=json&num_of_days=7'
                 }).then(function (response) {
                     weatherHistory.push(response.data.data);
                     console.log(response.data);
                     
                     return response.data.data;
                 }); 
            }, //<= END GET HISTORICAL WEATHER
            
            /// Clear API Arrays
            silento: function() {
                weather = [];
                images = [];
                weatherHistory = [];
                events = [];
                return 'API Arrays Cleared';
            } //<= END SILENTO TEST
            
        }; //<= END OF FACTORY CLOSURES
        
    }); //<= END OF FACTORY
    
}()); //<= END OF MODULE - SET OFF IFFE