//WEB BUILD SECTION BUTTON - COMPANY PAGE
document.querySelectorAll('.company-btn').forEach(button => {
    button.addEventListener('click', () => {
        window.location.href= "contact.html";
    });
});


//PROCESS BUTTON
document.querySelector('.process-btn')
        .addEventListener('click', () => {
    window.location.href = "contact.html";
});

//DESKTOP CONTACT BUTTON NAV
document.getElementById('js-header-company-btn')
        .addEventListener('click', () => {
    window.location.href = "contact.html";
});

