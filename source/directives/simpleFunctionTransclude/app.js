angular.module('angularJSKurs', [])
    .controller('DirectiveController',
        function DirectiveController($scope) {
            $scope.contro = 'DirectiveController'
            $scope.korisnik = {
                name: 'Danilo',
                address: '21000 Novi Sad'
            };
            $scope.send = (message) => {
                console.log(` ========== message ========== `);
                console.log(message);
            }
        })
    .directive('kursDir', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
              'send': '&onSend'
            },
            templateUrl: 'template.html'
        };
    })