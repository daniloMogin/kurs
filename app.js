// Definisanje `angularjsKurs` modula https://api.myjson.com/bins/y0p5s
var angularjsKurs = angular.module('angularjsKurs', []);

// Definisanje `AngularJSKursController` kontrolera u `angularjsKurs` modulu
angularjsKurs.controller(
  'AngularJSKursController',
  function AngularJSKursController($scope) {
    $scope.phones = [
      {
        name: 'Nexus S',
        snippet: 'Fast just got faster with Nexus S.'
      },
      {
        name: 'Motorola XOOM™ with Wi-Fi',
        snippet: 'The Next, Next Generation tablet.'
      },
      {
        name: 'MOTOROLA XOOM™',
        snippet: 'The Next, Next Generation tablet.'
      }
    ];
    $scope.name = 'world';
  }
);
angularjsKurs.controller(
  'AngularJSKursControllerNoviScope',
  function AngularJSKursController($scope) {
    $scope.phonesNewScope = [
      {
        name: 'Nexus S DOIT',
        snippet: 'Fast just got faster with Nexus S.'
      },
      {
        name: 'Motorola XOOM™ with Wi-Fi DOIT',
        snippet: 'The Next, Next Generation tablet.'
      },
      {
        name: 'MOTOROLA XOOM™ DOIT',
        snippet: 'The Next, Next Generation tablet.'
      }
    ];
    $scope.name = 'DOIT';
  }
);