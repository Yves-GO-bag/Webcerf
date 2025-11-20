
//FORM CODES (start)
const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const company = document.getElementById('company');
const url = document.getElementById('website');
const message = document.querySelector('textarea');

// SHOW ERROR
function setError(input, message) {
    const formGroup = input.parentElement;
    const errorDisplay = formGroup.querySelector('.error');

    errorDisplay.innerText = message;
    input.classList.add('error');
    input.classList.remove('success');
}

// SHOW SUCCESS
function setSuccess(input) {
    const formGroup = input.parentElement;
    const errorDisplay = formGroup.querySelector('.error');

    errorDisplay.innerText = "";
    input.classList.remove('error');
    input.classList.add('success');
}

// EMAIL CHECK
function isValidEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

// VALIDATION
function ValidateInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const companyValue = company.value.trim();
    const urlValue = url.value.trim();
    const messageValue = message.value.trim();

    // FIRST NAME
    if (firstNameValue === "") {
        setError(firstName, "First name is required");
    } else {
        setSuccess(firstName);
    }

    // LAST NAME
    if (lastNameValue === "") {
        setError(lastName, "Last name is required");
    } else {
        setSuccess(lastName);
    }

    // PHONE
    if (phoneValue === "") {
        setError(phone, "Phone is required");
    } else {
        setSuccess(phone);
    }

    // EMAIL
    if (emailValue === "") {
        setError(email, "Email is required");
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Enter a valid email");
    } else {
        setSuccess(email);
    }

    // COMPANY
    if (companyValue === "") {
        setError(company, "Company name is required");
    } else {
        setSuccess(company);
    }

    // URL
    if (urlValue === "") {
        setError(url, "Website URL is required");
    } else {
        setSuccess(url);
    }

    // MESSAGE
    if (messageValue === "") {
        setError(message, "Message is required");
    } else {
        setSuccess(message);
    }
}


//FORM SUBMISSION (SUCCESFUL)
form.addEventListener("submit", (e) => {
    e.preventDefault();
    ValidateInputs();
});


form.addEventListener("submit", (e) => {
    e.preventDefault();
    ValidateInputs();

    // Check if all inputs are valid
    const inputs = [firstName, lastName, phone, email, company, url, message];
    const allValid = inputs.every(input => input.classList.contains("success"));

    if (allValid) {
        alert("Form submitted successfully!"); // or send via fetch/EmailJS
        form.reset(); // clears all input values
        inputs.forEach(input => input.classList.remove("success")); // removes success border
    }
});

//FORM CODES (end)