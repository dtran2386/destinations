var weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=Miami,%20FL&appid=1f2671239fb2a0b6556a93f5873da5b1';
//var weatherURL = 'https://api.meetup.com/2/events?key=4a7a120354a45344b4e623c33521d69&group_urlname=ny-tech&sign=true';


var app = angular.module('Destinations', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function ($routeProvider) {
   $routeProvider
      .when('/home', {
         controller: 'HomeController',
         templateUrl: 'templates/home.html'
      })
      .when('/states', {
         controller: 'StatesController',
         templateUrl: 'templates/states.html'
      })
      .when('/cities', {
         controller: 'CitiesController',
         templateUrl: 'templates/cities.html'
      })
      .otherwise({
         redirectTo: '/home'
      });
}]);

app.filter('fahrenheit', function () {
   return function (kelvin) {
       return Math.round(kelvin * (9 /5) - 459.67);
   };
});

app.filter('TitleCase', function () {
   return function (string) {
        // lowercase everything
        string = string.toLowerCase();
        // split each phrase by word
        var words = string.split(' ');
        // capitalize first letter of each word
        for (var i = 0; i < words.length; i++) {
        // each word...
            words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1);
        }
        // combine all words into a phrase again
        return words.join(' ');
}
});

app.controller('HomeController', ['$scope', 'SharedStuff', function ($scope, SharedStuff) {
    console.log('done');
    
}]);

app.controller('StatesController', ['$scope', 'SharedStuff', function ($scope, SharedStuff) {
//    console.log('done again');
    $scope.images = SharedStuff.getImages();

}]);

app.controller('CitiesController', ['$scope', 'SharedStuff', function ($scope, SharedStuff) {
//    console.log('done yet again');
    $scope.weather = SharedStuff.getWeather();
    $scope.images = SharedStuff.getImages();

}]);

app.factory('SharedStuff', function($http) {
    var weather = [];
    var images = [];
    
    $http({
        method: 'GET',
        url: weatherURL,
    }).then(function (response) {
//        response.data.main.ftemp = Math.round(response.data.main.temp * (9/5) - 459.67);
//        console.log(response.data);
//        if (response.data.weather[0].description === "clear sky") {
//            response.data.icon = "images/noun_446966_cc.png";
//        } else if (response.data.weather[0].description === 'scattered clouds') {
//            response.data.icon = 'images/noun_21526_cc.png';
//        }
        weather.push(response.data);
    });
    
    $http({
        method: 'GET',
        url: 'https://api.gettyimages.com/v3/search/images/creative?phrase=miami',
        headers: {
            'Api-Key': 'y4qp9xe6axaccvr33qhca9fh',
        }
    }).then(function (response) {
        for(var i = 0; i < response.data.images.length; i++) {
            images.push(response.data.images[i]);
        };
//        console.log(response);
    });
    
    return {
        getWeather: function () {
            return weather;
        },
        getImages: function () {
            return images;
        },
        
    };
});