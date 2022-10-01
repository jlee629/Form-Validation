var firstName = document.getElementById("firstName"),
    firstError = document.querySelector(".error-first")
    lastName = document.getElementById("lastName"),
    lastError = document.querySelector(".error-last"),
    address = document.getElementById("address"),
    addressError = document.querySelector(".error-address"),
    city = document.getElementById("city"),
    cityError = document.querySelector(".error-city"),
    postalCode = document.getElementById("postalCode"),
    postalError = document.querySelector(".error-postal"),
    province = document.getElementById("province"),
    provinceError = document.querySelector(".error-province"),
    age = document.getElementById("age"),
    ageError = document.querySelector(".error-age"),
    password = document.getElementById("password"),
    passwordError = document.querySelector(".error-password"),
    passwordConfirm = document.getElementById("passwordConfirm"),
    passwordConfirmError = document.querySelector(".error-confirm"),
    email = document.getElementById("email"),
    emailError = document.querySelector(".error-email"),
    register = document.getElementById("register"),
    clearForm = document.getElementById("clearForm"),
    errorMessage = document.querySelector(".error-result"),
    inputs = document.querySelectorAll(".input")


function removeDefaultValue() {
    for (var i = 0; i<inputs.length; i++) {
        inputs[i].value = "";
    }
}

clearForm.addEventListener("click", function(){
    document.location.reload();
});

register.addEventListener("click", function() {
    if (firstName.classList.contains("invalid") || firstName.value === "" || lastName.classList.contains("invalid") ||
    lastName.value === "" || address.classList.contains("invalid") || address.value === "" || city.classList.contains("invalid") || 
    city.value === "" || postalCode.classList.contains("invalid") || postalCode.value === "" || province.classList.contains("invalid") 
    || province.value === "" || age.classList.contains("invalid") || age.value === "" || password.classList.contains("invalid")
    || password.value === "" || passwordConfirm.classList.contains("invalid") || password.value === "" || email.classList.contains("invalid")
    || email.value === "") {
        errorMessage.classList.add("invalid");
        return;
    }
    else {
        errorMessage.classList.remove("invalid");
        alert("Thank you for submitting. You are registered successfully!")
    }
})

firstName.addEventListener("input", function(e) {
    var firstNameValue = e.target.value;
    if (firstNameValue === "" || /^[a-zA-Z\s]*$/.test(firstNameValue) === false) {
        firstName.classList.add("invalid");
        firstError.classList.add("invalid");
    } 
    else {
        firstName.classList.remove("invalid");
        firstError.classList.remove("invalid");
    }
})

lastName.addEventListener("input", function(e) {
    var lastNameValue = e.target.value;
    if (lastNameValue === "" || /^[a-zA-Z\s]*$/.test(lastNameValue) === false) {
        lastName.classList.add("invalid");
        lastError.classList.add("invalid");
    } 
    else {
        lastName.classList.remove("invalid");
        lastError.classList.remove("invalid");
    }
})

address.addEventListener("input", function(e) {
    var addressValue = e.target.value;
    if (addressValue === "" || /^[a-zA-Z0-9\s]*$/.test(addressValue) === false) {
        address.classList.add("invalid");
        addressError.classList.add("invalid");
    } 
    else {
        address.classList.remove("invalid");
        addressError.classList.remove("invalid");
    }
})

city.addEventListener("input", function(e) {
    var cityValue = e.target.value;
    if (cityValue === "" || /^[a-zA-Z\s]*$/.test(cityValue) === false) {
        city.classList.add("invalid");
        cityError.classList.add("invalid");
    } 
    else {
        city.classList.remove("invalid");
        cityError.classList.remove("invalid");
    }
})

postalCode.addEventListener("input", function(e) {
    var postalCodeValue = e.target.value;
    if (postalCodeValue === "" || /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$/.test(postalCodeValue) === false) {
        postalCode.classList.add("invalid");
        postalError.classList.add("invalid");
    } 
    else {
        postalCode.classList.remove("invalid");
        postalError.classList.remove("invalid");
    }
})

province.addEventListener("input", function(e) {
    var provinceValue = e.target.value;
    if (provinceValue === "QC" || provinceValue === "ON" || provinceValue === "MN" || provinceValue === "SK" || provinceValue === "AB" || provinceValue === "BC") {
        province.classList.remove("invalid");
        provinceError.classList.remove("invalid");
    } 
    else {
        province.classList.add("invalid");
        provinceError.classList.add("invalid");
    }
})

age.addEventListener("input", function(e) {
    var ageValue = e.target.value;
    if (ageValue === "" || /^[0-9]*$/.test(ageValue) === false || ageValue < 18 || ageValue > 99) {
        age.classList.add("invalid");
        ageError.classList.add("invalid");
    } 
    else {
        age.classList.remove("invalid");
        ageError.classList.remove("invalid");
    }
})

password.addEventListener("input", function(e) {
    var passwordValue = e.target.value;
    if (passwordValue === "" || /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{6,}$/.test(passwordValue) === false) {
        password.classList.add("invalid");
        passwordError.classList.add("invalid");
    } 
    else {
        password.classList.remove("invalid");
        passwordError.classList.remove("invalid");
    }
})

password.addEventListener("keyup", function(){
    if (password.value !== passwordConfirm.value) {
        passwordConfirm.classList.add("invalid");
        passwordConfirmError.classList.add("invalid");    
    }
    else {
        passwordConfirm.classList.remove("invalid");
        passwordConfirmError.classList.remove("invalid");
    }
})

passwordConfirm.addEventListener("input", function(e) {
    var passwordConfirmValue = e.target.value;
    if (passwordConfirmValue === "" || passwordConfirmValue !== password.value) {
        passwordConfirm.classList.add("invalid");
        passwordConfirmError.classList.add("invalid");
    } 
    else {
        passwordConfirm.classList.remove("invalid");
        passwordConfirmError.classList.remove("invalid");
    }
})

email.addEventListener("input", function(e) {
    var emailValue = e.target.value;
    if(emailValue === "" || /^\w+([\.-]?\w+)*@[a-z]+([\.-]?[a-z]+)*(\.[a-z]{2,3})+$/.test(emailValue) === false) {
        email.classList.add("invalid");
        emailError.classList.add("invalid");
    }
    else {
        email.classList.remove("invalid");
        emailError.classList.remove("invalid");
    }
})

function setUpPage() {
    removeDefaultValue();    
}

if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
}