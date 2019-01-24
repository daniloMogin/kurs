angular.module('angularjsKurs').component('convertCtrl', {
    templateUrl: 'convertComp.html',
    controller: function ConvertCtrlController() {
        this.phones = [
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
        this.name = 'world';
        this.count = 10;

        this.increment = () => {
            this.count++;
        }

        this.firstName = 'Pera';
        this.lastName = 'Peric';
        this.age = 20;
        this.email = 'pera.peric@email.com';

        this.submit = () => {
            const userObj = {
                name: this.firstName,
                lastName: this.lastName,
                age: this.age,
                email: this.email
            }

            console.log(`userObj`);
            console.log(userObj);

        }
    }
});
