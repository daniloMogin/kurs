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