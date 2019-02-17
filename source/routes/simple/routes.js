angular.module('angularJSKurs')
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
            .when('/home', {
                templateUrl: './home/home.html',
                controller: 'HomeController'
            })
            .when('/phones', {
                templateUrl: './phones/phones.html',
                controller: 'PhoneController'
            })
            .when('/phones/:phoneId', {
                template: '<phone-detail></phone-detail>'
            })
            .otherwise({
                redirectTo: '/home'
            });
    });