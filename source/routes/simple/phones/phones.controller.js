angular.module('angularJSKurs')
    .controller('PhoneController', function ($scope) {
        $scope.title = 'Phone Page';
        $scope.phones = [
            {
                id: 1,
                name: 'Nexus S',
                snippet: 'Fast just got faster with Nexus S.'
            },
            {
                id: 2,
                name: 'Motorola XOOM™ with Wi-Fi',
                snippet: 'The Next, Next Generation tablet.'
            },
            {
                id: 3,
                name: 'MOTOROLA XOOM™',
                snippet: 'The Next, Next Generation tablet.'
            }
        ];
    })