angular.module('angularjsKurs')
    .component('convertCtrl', {
        templateUrl: 'convertComp.html',
        controller: function ConvertCtrlController($scope) {
            $scope.customFilter = 'angularjsKurs';
            $scope.phones = [
                {
                    "naziv": "Slika 1",
                    "slika": "https://via.placeholder.com/150/0000FF/808080?text=smartschool.rs"
                },
                {
                    "naziv": "Slika 2",
                    "slika": "https://via.placeholder.com/150/FF0000/FFFFFF?text=smartschool.rs"
                },
                {
                    "naziv": "Slika 3",
                    "slika": "https://via.placeholder.com/150/FFFF00/000000?text=smartschool.rs"
                },
                {
                    "naziv": "Slika 4",
                    "slika": "https://via.placeholder.com/150/000000/FFFFFF?text=smartschool.rs"
                },
                {
                    "naziv": "Slika 6",
                    "slika": "https://via.placeholder.com/150/0000FF/808080?text=smartschool.rs"
                },
                {
                    "naziv": "Slika 5",
                    "slika": "https://via.placeholder.com/150/FFFF00/000000?text=smartschool.rs"
                }
            ];
        }
    });
