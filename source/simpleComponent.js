angular
    .module('angularjsKurs')
    .component('helloWorld', {
        template: 'Hello, {{user}}!',
        controller: function HelloWorldController($scope) {
            $scope.user = 'world';
        }
});
