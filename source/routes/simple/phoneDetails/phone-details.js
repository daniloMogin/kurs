angular.module('angularJSKurs')
    .component('phoneDetail', {
        template: `
            Kliknuto je na telefon sa ID: <span>{{$ctrl.phoneId}}</span> <br>
            <a href="#!phones">Back</a>
        `,
        controller: ['$routeParams',
            function PhoneDetailController($routeParams) {
                this.phoneId = $routeParams.phoneId;
            }
        ]
    });