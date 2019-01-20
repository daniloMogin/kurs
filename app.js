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
    $scope.cat = [
      {
        img: 'https://img-9gag-fun.9cache.com/photo/aM23KQV_460s_v1.jpg',
        name: 'funny'
      },
      {
        img: 'https://img-9gag-fun.9cache.com/photo/aM23KQV_460s_v1.jpg',
        name: 'funny'
      }
    ]
    $scope.name = 'DOIT';
    $scope.count = 0;
    $scope.countFunc = 0;
    $scope.input = 'AngularJS';

    $scope.increment = () => {
      $scope.countFunc++;
    };

    $scope.decrement = () => {
      $scope.countFunc--;
    };

    $scope.firstName;
    $scope.lastName;
    $scope.age;
    $scope.email;

    $scope.submit = () => {
      const obj = {
        name: $scope.firstName,
        lastName: $scope.lastName,
        age: $scope.age,
        email: $scope.email
      }
      console.log(`Personal data`);
      console.log(obj);
      
    }
  }
);
