var app = angular.module('myApp', []);
app.controller('personCtrl', function($scope) {
    $scope.firstName = "Prakash";
    $scope.lastName = "Gohil";
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    };
});
