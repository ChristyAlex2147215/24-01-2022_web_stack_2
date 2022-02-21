var myapp=angular.module("myapp",[]);
myapp.controller("myctrl",function($scope,$http){
    $http.get("http://localhost:8080/user").success(function(response){$scope.names=response;})

});
$(document).ready(function () {
    $("#submit").click(function () {
        $.post("/request",
            {
                id:document.getElementById("roll"),
                name:document.getElementById("name"),
                age:document.getElementById("age"),
                course:document.getElementById("course"),

            },
            function (data, status) {
                console.log(data);
            });
    });
    });



    function addstudent()
    {
        var id=document.getElementById("roll");
        var name=document.getElementById("name");
        var age=document.getElementById("age");
        var course=document.getElementById("course");
        var url="http://127.0.0.1:8080"+"/add/"+id+"/"+name+"/"+phone+"/"+designation;
        var open=window.open(url,"_blank");
        if(open){console.log("window.open is success");}
        else if(!open){console.log("window.open failed");}


    }
    