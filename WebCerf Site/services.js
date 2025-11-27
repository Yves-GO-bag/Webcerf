// WEB SERVICES BTN #SERVICES.HTML 

document.querySelectorAll('.web-services-btn').forEach(button => {
    button.addEventListener('click', () => {
        window.location.href= "contact.html";
    });
});

//CONTACT US BUTTON (HEADER NAV BTN) - SERVICES PAGE
document.getElementById('js-header-services-nav-btn')
        .addEventListener('click', () => {
    window.location.href = "contact.html";
});