angular.module('starter.services', [])

.filter('fromNow', ['$window', function ($window) {
    return function (dateString) {
        return $window.moment(new Date(dateString)).fromNow()
    };
}])