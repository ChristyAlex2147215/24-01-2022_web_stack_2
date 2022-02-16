function validate() {
    var name="";
    name = document.getElementById("username");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var collage_name = document.getElementById("collage_name");
    var branch = document.getElementById("branch");
    var address = document.getElementById("address");
    var state = document.getElementById("state");
    var age = document.getElementById("age");
    var password = document.getElementById("password");
    var password2 = document.getElementById("password2");
    console.log(name,phone,email,collage_name,branch,address,state,age,password,password2);

    //calling functions
    var namev=namevalidation(name);
    //console.log("name validation:%s",namev);
    var phonev=phonevalidation(phone);
    //console.log("name validation:%s",phonev);
    var emailv=emailvalidation(email);
    var passv=passwordvalidation(password, password2);
    var collagev=collage_namevalidation(collage_name);
    var branchv=branchvalidation(branch);
    var addressv=addressvalidation(address);
    var statev=statevalidator(state);
    var agev=agevalidator(age);
    console.log("name validation: %s,phone validation: %s, email validation:  %s, password validation:  %s, collage validation:  %s, branch validation :  %s, address validation : %s, state validation :  %s, age validation:  %s  ",namev,phonev,emailv,passv,collagev,branchv,addressv,statev,agev);
    console.log("name validation: %s,phone validation: %s, email validation:  %s, password validation:  %s, collage validation:  %s, branch validation :  %s, address validation : %s, state validation :  %s, age validation:  %s  ",namev,phonev,emailv,passv,collagev,branchv,addressv,statev,agev);
    if (namev & emailv & passv & collagev & branchv & phonev & addressv & statev & agev) {
        alert("successfull registration");
        var phone_trimm = document.getElementById("phone").value.trim();
        var email_trimm = document.getElementById("email").value.trim();
        console.log("cookies:%s,%s",phone_trimm,email_trimm);
        // cookie.set("name", name.value.trim());
        // cookie.set("email", email.value.trim());
        setCookie("phone",phone_trimm,3);
        setCookie("email",email_trimm,3);
        console.log(document.cookie);
        localStorage.setItem("phone", phone_trimm);
        localStorage.setItem("email", email_trimm);
        //alert("cookies created");
        console.log("cookies created");
        //document.open("home.html");
    }

}
//function to create cookies
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }


  //fucntion to disable and display
window.onchange=function disabler()
{
    document.getElementById("phone").disabled=true;
    document.getElementById("email").disabled=true;
    document.getElementById("collage_name").disabled=true;
    document.getElementById("branch").disabled=true;
    document.getElementById("address").disabled=true;
    document.getElementById("state").disabled=true;
    document.getElementById("age").disabled=true;
    document.getElementById("password").disabled=true;
    document.getElementById("password2").disabled=true;
    var name = document.getElementById("username").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var email = document.getElementById("email").value.trim();
    var collage_name = document.getElementById("collage_name").value.trim();
    var branch = document.getElementById("branch").value.trim();
    var address = document.getElementById("address").value.trim();
    var state = document.getElementById("state").value.trim();
    var age = document.getElementById("address").value.trim();
    var password = document.getElementById("password").value.trim();
    var password2 = document.getElementById("password2").value.trim();

if(name!="")
{
    document.getElementById("collage_name").disabled=false;
}
if(name!="" & collage_name!=""){document.getElementById("email").disabled=false;}
if(name!="" & collage_name!="" & email!=""){document.getElementById("branch").disabled=false;}
if(name!="" & collage_name!="" & email!="" & branch!=""){document.getElementById("state").disabled=false;}
if(name!="" & collage_name!="" & email!="" & branch!="" & state!=""){ document.getElementById("address").disabled=false;}
if(name!="" & collage_name!="" & email!="" & branch!="" & state!="" & address!=""){ document.getElementById("age").disabled=false;}
if(name!="" & collage_name!="" & email!="" & branch!="" & state!="" & address!="" & age!=""){document.getElementById("phone").disabled=false;}
if(name!="" & collage_name!="" & email!="" & branch!="" & state!="" & address!="" & age!="" & phone!=""){document.getElementById("password").disabled=false;}
if(name!="" & collage_name!="" & email!="" & branch!="" & state!="" & address!="" & age!="" & phone!="" & password!=""){document.getElementById("password2").disabled=false;}

};

function setErrorFor(input, message) {
    var formControl = input.parentNode;
    var small = formControl.querySelector('small');
    //add error message  inside small
    small.innerText = message;
    //add error class
    formControl.className = "form-control error";
    return false;
}

function setSuccessFor(input) {
    var formControl = input.parentElement;
    formControl.className = "form-control success";
    return true;
}

function namevalidation(name) {
    var usernamevalue = name.value.trim();
    //console.log("hello moonji");
    var a = /[a-z]+/i.test(usernamevalue);
    //console.log("contain only words:" + a);
    //console.log("name validation");
    if (usernamevalue == "") {
        //setSuccessFor(name);
        return setErrorFor(name, "Username cannot be blank !");
    } else if (a == false) {
        //console.log("nave validation");
        return setSuccessFor(name);

    } else {
        return setSuccessFor(name);

    }

}



function phonevalidation(phone) {
    var phonevalue = phone.value.trim();
   // console.log("phone number validation ");
    if (phonevalue.length == 10) {
        return setSuccessFor(phone);
    } else if (phonevalue.length != 10) {
        return setErrorFor(phone, "Phone number should have 10 digits ");
    }

}

function emailvalidation(email) {
    var emailvalue = email.value.trim();
    //console.log("emailvalidation");
    if (emailvalue == "") {
        return setErrorFor(email, "email cant be blank");
    }
    var em = /.+@.+(collage|university).in/g.test(emailvalue);
    if (em) {
        return setSuccessFor(email);
    } else {
        return setErrorFor(email, "email in not in format");
    }

}

function branchvalidation(branch) {
    var branchvalue = branch.value.trim();
   // console.log("branchvalidation");
    if (branchvalue == "") {
        return setErrorFor(branch, "branch cant be empty");
    } else {
        return setSuccessFor(branch);
    }
}

function passwordvalidation(password, password2) {
    var passwordvalue = password.value.trim();
    var password2value = password2.value.trim();
   // console.log("password validation");
   var a,b;
    var firstPassword = /^(?=.{10,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/g.test(passwordvalue);
    var secondPassword = /^(?=.{10,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/g.test(password2value);
    if (firstPassword & secondPassword & passwordvalue == password2value) {
        a= setSuccessFor(password);
        b= setSuccessFor(password2);
        if(a==b==true)
        {
            return true;
        }
        else 
        {
            return false;
        }
    } else if (firstPassword & secondPassword == false) {
        a= setSuccessFor(password);
        b= setErrorFor(password2, "password dosent meet the requirements");
        if(a==b==false)
        {
            return false;
        }
        
    } else if (firstPassword == false & secondPassword) {
        a= setErrorFor(password, "password dosent meet the requirements");
        b= setSuccessFor(password2);
        if(a==b==false)
        {
            return false;
        }
    }
    if (password2value === "" | passwordvalue === "") {
        a= setErrorFor(password, "password cant be empty");
        b= setErrorFor(password2, "password cant be empty");
        if(a==b==false)
        {
            return false;
        }
        
    } else if (passwordvalue !== password2value) {
        a= setErrorFor(password2, "passwords does't match");
        b= setSuccessFor(password, "passwords does't match");
        if(a==b==false)
        {
            return false;
        }
    }
    var lowercasechar = /[a-z]+/g.test(passwordvalue);
    var uppercasechar = /[A-Z]+/g.test(passwordvalue);
    var numericchar = /[0-9]+/g.test(passwordvalue);
    var specialchar = /[^\d\w]+/g.test(passwordvalue);
    if (lowercasechar == true) 
    { document.getElementById("label1").style.color = "green"; }
     else 
     { document.getElementById("label1").style.color = "red"; }
    if (uppercasechar == true) 
    { document.getElementById("label2").style.color = "green"; } 
    else 
    { document.getElementById("label2").style.color = "red"; }
    if (numericchar == true) 
    { document.getElementById("label3").style.color = "green"; } 
    else 
    { document.getElementById("label3").style.color = "red"; }
    if (specialchar == true)
     { document.getElementById("label4").style.color = "green"; }
      else 
      { document.getElementById("label4").style.color = "red"; }

}

function agevalidator(age) {
    var agevalue = age.value.trim();
    console.log("age validator");
    if (agevalue < 0 | agevalue > 100) {
        return setErrorFor(age, "Not a valid age");
    } else if (agevalue == "") {
        return setErrorFor(age, "age cannot be empty");
    } else {
        return setSuccessFor(age);
    }
}



//uppercasing all the names first letter
function upper_caser() {
    var a = document.getElementById("username").value.trim();
    console.log("uppercaser");
    document.getElementById("username").value = a[0].toUpperCase() + a.slice(1).toLowerCase();
    //}
}


function collage_namevalidation(collagename) {
    var collagenamevalue = collagename.value.trim()
    console.log("collage name validator");
    if (collagenamevalue == "") {
        return setErrorFor(collagename, "collage name cant be empty");
    } else {
        return setSuccessFor(collagename);
    }

}

function addressvalidation(address) {
    var addressvalue = address.value.trim()
    console.log("address validator");
    if (addressvalue == "") {
        return setErrorFor(address, "collage name cant be empty");
    } else {
        return setSuccessFor(address);
    }

}


function statevalidator(state) {
    var statevalue = state.value.trim()
    console.log("statevalidaot");
    if (statevalue == "") {
        return setErrorFor(state, "collage name cant be empty");
    } else {
        return setSuccessFor(state);
    }

}
//blocking all number inputs
function noNumbers() {
    var a = document.getElementById("username").value.trim();
    var lat = a.slice(a.length - 1);
    console.log("nonumbers allowed");
    if (parseInt(lat) === 0) {
        console.log("got it");
    }
    if (parseInt(lat) > 0 | parseInt(lat) <= 9) {
        document.getElementById("username").value = a.replace(lat, "");
    }

}

function noCharacters() {

}
//password suggetions
$(function() {
    var tags = [
        "qw4d%Fjd8h",
        "asd2sHs#*dc",
        "qw@ER2ty",
        "qw23Bh.nd",
        "qw3Gh(tM ",
        "asn%89Gji,m",
        "ketJH&2nm",
        "asop@72%t",
        "zxdh7fgh&df",
        "poH5*6n",
        "lk30gHt&mH",
        "mnBg5#Hm",
        "chH6@hsj"


        /* Making a list of available tags */


    ];
    $("password").autocomplete({
        source: tags

        /* #the ags is the id of the input element
        source: tags is the list of available tags*/


    });
});