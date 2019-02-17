angular.module("zadatak4")
    .controller ("directiveOneController", function directiveOneController($scope) {
        $scope.firstName = "Branislav";
        $scope.lastName = "Kovac";
        $scope.birthPlace = "Novi Sad";

        $scope.galery = [
            {
                image: "img/dogOne.jpg",
                name: "Pera",
            },
            {
                image: "img/dogTwo.jpg",
                name: "Djura",
            },
            {
                image: "img/dogThree.jpg",
                name: "Goran",
            },
        ];

        $scope.a = 0;
        $scope.b = 0;
        $scope.add = (a, b) => {
            console.log("a + b");
            console.log(a + b);
            return a + b;
        };
    })
    .directive("directiveOne", function() {
        return {
            restrict: "EACM",
            templateUrl: "directiveOne.html",
        }
    })