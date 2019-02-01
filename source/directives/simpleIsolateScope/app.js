angular.module('angularJSKurs', [])
    .controller('DirectiveController',
        function ($scope) {
            $scope.danilo = {
                name: 'Danilo',
                address: '21000 Novi Sad'
            };
            $scope.mirko = {
                name: 'Mirko',
                address: '21000 Novi Sad'
            };
        })
    .directive('kursDir', function () {
        return {
            restrict: 'E',
            scope: {
                informacije: '=info'
            },
            templateUrl: 'template.html'
        };
    })