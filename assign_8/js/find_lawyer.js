window.onload = loadXMLDoc();

function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // alert("let's go! table loaded");
            myFunction(this);
        }
    };
    xmlhttp.open("GET", "Xml_06-01-2022.xml", true);
    xmlhttp.send();
}

function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table = "<tr><th>Name</th><th>Register_id</th><th>Specilization</th><th>Phone</th></tr>";
    var x = xmlDoc.getElementsByTagName("Consultants");
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("Name")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("Register_id")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("Specilization")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("Phone")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}




function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


function add_lawyer() {
    // var myWindow = window.open("", "Insert details", "width=200,height=100");
    // myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
    let a = document.getElementsByTagName("tr");
    console.log("Hello");
    for (var i = 1; i < a.length; i++) {
        //console.log(document.querySelector("#demo > tbody > tr:nth-child(i) > td:nth-child(1)").textContent);
        //console.log(document.querySelector("//*[@id='demo']/tbody/tr[2]"));
        console.log(a[i].getElementsByTagName("td")[0].childNodes[0].nodeValue);
    }
}

function remove_lawyer() {

}

function delete_table() {

}

function edit_lawywer() {

}