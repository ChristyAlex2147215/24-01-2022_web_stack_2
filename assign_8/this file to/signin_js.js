function validate() {
    var name = document.getElementById("username");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var password2 = document.getElementById("password2");
    namevalidation(name);
    phonevalidation(phone);
    emailvalidation(email);
    passwordvalidation(password, password2);

}

function setErrorFor(input, message) {
    var formControl = input.parentNode;
    var small = formControl.querySelector('small');
    //add error message  inside small
    small.innerText = message;
    //add error class
    formControl.className = "form-control error";
    return true;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
    return true;
}

function namevalidation(name) {
    var usernamevalue = name.value.trim();
    //console.log("hello moonji");
    let a = /[a-z]+/i.test(usernamevalue);
    console.log("contain only words:" + a);
    let b = /[0-9]+/.test(usernamevalue);
    console.log("contain numbers:" + b);
    if (usernamevalue === "") {
        //setSuccessFor(name);
        setErrorFor(name, "Username cannot be blank");
    } else if (b == true) {
        setErrorFor(name, "name cannot have numbers");
    } else if (a & b == false) {
        console.log("success");
        setSuccessFor(name);
    } else {
        setSuccessFor(name);

    }

    // function setErrorFor(input, message) {
    //     var formControl = input.parentNode;
    //     var small = formControl.querySelector('small');
    //     //add error message  inside small
    //     small.innerText = message;
    //     //add error class
    //     formControl.className = "form-control error";
    //     return true;
    // }

    // function setSuccessFor(input) {
    //     const formControl = input.parentElement;
    //     formControl.className = "form-control success";
    //     return true;
    // }
}



function phonevalidation(phone) {
    var phonevalue = phone.value.trim();
    console.log("length of phone number:" + phonevalue.length);
    if (phonevalue.length == 10) {
        setSuccessFor(phone);
    } else if (phonevalue.length != 10) {
        setErrorFor(phone, "Phone number should have 10 digits ");
    }

}

function emailvalidation() {

}

function passwordvalidation(password, password2) {
    var passwordvalue = password.value.trim();
    var password2value = password2.value.trim();
    console.log("first password:" + password + "\nsecond passwprd:" + password2);
    if (password2value === "") {

        setErrorFor(password2, "password cant be empty");
    }
    if (passwordvalue === "") {
        setErrorFor(password, "password cant be empty");
    }
    if (passwordvalue !== password2value) {
        setErrorFor(password2, "passwords does't match");
        setSuccessFor(password, "passwords does't match");
    } else {
        setSuccessFor(password2);
        setSuccessFor(password);
    }

    var firstPassword = /^(?=.{10,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/g.test(password);
    var secondPassword = /^(?=.{10,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/g.test(password2);
    if (firstPassword & secondPassword) {
        setSuccessFor(password);
        setSuccessFor(password2);
    } else if (firstPassword & secondPassword == false) {
        setSuccessFor(password);
        setErrorFor(password2, "password dosent meet the requirements");
    } else if (firstPassword == false & secondPassword) {
        setErrorFor(password, "password dosent meet the requirements");
        setSuccessFor(password2);
    } else {

    }

}

function addcookies() {
    var name = document.getElementById("username");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var password2 = document.getElementById("password2");
    const dates = prompt("Enter cookie expiration in days");
    alert(`set expiration: ${dates}`);
    setCookie("cookie_name", name, parseInt(dates));
    setCookie("cookie_phone", phone, parseInt(dates));
    setCookie("cookie_email", email, parseInt(dates));
    setCookie("cookie_password", password, parseInt(dates));
    console.log("addcokiee function called");
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    console.log("cookies are set");
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    console.log("called getcookie");
    return "";
}

function seeAllCookies() {
    alert(getCookie("cookie_name") + " " + getCookie("cookie_phone") + " " + getCookie("cookie_email") + " " + getCookie("cookie_password"));
    console.log(getCookie("cookie_name"));
}

function removecookies() {
    document.cookie = cookie_name + ";max-age=0";
    cookie_name = document.cookie;
    document.cookie = cookie_phone + ";max-age=0";
    cookie_phone = document.cookie;
    document.cookie = cookie_email + ";max-age=0";
    cookie_email = document.cookie;
    document.cookie = cookie_password + ";max-age=0";
    cookie_password = document.cookie;
    alert("all cookies are cleared deleted");
}




function setLocalStorage() {
    var name = document.getElementById("username");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    localStorage.setItem("username", name);
    localStorage.setItem("userphone", phone);
    localStorage.setItem("useremail", email);
    localStorage.setItem("userpwd", password);
    console.log("Local storages set successfull");
}

function sessionStorage() {
    var name = document.getElementById("username");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    sessionStorage.setItem("user_name", name);
    sessionStorage.setItem("user_phone", phone);
    sessionStorage.setItem("user_email", email);
    sessionStorage.setItem("user_pwd", password);
}