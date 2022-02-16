var app = angular.module('myApp', ['ngRoute']);
 
app.config(function($routeProvider) {
$routeProvider
 
.when('/', {
templateUrl : 'page1.html',
controller : 'FirstController'
})
 
.when('/database', {
templateUrl : 'page2.html',
controller : 'SecondController'
})
 
.when('/databasewithsearch', {
templateUrl : 'page3.html',
controller : 'ThirdController'
})
.when('/:first/:last',
        {
            templateUrl:'page1.html',
            controller:'FirstController'
    })
 
.otherwise({redirectTo: '/'});
});

    // app.controller('FirstController', function($scope) {
    // $scope.message = 'Welcome to Primafacie';
    // });
     
    app.controller('SecondController', ['$scope', '$http', function($scope, $http)  {
        $scope.userData = undefined;
        var req = {
            method: 'GET',
            url: 'https://christyalex2147215.github.io/24-01-2022_web_stack_2/SPA/student.json',
            headers: { 'Content-Type': 'application/json' }
        };
        
        
        $http(req).then(function (response) {
            $scope.userData  = response.data.lawyers;
        });
      }]);
     
      app.controller('ThirdController', ['$scope', '$http', function($scope, $http)  {
        $scope.userData = undefined;
        var req = {
            method: 'GET',
            url: 'https://christyalex2147215.github.io/24-01-2022_web_stack_2/SPA/student.json',
            headers: { 'Content-Type': 'application/json' }
        };
        
        
        $http(req).then(function (response) {
            $scope.userData  = response.data.clients;
        });
      }]);

      app.controller("FirstController",function($scope,$routeParams)
      {
          if($routeParams.first&&$routeParams.last)
          {
              $scope.person={
                  first:$routeParams.first,
                  last:$routeParams.last
              };
          }
          $scope.message = 'Welcome to Primafacie';
      });
    