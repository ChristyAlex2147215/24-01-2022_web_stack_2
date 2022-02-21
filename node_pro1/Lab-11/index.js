var myapp=angular.module("myapp",[]);

myapp.controller("myctrl",function($scope,$http){
    $http.get("http://127.0.0.1:8000/employee").success(function(response){$scope.names=response;});
    console.log("json loading success");
});



function addtotable()
{
    var id=prompt("Enter id");
    var name=prompt("Enter name");
    var phone=prompt("Enter phone");
    var designation=prompt("Enter designation");
    var url="http://127.0.0.1:8000"+"/add/"+id+"/"+name+"/"+phone+"/"+designation;
    alert(url);
    var open=window.open(url,"_blank");
    if(open){console.log("window.open is success");}
    else if(!open){console.log("window.open failed");}
}


function deletefrom()
{
    var id=prompt("Enter Emp id");
    var url="http://127.0.0.1:8000"+"/delete/"+id;
    var open=window.open(url,"_blank");
    if(open){console.log("window.open is success");}
    else if(!open){console.log("window.open failed");}

}

function edit()
{
    var id=prompt("Enter Emp id");
    var name=prompt("Enter Emp name");
    var url="http://127.0.0.1:8000"+"/update/"+id+"/"+name;
    var open=window.open(url,"_blank");
    alert("function called");
    if(open){console.log("window.open is success");}
    else if(!open){console.log("window.open failed");}
}