angular.module('angularJSKurs', [])
    .controller('DirectiveController',
        function DirectiveController($scope) {
            $scope.korisnik = {
                name: 'Danilo',
                address: '21000 Novi Sad'
            };
        })
    .directive('kursDir', function () {
        return {
            restrict: 'AECM',
            replace: true,
            templateUrl: 'template.html'
        };
    })