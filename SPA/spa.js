angular.module('myapp',['ngRoute'])
.config(function($routeProvider)
{
    $routeProvider.when('/home',
    {
        templateUrl:'christ/home.html',
        controller:'homectrl'}).when('/home/:first/:last',
        {
            templateUrl:'christ/home.html',
            controller:'homectrl'
    }).when('/course',
    {
        templateUrl:'christ/course.html',
        controller:'coursectrl'
    }).when('/student',
    {
        templateUrl:'christ/student.html' ,
        controller:'studentctrl'
    })
})
.controller('myctrl',function()
{

})
.controller("homectrl",function($scope,$routeParams)
{
    $scope.message="Home Page"
    if($routeParams.first&&$routeParams.last)
    {
        $scope.person={
            first:$routeParams.first,
            last:$routeParams.last
        };
    }
})
.controller("coursectrl",function($scope)
{
    $scope.courses=["Park & Go","Park Care Systems","My Car Parkings","Park @ Mumbai","Park Capsule","Parking Click"];
})
.controller("studentctrl",function($scope,$http)
{
    $http.get('https://raynould-joseph.github.io/json-pgm/pms.json')
    .success(function(response)
    {
        $scope.names=response.records;
    });
    
});








