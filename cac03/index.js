var myapp=angular.module("myapp",[]);

myapp.controller("myctrl",function($scope,$http){
    $http.get("http://127.0.0.1:8000/start").success(function(response){$scope.names=response;});
    console.log("data loading success");
});



function addtotable()
{
    var reg=prompt("Enter register number");
    var name=prompt("Enter name");
    var classname=prompt("Enter class");
    var event=prompt("Enter event");
    var team=prompt("enter team");
    var url="http://127.0.0.1:8000"+"/add"+"/"+reg+"/"+name+"/"+classname+"/"+event+"/"+team;
    alert(url);
    var open=window.open(url,"_blank");
    if(open){console.log("window.open is success");}
    else if(!open){console.log("window.open failed");}
}


function deletefrom()
{
    var id=prompt("Enter reg number");
    var url="http://127.0.0.1:8000"+"/delete/"+id;
    var open=window.open(url,"_blank");
    if(open){console.log("window.open is success");}
    else if(!open){console.log("window.open failed");}

}

function edit()
{
    var id=prompt("Enter reg number");
    var from =prompt("Enter from value");
    var to=prompt("Enter to value");
    var url="http://127.0.0.1:8000"+"/update/"+id+"/"+from+"/"+to;
    var open=window.open(url,"_blank");
    alert("function called");
    if(open){console.log("window.open is success");}
    else if(!open){console.log("window.open failed");}
}

function search_team()
{
    var team=prompt("Enter team");
    var url="http://127.0.0.1:8000"+"/search2"+"/"+team;
    alert(url);
    var open=window.open(url,"_blank");
    if(open){console.log("window.open is success");}
    else if(!open){console.log("window.open failed");}

}
function search_event()
{
    var event=prompt("Enter team");
    var url="http://127.0.0.1:8000"+"/search1"+"/"+event;
    alert(url);
    var open=window.open(url,"_blank");
    if(open){console.log("window.open is success");}
    else if(!open){console.log("window.open failed");}

}
