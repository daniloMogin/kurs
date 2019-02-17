angular.module("zadatak4")
    .controller ("directiveTwoController", function directiveTwoController($scope) {
        $scope.player = {
            firstName: "Branislav",
            lastName: "Kovac",
            years: 40,
            email: "bk@email.com",
        };

        $scope.send = () => {
            var userObj = {
                firstName: $scope.player.firstName,
                lastName: $scope.player.lastName,
                years: $scope.player.years,
                email: $scope.player.email,
            };
            console.log("userObj");
            console.log(userObj);
        };
    })
    .directive("directiveTwo", function() {
        return {
            restrict: "EACM",
            templateUrl: "directiveTwo.html",
        }
    })