let myApp = angular.module('myApp', ['ngRoute'])

myApp.config(function ($routeProvider) {
    $routeProvider.when('/owners', {
        templateUrl: 'views/owners.html'
    }).when('/', {
        templateUrl: 'views/pets.html'
    }).otherwise ({
        template: '<h1>404 Page not Found </h2>'
    })
});