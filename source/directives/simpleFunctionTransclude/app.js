angular.module('angularJSKurs', [])
    .controller('DirectiveController',
        function DirectiveController($scope, $location, $http) {
            $scope.contro = 'DirectiveController';
            $scope.myUrl = $location.absUrl();
            $scope.korisnik = {
                name: 'Danilo',
                address: '21000 Novi Sad'
            };
            $scope.send = (message) => {
                console.log(` ========== message ========== `);
                console.log(message);
            };

            $scope.getJson = $http.get('https://api.myjson.com/bins/y0p5s').then(function (response) {
                $scope.myWelcome = response.data;
                console.log(`response`);
                console.log(response);
                
            });
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