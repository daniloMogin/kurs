// Definisanje `angularjsKurs` modula
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
  }
);
angularjsKurs.controller(
  'AngularJSKursControllerEDIT',
  function AngularJSKursController($scope) {
    $scope.phones1 = [
      {
        name: 'Nexus S EDIT',
        snippet: 'Fast just got faster with Nexus S.'
      },
      {
        name: 'Motorola XOOM™ with Wi-Fi EDIT',
        snippet: 'The Next, Next Generation tablet.'
      },
      {
        name: 'MOTOROLA XOOM™ EDIT',
        snippet: 'The Next, Next Generation tablet.'
      }
    ];
  }
);