var Kalkulator = angular.module('KalkulatorService', [])
    .service('Kalkulator', function () {
        this.number = function (a) {
            return a * a;
        }
    })

    // var KalkulatorService = angular.module('KalkulatorService', [])
    // .factory('Kalkulator', function () {
    //     var test = {};
    //     test.broj = 0;
    //     test.add = function (a) {
    //         var result = 0;
    //         result = a * a;
    //         test.broj = result;
    //     }
    //     return test;
    // })