function validate() {
    var name = document.getElementById("username");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var collage_name = document.getElementById("collage_name");
    var branch = document.getElementById("branch");
    var address = document.getElementById("address");
    var state = document.getElementById("state");
    var age = document.getElementById("age");
    var password = document.getElementById("password");
    var password2 = document.getElementById("password2");
    namevalidation(name);
    phonevalidation(phone);
    emailvalidation(email);
    passwordvalidation(password, password2);
    collage_namevalidation(collage_name);
    branchvalidation(branch);
    addressvalidation(address);
    statevalidator(state);
    agevalidator(age);
    if (namevalidation(name) &
        phonevalidation(phone) &
        emailvalidation(email) &
        passwordvalidation(password, password2) &
        collage_namevalidation(collage_name) &
        branchvalidation(branch) &
        addressvalidation(address) &
        statevalidator(state) &
        agevalidator(age)) {
        var phone = document.getElementById("phone").value.trim()
        var email = document.getElementById("email").value.trim()
        cookie.set("name", name.value.trim());
        cookie.set("email", email.value.trim());
        localStorage.setItem("phone", phone);
        localStorage.setItem("email", email);
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
        return setSuccessFor(name);

    } else {
        return setSuccessFor(name);

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
        return setSuccessFor(phone);
    } else if (phonevalue.length != 10) {
        return setErrorFor(phone, "Phone number should have 10 digits ");
    }

}

function emailvalidation(email) {
    var emailvalue = email.value.trim()
    console.log(emailvalue);
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
    console.log(branchvalue);
    if (branchvalue == "") {
        setErrorFor(branch, "branch cant be empty");
    } else {
        return setSuccessFor(branch);
    }
}

function passwordvalidation(password, password2) {
    var passwordvalue = password.value.trim();
    var password2value = password2.value.trim();
    console.log("first password:" + passwordvalue + "\nsecond passwprd:" + password2value);


    var firstPassword = /^(?=.{10,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/g.test(passwordvalue);
    var secondPassword = /^(?=.{10,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/g.test(password2value);
    if (firstPassword & secondPassword & passwordvalue == password2value) {
        setSuccessFor(password);
        setSuccessFor(password2);
    } else if (firstPassword & secondPassword == false) {
        setSuccessFor(password);
        setErrorFor(password2, "password dosent meet the requirements");
    } else if (firstPassword == false & secondPassword) {
        setErrorFor(password, "password dosent meet the requirements");
        setSuccessFor(password2);
    }
    if (password2value === "" | passwordvalue === "") {
        setErrorFor(password, "password cant be empty");
        setErrorFor(password2, "password cant be empty");
    } else if (passwordvalue !== password2value) {
        return setErrorFor(password2, "passwords does't match");
        return setSuccessFor(password, "passwords does't match");
    }

}

function agevalidator(age) {
    var agevalue = age.value.trim();
    console.log("age is" + agevalue);
    if (agevalue < 0 | agevalue > 100) {
        setErrorFor(age, "Not a valid age");
    } else if (agevalue == "") {
        setErrorFor(age, "age cannot be empty");
    } else {
        return setSuccessFor(age);
    }
}




function namecapitalize(username) {
    var usernamevalue = username.value.trim();
    console.log("capitalizr" + usernamevalue);
    return usernamevalue[0].toUpperCase() + usernamevalue.slice(1)
}

function restrictnumbers(e) {
    var x = e.which || e.keycode;
    if ((x >= 0 && x <= 9))
        return false;
    else
        return true;
}

function collage_namevalidation(collagename) {
    var collagenamevalue = collagename.value.trim()
    console.log(collagenamevalue);
    if (collagenamevalue == "") {
        setErrorFor(collagename, "collage name cant be empty");
    } else {
        return setSuccessFor(collagename);
    }

}

function addressvalidation(address) {
    var addressvalue = address.value.trim()
    console.log(addressvalue);
    if (addressvalue == "") {
        setErrorFor(address, "collage name cant be empty");
    } else {
        return setSuccessFor(address);
    }

}

function statevalidator(state) {
    var statevalue = state.value.trim()
    console.log(statevalue);
    if (statevalue == "") {
        setErrorFor(state, "collage name cant be empty");
    } else {
        return setSuccessFor(state);
    }

}