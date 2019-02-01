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
            restrict: 'A',
            templateUrl: function (elem, attr) {
                console.log(`elem`);
                console.log(elem);
                console.log(`attr`);
                console.log(attr);
                return 'template' + attr.type + '.html';
            }
        }
    });