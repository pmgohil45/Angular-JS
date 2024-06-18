angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names=[
        {name:'Prakash',city:'Rajkot',state:'Gujarat',country:'India'},
        {name:'Jeel',city:'Jetpur',state:'Gujarat',country:'India'},
        {name:'Raj',city:'Porbandar',state:'Gujarat',country:'India'}
    ]
  });