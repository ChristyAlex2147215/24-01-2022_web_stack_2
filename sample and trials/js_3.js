 //https://prabukiwi1.github.io/Mscds1/employee.json
 var myapp = angular.module("myapp", []);
 myapp.controller("myctrl", function($scope, $http) {
     $http.get('https://prabukiwi1.github.io/Mscds1/employee.json')
         .success(function(response) {
             $scope.names = response.records;
         });
 });