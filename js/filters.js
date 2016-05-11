// Require JS Module - Set with IFFE
module.exports = (function() {
    var appFilters = angular.module('DestinationsAppFilters', []);
    
    appFilters.filter('fahrenheit', function () {
        return function (kelvin) {
            return Math.round(kelvin * (9 /5) - 459.67);
        };
    }); //<= END OF FAHRENHEIT FILTER
    
    appFilters.filter('TitleCase', function () {
        return function (string) {
            // lowercase everything
            string = string.toLowerCase();
            // split each phrase by word
            let words = string.split(' ');
            // capitalize first letter of each word
            for (let i = 0; i < words.length; i++) {
                // each word...
                words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1);
            } //<= END FOR LOOP
            // combine all words into a phrase again
            return words.join(' ');
        }; //<= END RETURN
    }); //<= END OF TITLECASE FILTER
    
}()); //<= END OF MODULE - SET OFF IFFE