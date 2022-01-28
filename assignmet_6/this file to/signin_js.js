function validate() {
    var name = document.getElementById("username");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var password2 = document.getElementById("password2");
    if (namevalidation(name) & phonevalidation(phone) & emailvalidation(email) & passwordvalidation(password, password2)) {
        alert("welcome you have sign in now");
    }


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
        return true;
    } else {
        setSuccessFor(name);
        return true;

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
        return true;
    } else if (phonevalue.length != 10) {
        setErrorFor(phone, "Phone number should have 10 digits ");
    }

}

function emailvalidation(email) {
    emailvalue = email.value.trim();
    var ev = /.+\@christuniversity\.in/.test(emailvalue);
    if (emailvalue === "") {
        setErrorFor(email, "Email cannot be blank");
    } else if (ev) {
        setSuccessFor(email);
        return true;
    } else {
        setErrorFor(email, "email dosen't match the requirement");
    }

}

function passwordvalidation(password, password2) {
    var passwordvalue = password.value.trim();
    var password2value = password2.value.trim();
    console.log("first password:" + passwordvalue + "\nsecond passwprd:" + password2value);
    var firstPassword = /^(?=.{10,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/g.test(passwordvalue);
    var secondPassword = /^(?=.{10,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/g.test(password2value);
    console.log(passwordvalue + password2value);
    if (password2value === "") {

        setErrorFor(password2, "password can't be empty");
    }
    if (passwordvalue === "") {
        setErrorFor(password, "password can't be empty");
    }
    if (passwordvalue != password2value) {
        setErrorFor(password2, "passwords does't match");
        setSuccessFor(password);
    }

    if (firstPassword & secondPassword & passwordvalue === password2value) {
        setSuccessFor(password);
        setSuccessFor(password2);
        return true;
    } else if (firstPassword & secondPassword == false) {
        setSuccessFor(password);
        setErrorFor(password2, "password dosent meet the requirements");
    } else if (firstPassword == false & secondPassword) {
        setErrorFor(password, "password dosent meet the requirements");
        setSuccessFor(password2);
    }
}


//cookie functions to chage 
window.onload = chbgcolor();

function chbgcolor() {
    function randomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // Function call
    var randomNumber = (randomNumber(1, 10));
    console.log(randomNumber);
    var today = new Date();
    var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days

    setCookie("1", "red");
    setCookie("2", 'blue');
    setCookie("3", 'cyon');
    setCookie("4", 'green');
    setCookie("5", 'yellow');
    setCookie("6", 'orange');
    setCookie("7", 'brickred');
    setCookie("8", 'white');
    setCookie("9", 'black');
    setCookie("10", 'violet');


    function getCookie(name) {
        var re = new RegExp(name + "=([^;]+)");
        var value = re.exec(document.cookie);
        return (value != null) ? unescape(value[1]) : null;
    }

    function setCookie(name, value) {
        document.cookie = name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
    }
    console.log(getCookie(randomNumber));
    // console.log(document.body.style.backgroundColor);
    // console.log(document.getElementsByTagName("body").style.backgroundColor);

    // document.getElementsByTagName("body").style.backgroundColor = getCookie(randomNumber);
    document.body.style.backgroundColor = String(getCookie(randomNumber));
    // document.getElementsByTagName("body").style.backgroundColor = "red";
    document.getElementById("form").style.backgroundColor = String(getCookie(randomNumber));

}