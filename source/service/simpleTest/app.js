var angularJSKurs = angular.module('angularJSKurs', ['KalkulatorService']);

// angularJSKurs.service('Kalkulator', function () {
//     this.add = function (a) {
//         return a * a;
//     }
// })

angularJSKurs.controller('CustomCtrl',
    function ($scope, Kalkulator) {
        $scope.add = function () {
            $scope.rezultat = Kalkulator.add($scope.broj)
        }

        
        // Kalkulator.add(12);
        
        // $scope.add = function () {
        //     $scope.rezultat = Kalkulator.broj;
        // }
    })