angular.module('angularJSKurs', [])
    .controller('DirectiveController',
        function ($scope) {
            $scope.korisnik = {
                name: 'Danilo',
                address: '21000 Novi Sad'
            };
        })
    .controller('DirectiveController1',
        function DirectiveController1($scope) {
            $scope.korisnik = {
                name: 'Mirko',
                address: '21000 Novi Sad'
            };
        })
    .directive('kursDir', function () {
        return {
            restrict: 'AEMC',
            replace: true,
            template: `
                <div>
                    Name: {{korisnik.name}}
                    <br>
                    Address: {{korisnik.address}}
                </div>
            `
        };
    })