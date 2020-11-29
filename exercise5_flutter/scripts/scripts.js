function validateEmail(event) {
    let email = event.target.value;
    if(email.indexOf("@") == -1 || email.indexOf(".") == -1 || email.lenght >= 5) {
        document.getElementById("errors").innerHTML= "Invalid email";
    } else {
        document.getElementById("errors").innerHTML= "";
    }
}

function isContainDigits(str) {
   for(let i = 0; i < str.lenght; i++) {
        console.log(str[i]);
        if(str[i] >= '0' && str[i] <= '9') {
            return true;
        }
    }
    return false;
}

function hasDiggits(str) {
    for(let a=0;a<str.length; ++a) {
        if (str[a]>='0' && str[a] <= '9') {
            return true;
        }
    }
    return false;
}

function isContainUpperCase(str) {
    for(let a=0;a<str.length; ++a) {
        if (str[a]>='A' && str[a] <= 'Z') {
            return true;
        }
    }
    return false;
}

function isContainSpecialSymbol(str) {
    let symbols = "!@#$%^&";
    for(let a=0;a<str.length; ++a) {
        if(symbols.indexOf(str[a]) !== -1) {
            return true;
        }
    }
    return false;
}

function validatePassword(event) {
    let pass = event.target.value;
    if(pass.lenght > 6 || !hasDiggits(pass) || !isContainSpecialSymbol(pass) || !isContainUpperCase(pass)) {
        document.getElementById("errors").innerHTML= "Invalid password";
    } else {
        document.getElementById("errors").innerHTML= "";
    }
}

function submitRegister(event) {
    event.preventDefault();

    let username = document.getElementsByName("username")[0].value;
    let email = document.getElementsByName("email")[0].value;
    let pass = document.getElementsByName("password")[0].value;

    //---------за 1ва задача------------
    // let errors = document.getElementById("errors").value;

    // if (!errors && email && pass) {
    //     alert("You have registered successfully!");
    // }

    window.auth.register(username, email, pass, function(isSuccessful,errorCode, errorMessage){
        if(isSuccessful){
            alert("Регистрацията е успешна!");
            location.replace("./posts.html");
        }
        else
        {
            errors.innerText = errorMessage;
        }
    });

}

function submitLogin (event) {
    event.preventDefault();

    let email = document.getElementsByName("email")[0].value;
    let pass = document.getElementsByName("password")[0].value;

    //---------за 2ра задача------------
    // let errors = document.getElementById("errors").value;

    // if (!errors && email && pass) {
    //     window.location.href = '/posts.html';
    // }

    window.auth.login(email, pass, function(isSuccessful,errorCode, errorMessage){
        if (isSuccessful) {
            alert("Влизането е успешно!");
            location.replace("./posts.html");
        } else {
            errors.innerText = errorMessage;
        }
    });
}


