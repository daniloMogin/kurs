var myApp = angular.module('angularJSKurs', ['CalculatorService']);
myApp.controller('CalculatorController', function ($scope, Calculator) {

    $scope.findSquare = function () {
        $scope.answer = Calculator.square($scope.number);
    }
});