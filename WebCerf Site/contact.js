// CONTACT SECTION CALL TEL BUTTON 
document.getElementById('js-callBtn') 
        .addEventListener('click', () => {
            window.location.href = "tel:+17026832850";
        });

// CONTACT SECTION EMAIL BUTTON
document.getElementById('js-emailBtn') 
        .addEventListener('click', () => {
            window.location.href = "mailto:Yvesinnevada360@gmail.com";
        });


// ASSIGN DOM ELEMENTS
const contactForm = document.getElementById("contactForm");
const contactFirstName = document.getElementById("contactFirstName");
const contactLastName = document.getElementById("contactLastName");
const contactPhone = document.getElementById("contactPhone");
const contactEmail = document.getElementById("contactEmail");
const contactCompany = document.getElementById("contactCompany");
const contactWebsite = document.getElementById("contactWebsite");
const contactMessage = document.getElementById("contactMessage");


// HELPER FUNCTIONS
function setError(element, message) {
    const errorDiv = element.nextElementSibling;
    errorDiv.innerText = message;
    element.classList.add("error");
    element.classList.remove("success");
}

function setSuccess(element) {
    const errorDiv = element.nextElementSibling;
    errorDiv.innerText = "";
    element.classList.add("success");
    element.classList.remove("error");
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// VALIDATION
function ValidateInputs() {
    const contactFirstNameValue = contactFirstName.value.trim();
    const contactLastNameValue = contactLastName.value.trim();
    const contactPhoneValue = contactPhone.value.trim();
    const contactEmailValue = contactEmail.value.trim();
    const contactCompanyValue = contactCompany.value.trim();
    const contactWebsiteValue = contactWebsite.value.trim();
    const contactMessageValue = contactMessage.value.trim();

    // FIRST NAME
    if (contactFirstNameValue === "") {
        setError(contactFirstName, "First name is required");
    } else {
        setSuccess(contactFirstName);
    }

    // LAST NAME
    if (contactLastNameValue === "") {
        setError(contactLastName, "Last name is required");
    } else {
        setSuccess(contactLastName);
    }

    // PHONE
    if (contactPhoneValue === "") {
        setError(contactPhone, "Phone is required");
    } else {
        setSuccess(contactPhone);
    }

    // EMAIL
    if (contactEmailValue === "") {
        setError(contactEmail, "Email is required");
    } else if (!isValidEmail(contactEmailValue)) {
        setError(contactEmail, "Enter a valid email");
    } else {
        setSuccess(contactEmail);
    }

    // COMPANY
    if (contactCompanyValue === "") {
        setError(contactCompany, "Company name is required");
    } else {
        setSuccess(contactCompany);
    }

    // WEBSITE URL
    if (contactWebsiteValue === "") {
        setError(contactWebsite, "Website URL is required");
    } else {
        setSuccess(contactWebsite);
    }

    // MESSAGE
    if (contactMessageValue === "") {
        setError(contactMessage, "Message is required");
    } else {
        setSuccess(contactMessage);
    }
}

// FORM SUBMISSION
form.addEventListener("submit", (e) => {
    e.preventDefault();
    ValidateInputs();

    const inputs = [firstName, lastName, phone, email, company, url, message];
    const allValid = inputs.every(input => input.classList.contains("success"));

    if (allValid) {
        form.submit(); 
    }
});
