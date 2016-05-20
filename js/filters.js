// Require JS Module - Set with IFFE
module.exports = (function() {
    var appFilters = angular.module('DestinationsAppFilters', []);
    
    // Filter to Present Temperatures as Fahrenheit
    appFilters.filter('fahrenheit', function () {
        return function (kelvin) {
            return Math.round(kelvin * (9 /5) - 459.67);
        };
    }); //<= END OF FAHRENHEIT FILTER
    
    // Filter to Prep Strings as Proper Nouns
    appFilters.filter('TitleCase', function () {
        return function (string) {
            string = string.toLowerCase();
            let words = string.split(' ');
            
            // Loop and Capitalize First Letter of Words
            for (let i = 0; i < words.length; i++) {
                // each word...
                words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1);
            }
            return words.join(' ');
        };
    }); //<= END OF TITLECASE FILTER
    
}()); //<= END OF MODULE - SET OFF IFFE