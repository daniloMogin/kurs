angular
    .module('angularjsKurs')
    .component('helloWorld', {
        template: 'Hello, {{$ctrl.user}}!',
        controller: function HelloWorldController() {
            this.user = 'world';
        }
});
